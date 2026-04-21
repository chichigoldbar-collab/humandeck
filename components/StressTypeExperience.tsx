"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildStressSharedResult,
  calculateStressResult,
  stressDimensionLabels,
  stressQuestions,
  type StressAnswerMap,
} from "@/lib/stress-type";

type Stage = "landing" | "questions" | "result";

const floatingNotes = [
  "스트레스는 세기보다 처리 방식에서 더 큰 차이가 납니다",
  "이 테스트는 얼마나 버티는지가 아니라 어떻게 풀어내는지를 봅니다",
  "가볍게 답해도 반복되는 패턴은 꽤 선명하게 드러납니다",
];

export function StressTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<StressAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<{
    avoid: number;
    release: number;
    solve: number;
    overthink: number;
  } | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildStressSharedResult(sharedScores) : calculateStressResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = stressQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / stressQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/stress-type");
      window.requestAnimationFrame(() => {
        document.getElementById("stress-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: String(optionIndex) };
    setAnswers(nextAnswers);

    if (currentIndex === stressQuestions.length - 1) {
      setStage("result");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }

  function goPrev() {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  }

  function restart() {
    setAnswers({});
    setCurrentIndex(0);
    setStage("landing");
    setDetailUnlocked(false);
    setSharedScores(null);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/stress-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/stress-type`);
    shareUrl.searchParams.set("avoid", String(result.scores.avoid));
    shareUrl.searchParams.set("release", String(result.scores.release));
    shareUrl.searchParams.set("solve", String(result.scores.solve));
    shareUrl.searchParams.set("overthink", String(result.scores.overthink));

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
      params.has("avoid") &&
      params.has("release") &&
      params.has("solve") &&
      params.has("overthink");

    if (!hasSharedScores) return;

    const avoid = Number(params.get("avoid"));
    const release = Number(params.get("release"));
    const solve = Number(params.get("solve"));
    const overthink = Number(params.get("overthink"));

    if (
      Number.isFinite(avoid) &&
      Number.isFinite(release) &&
      Number.isFinite(solve) &&
      Number.isFinite(overthink)
    ) {
      setSharedScores({ avoid, release, solve, overthink });
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("stress-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card stress-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">자기이해 콘텐츠로 보는 스트레스 처리 패턴</span>
          <h1>
            스트레스 관리
            <br />
            스타일 테스트
          </h1>
          <p>
            스트레스를 받을 때
            <br />
            피하는지, 푸는지, 해결하는지,
            <br />
            생각만 많아지는지 보여드립니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>회피 · 해소 · 해결 · 과생각</span>
            <span>결과는 캐릭터 카드로 정리</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview stress-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🐺 해결형 늑대</strong>
            <p>문제를 직접 정리하고 해결하려는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🦊 분석형 여우</strong>
            <p>생각은 많지만 실행이 늦는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"난 스트레스를 잘 참는 줄 알았는데 그냥 미루고 있었던 거였네."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 걸 봅니다</span>
              <h2>스트레스를 얼마나 받는지가 아니라, 어떤 방식으로 처리하는지를 읽어봅니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>잠깐 끊고 도망가는지</strong>
                <p>미루기, 딴짓, 멈추기처럼 현실에서 잠깐 빠져나가는 반응이 강한지 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>기분 전환으로 푸는지</strong>
                <p>먹기, 수다, 소비, 쉬기처럼 감정을 배출하며 회복하는 흐름이 강한지 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>바로 해결로 들어가는지</strong>
                <p>원인과 순서를 정리하고 문제를 직접 처리하는 쪽이 자연스러운지 확인합니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 공감이 잘 되냐면</span>
              <h2>내가 스트레스에 강한지보다, 반복되는 처리 습관이 먼저 보이기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“난 해결형인 줄 알았는데 생각만 많이 하는 타입이었음.”</p>
              </article>
              <article className="reaction-card">
                <p>“스트레스 받으면 먹고 쉬는 패턴이 왜 반복되는지 좀 보임.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“이건 점수보다 습관 해석이 더 와닿는 자기이해 콘텐츠 같다.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>짧게 답해도 충분합니다</span>
              <h2>내가 지칠 때 어떤 방향으로 기울어지는지 한 번 정리해보세요</h2>
              <p>
                회피, 해소, 해결, 과생각 중
                <br />
                어느 쪽이 먼저 튀어나오는지
                <br />
                캐릭터처럼 확인할 수 있습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="stress-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {stressQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar stress-progress-bar" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="panel-header">
            <span>{floatingNotes[currentIndex % floatingNotes.length]}</span>
            <h2>{currentQuestion.text}</h2>
          </div>

          <div className="answer-list">
            {currentQuestion.options.map((option, index) => (
              <button key={option.text} className="answer-button" onClick={() => selectAnswer(index)}>
                {option.text}
              </button>
            ))}
          </div>

          <div className="action-row">
            <button className="ghost-button" onClick={goPrev} disabled={currentIndex === 0}>
              이전 질문
            </button>
          </div>
        </section>
      )}

      {stage === "result" && (
        <section id="stress-result-section" className="panel result-panel">
          <div className="result-hero stress-result-hero">
            <p>당신의 스트레스 관리 스타일</p>
            <strong>
              {result.profile.emblem} {result.profile.name}
            </strong>
            <p>{result.profile.headline}</p>
          </div>

          <div className="judgment-result-grid">
            <article className={`judgment-result-card ${result.profile.accent}`}>
              <div className="judgment-visual">
                <img
                  src={result.profile.imagePath}
                  alt={result.profile.name}
                  className={`judgment-image stress-image-${result.profile.slug}`}
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "grid";
                  }}
                />
                <div className="judgment-image-fallback">{result.profile.emblem}</div>
              </div>
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
            </article>

            <article className="judgment-sub-card stress-dimension-card">
              <div className="judgment-sub-head">
                <div>
                  <span>4가지 핵심 축</span>
                  <strong>{stressDimensionLabels[result.strongestDimension]} 쪽이 더 강하게 보입니다</strong>
                </div>
              </div>
              <div className="dimension-bars">
                {Object.entries(result.scores).map(([dimension, score]) => (
                  <div key={dimension} className="dimension-row">
                    <div className="dimension-meta">
                      <span>{stressDimensionLabels[dimension as keyof typeof stressDimensionLabels]}</span>
                      <strong>{score} / 6</strong>
                    </div>
                    <div className="dimension-track stress-dimension-track">
                      <div
                        className="dimension-bar stress-dimension-bar"
                        style={{ width: `${Math.min(100, (score / 6) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="share-box judgment-share-box">
            <p>결과를 다시 보고 싶거나 공유하고 싶다면 링크를 복사해두세요.</p>
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
            <div className="reward-panel">
              <div>
                <span>상세 해설</span>
                <h3>왜 이런 결과가 나왔는지 이어서 보기</h3>
                <p>스트레스가 쌓였을 때 회피, 해소, 해결, 과생각이 어떤 식으로 같이 움직이는지 더 자세히 볼 수 있습니다.</p>
              </div>
              <div className="reward-actions">
                <button className="primary-button" onClick={() => setDetailUnlocked(true)}>
                  상세 해설 열기
                </button>
              </div>
            </div>
          ) : (
            <div className="judgment-detail-grid">
              <article className="detail-card">
                <h3>당신의 처리 패턴 요약</h3>
                <p>{result.profile.summaryBody}</p>
              </article>

              <article className="detail-card">
                <h3>왜 이런 결과가 나왔을까?</h3>
                <ul>
                  {result.profile.reasonBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>한 줄 조언</h3>
                <p>{result.profile.advice}</p>
              </article>
            </div>
          )}

          <RelatedTests current="/stress-type" />

          <div className="panel inline-ad-panel">
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
