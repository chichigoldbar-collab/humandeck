"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildGhostSharedResult,
  calculateGhostResult,
  ghostDimensionLabels,
  ghostProfiles,
  ghostQuestions,
  type GhostAnswerMap,
} from "@/lib/ghost-sense";

type Stage = "landing" | "questions" | "result";

const answerOptions = [
  { value: 1, label: "전혀 아니다" },
  { value: 2, label: "아닌 편이다" },
  { value: 3, label: "보통이다" },
  { value: 4, label: "그런 편이다" },
  { value: 5, label: "매우 그렇다" },
];

const floatingNotes = [
  "공포는 믿음보다 반응에서 더 잘 드러납니다",
  "이 테스트를 하는 사람 중 일부는 뒤를 돌아봅니다",
  "분위기와 기척을 받아들이는 방식이 생각보다 다릅니다",
];

export function GhostSenseExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<GhostAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [sharedScores, setSharedScores] = useState<{
    sensitivity: number;
    fear: number;
    imagination: number;
  } | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildGhostSharedResult(sharedScores) : calculateGhostResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = ghostQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / ghostQuestions.length) * 100);
  const showScaryNotice = currentIndex === 6;

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);
    setIsAdvancing(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/ghost-sense");
      window.requestAnimationFrame(() => {
        document.getElementById("ghost-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(value: number) {
    if (isAdvancing) return;

    const nextAnswers = { ...answers, [String(currentQuestion.id)]: value };
    setAnswers(nextAnswers);
    setIsAdvancing(true);

    window.setTimeout(() => {
      if (currentIndex === ghostQuestions.length - 1) {
        setStage("result");
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
      setIsAdvancing(false);
    }, 250);
  }

  function goPrev() {
    if (currentIndex === 0 || isAdvancing) return;
    setCurrentIndex((prev) => prev - 1);
  }

  function restart() {
    setAnswers({});
    setCurrentIndex(0);
    setStage("landing");
    setDetailUnlocked(false);
    setSharedScores(null);
    setIsAdvancing(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/ghost-sense");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/ghost-sense`);
    shareUrl.searchParams.set("sensitivity", String(result.scores.sensitivity));
    shareUrl.searchParams.set("fear", String(result.scores.fear));
    shareUrl.searchParams.set("imagination", String(result.scores.imagination));

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(shareUrl.toString())
        .then(() => window.alert("결과 페이지 링크를 복사했습니다."))
        .catch(() => window.prompt("이 링크를 복사해 공유해보세요.", shareUrl.toString()));
      return;
    }

    window.prompt("이 링크를 복사해 공유해보세요.", shareUrl.toString());
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const hasSharedScores =
      params.has("sensitivity") && params.has("fear") && params.has("imagination");

    if (!hasSharedScores) return;

    const sensitivity = Number(params.get("sensitivity"));
    const fear = Number(params.get("fear"));
    const imagination = Number(params.get("imagination"));

    if (
      Number.isFinite(sensitivity) &&
      Number.isFinite(fear) &&
      Number.isFinite(imagination)
    ) {
      setSharedScores({ sensitivity, fear, imagination });
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("ghost-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell ghost-shell">
      <section className="hero-card ghost-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">공포 콘셉트로 보는 감각 반응 분석</span>
          <h1>
            귀신을 얼마나 느끼는
            <br />
            타입일까?
          </h1>
          <p>
            어두운 공간, 작은 소리, 이상한 기척에
            <br />
            당신이 반응하는 방식을 분석합니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>감각 민감도 · 공포 반응 · 상상/착각</span>
            <span>결과는 밈 카드처럼 정리</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview ghost-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🐺 직감형 늑대</strong>
            <p>남들보다 먼저 기척을 느끼는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🐱 과몰입형 고양이</strong>
            <p>없는데도 있다고 느끼는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"이 테스트를 하는 사람 중 일부는 중간에 뒤를 돌아봅니다."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel ghost-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 반응을 봅니다</span>
              <h2>귀신을 믿는지보다, 낯선 분위기에 당신이 어떻게 흔들리는지를 읽어봅니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>기척을 얼마나 빨리 감지하는지</strong>
                <p>어두운 공간, 작은 소리, 시선 같은 낯선 자극에 몸이 먼저 반응하는 편인지 확인합니다.</p>
              </article>
              <article className="feature-card">
                <strong>무서움이 얼마나 오래 남는지</strong>
                <p>공포 콘텐츠를 본 뒤에도 분위기와 장면이 머릿속에 오래 남는 편인지 함께 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>상상이 얼마나 개입하는지</strong>
                <p>실제 상황보다 상상과 분위기로 감정이 더 커지는 편인지 응답 패턴으로 읽어냅니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel ghost-panel">
            <div className="panel-header">
              <span>테스트 안내</span>
              <h2>공포 콘셉트는 살리되, 결과는 실제 반응 패턴을 바탕으로 정리합니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>이 테스트는 실제 초자연 현상을 판정하는 기능이 아니라, 낯선 분위기와 공포 자극에 반응하는 방식을 가볍게 살펴보는 콘텐츠입니다.</p>
              </article>
              <article className="reaction-card">
                <p>질문은 어두운 공간, 기척, 뒤를 돌아보는 습관처럼 일상적인 공포 반응을 바탕으로 구성되어 있어 빠르게 답할 수 있습니다.</p>
              </article>
              <article className="reaction-card accent">
                <p>결과는 감각 민감도, 공포 반응, 상상 개입도를 함께 보고 가장 가까운 유형으로 정리됩니다.</p>
              </article>
            </div>
          </section>

          <section className="panel landing-panel ghost-panel">
            <div className="panel-header">
              <span>결과를 이렇게 보면 좋습니다</span>
              <h2>무섭냐 안 무섭냐보다, 어떤 방식으로 분위기를 받아들이는지에 집중해보세요</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>감각이 예민한 편인지</strong>
                <p>같은 공간에서도 남들보다 먼저 기척을 느끼는 편이라면 감각 민감도가 높게 나올 수 있습니다.</p>
              </article>
              <article className="feature-card">
                <strong>공포를 오래 끌고 가는지</strong>
                <p>무서운 장면을 본 뒤 쉽게 잊지 못하거나 혼자 있을 때 더 크게 떠오르면 공포 반응 축이 높아질 수 있습니다.</p>
              </article>
              <article className="feature-card">
                <strong>상상력이 판단을 흔드는지</strong>
                <p>논리보다 분위기와 느낌이 먼저 커지는 편이라면 상상 개입도가 결과에 더 크게 반영됩니다.</p>
              </article>
            </div>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="ghost-question-section" className="panel question-panel ghost-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {ghostQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar ghost-progress-bar" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="panel-header">
            <span>{floatingNotes[currentIndex % floatingNotes.length]}</span>
            <h2>{currentQuestion.text}</h2>
          </div>

          {showScaryNotice && (
            <div className="ghost-warning-card">
              <strong>중간 문구</strong>
              <p>이 테스트를 하는 사람 중 일부는 테스트 중 뒤를 돌아봅니다.</p>
            </div>
          )}

          <div className={`answer-list ${isAdvancing ? "is-advancing" : ""}`}>
            {answerOptions.map((option) => (
              <button
                key={option.value}
                className="answer-button ghost-answer-button"
                onClick={() => selectAnswer(option.value)}
                disabled={isAdvancing}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="action-row">
            <button className="ghost-button" onClick={goPrev} disabled={currentIndex === 0 || isAdvancing}>
              이전 질문
            </button>
          </div>
        </section>
      )}

      {stage === "result" && (
        <section id="ghost-result-section" className="panel result-panel ghost-result-panel ghost-panel">
          <div className="ghost-disclaimer">
            본 테스트는 오락용 공포 콘셉트이며 실제 초자연 현상을 판정하지 않습니다.
          </div>

          <div className="result-hero ghost-result-hero">
            <p>당신의 공포 반응 타입</p>
            <strong>
              {result.profile.emblem} {result.profile.name}
            </strong>
            <p>{result.profile.headline}</p>
          </div>

          <div className="judgment-result-grid">
            <article className={`judgment-result-card ${result.profile.accent}`}>
              <div className="judgment-visual ghost-visual">
                <img
                  src={result.profile.imagePath}
                  alt={result.profile.name}
                  className={`judgment-image ghost-image-${result.profile.slug}`}
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "grid";
                  }}
                />
                <div className="judgment-image-fallback">{result.profile.emblem}</div>
              </div>
              <div className="judgment-card-copy">
                <div className="judgment-card-topline">
                  <span>메인 결과</span>
                  <strong>{result.profile.headline}</strong>
                </div>
                <div className="judgment-card-head">
                  <div>
                    <h3>{result.profile.name}</h3>
                    <p>{result.profile.description}</p>
                  </div>
                </div>
                <blockquote>{result.profile.meme}</blockquote>
              </div>
            </article>

            <article className="judgment-sub-card ghost-dimension-card">
              <div className="judgment-sub-head">
                <div>
                  <span>3가지 핵심 축</span>
                  <strong>당신은 어떤 방식으로 분위기를 받아들이는지 보여줍니다</strong>
                </div>
              </div>
              <div className="dimension-bars">
                {Object.entries(result.scores).map(([dimension, score]) => (
                  <div key={dimension} className="dimension-row">
                    <div className="dimension-meta">
                      <span>{ghostDimensionLabels[dimension as keyof typeof ghostDimensionLabels]}</span>
                      <strong>{score} / 20</strong>
                    </div>
                    <div className="dimension-track ghost-dimension-track">
                      <div
                        className="dimension-bar ghost-dimension-bar"
                        style={{ width: `${Math.min(100, (score / 20) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="share-box judgment-share-box ghost-share-box">
            <p>결과를 다시 보고 싶거나 친구에게 보내고 싶다면 링크를 복사해두세요.</p>
            <div className="action-row">
              <button className="primary-button" onClick={handleShare}>
                결과 공유하기
              </button>
              <button className="ghost-button" onClick={restart}>
                다시 테스트하기
              </button>
            </div>
          </div>

          {!detailUnlocked ? (
            <div className="reward-panel ghost-reward-panel">
              <div>
                <span>상세 해설</span>
                <h3>왜 이런 결과가 나왔는지 이어서 보기</h3>
                <p>감각, 공포, 상상이 어떤 식으로 같이 움직였는지 더 자세히 확인할 수 있습니다.</p>
              </div>
              <div className="reward-actions">
                <button className="primary-button" onClick={() => setDetailUnlocked(true)}>
                  상세 해설 열기
                </button>
              </div>
            </div>
          ) : (
            <div className="judgment-detail-grid">
              <article className="detail-card ghost-detail-card">
                <h3>당신의 반응 요약</h3>
                <p>{result.profile.summaryBody}</p>
              </article>

              <article className="detail-card ghost-detail-card">
                <h3>왜 이런 결과가 나왔을까?</h3>
                <ul>
                  {result.profile.reasonBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card ghost-detail-card">
                <h3>한 줄 조언</h3>
                <p>{result.profile.advice}</p>
              </article>
            </div>
          )}

          <RelatedTests current="/ghost-sense" />

          <div className="panel inline-ad-panel ghost-inline-ad-panel">
            <div className="ad-slot">
              <AdSlot slot="5302993836" label="advertisement" />
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
