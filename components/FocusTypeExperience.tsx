"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildFocusSharedResult,
  calculateFocusResult,
  focusDimensionLabels,
  focusQuestions,
  type FocusAnswerMap,
} from "@/lib/focus-type";

type Stage = "landing" | "questions" | "result";

const answerOptions = [
  { value: 1, label: "전혀 아니다" },
  { value: 2, label: "아닌 편이다" },
  { value: 3, label: "보통이다" },
  { value: 4, label: "그런 편이다" },
  { value: 5, label: "매우 그렇다" },
];

const floatingNotes = [
  "집중력은 의지보다 패턴에서 더 잘 드러날 때가 있습니다",
  "여러 일을 동시에 한다고 다 효율이 높은 건 아닐 수 있습니다",
  "이 테스트는 자기계발형 콘텐츠에 가깝습니다",
];

export function FocusTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<FocusAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<{
    focus: number;
    multi: number;
    impulse: number;
  } | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildFocusSharedResult(sharedScores) : calculateFocusResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = focusQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / focusQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/focus-type");
      window.requestAnimationFrame(() => {
        document.getElementById("focus-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(value: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: value };
    setAnswers(nextAnswers);

    if (currentIndex === focusQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/focus-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/focus-type`);
    shareUrl.searchParams.set("focus", String(result.scores.focus));
    shareUrl.searchParams.set("multi", String(result.scores.multi));
    shareUrl.searchParams.set("impulse", String(result.scores.impulse));

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
      params.has("focus") && params.has("multi") && params.has("impulse");

    if (!hasSharedScores) return;

    const focus = Number(params.get("focus"));
    const multi = Number(params.get("multi"));
    const impulse = Number(params.get("impulse"));

    if (Number.isFinite(focus) && Number.isFinite(multi) && Number.isFinite(impulse)) {
      setSharedScores({ focus, multi, impulse });
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("focus-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card focus-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">자기계발형 테스트로 보는 작업 습관</span>
          <h1>
            집중 vs 멀티태스킹
            <br />
            성향 테스트
          </h1>
          <p>
            한 가지에 깊게 몰입하는지,
            <br />
            여러 일을 동시에 돌리는지,
            <br />
            아니면 중간에 쉽게 끌리는지 보여드립니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>집중 · 동시 처리 · 중간 이탈</span>
            <span>결과는 캐릭터 카드로 정리</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview focus-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🦉 집중형 올빼미</strong>
            <p>한 가지에 깊게 몰입하는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🐒 멀티형 원숭이</strong>
            <p>여러 일을 동시에 굴리는 데 익숙한 타입</p>
          </article>
          <article className="preview-quote">
            <p>"난 멀티태스킹 잘하는 줄 알았는데 그냥 자꾸 바꾸는 사람이었네."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트가 보는 것</span>
              <h2>집중력 자체보다, 일을 굴리는 방식이 어느 쪽에 가까운지 읽어봅니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>한 가지에 오래 몰입하는지</strong>
                <p>시작한 일을 끝까지 밀어붙이는 흐름이 강한지 먼저 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>여러 일을 동시에 돌리는지</strong>
                <p>병렬로 작업할 때 오히려 리듬이 생기는 편인지 확인합니다.</p>
              </article>
              <article className="feature-card">
                <strong>중간에 쉽게 끌리는지</strong>
                <p>작업 도중 다른 생각이나 앱, 새로운 할 일로 얼마나 자주 이동하는지 같이 봅니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 공감이 잘 되냐면</span>
              <h2>집중형이냐 멀티형이냐보다, 내가 일을 망치는 패턴이 뭔지 보이기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“난 멀티태스킹 잘한다고 생각했는데 사실 마무리가 약한 거였음.”</p>
              </article>
              <article className="reaction-card">
                <p>“집중이 약한 게 아니라 자꾸 중간에 끌리는 타입이라는 게 더 정확함.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“자기계발 콘텐츠처럼 읽히는데 결과는 꽤 현실적임.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>가볍게 답해도 충분합니다</span>
              <h2>지금의 작업 패턴을 한 번 정리해보세요</h2>
              <p>
                집중과 분산 중 어느 쪽이 강한지,
                <br />
                그리고 흐름을 자주 깨는 포인트가 뭔지
                <br />
                한 번에 읽어볼 수 있습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="focus-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {focusQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar focus-progress-bar" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="panel-header">
            <span>{floatingNotes[currentIndex % floatingNotes.length]}</span>
            <h2>{currentQuestion.text}</h2>
          </div>

          <div className="answer-list">
            {answerOptions.map((option) => (
              <button key={option.value} className="answer-button" onClick={() => selectAnswer(option.value)}>
                {option.label}
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
        <section id="focus-result-section" className="panel result-panel">
          <div className="result-hero focus-result-hero">
            <p>당신의 작업 성향</p>
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
                  className={`judgment-image focus-image-${result.profile.slug}`}
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

            <article className="judgment-sub-card focus-dimension-card">
              <div className="judgment-sub-head">
                <div>
                  <span>3가지 핵심 축</span>
                  <strong>{focusDimensionLabels[result.strongestDimension]} 쪽이 더 강하게 보입니다</strong>
                </div>
              </div>
              <div className="dimension-bars">
                {Object.entries(result.scores).map(([dimension, score]) => (
                  <div key={dimension} className="dimension-row">
                    <div className="dimension-meta">
                      <span>{focusDimensionLabels[dimension as keyof typeof focusDimensionLabels]}</span>
                      <strong>{score} / 20</strong>
                    </div>
                    <div className="dimension-track focus-dimension-track">
                      <div
                        className="dimension-bar focus-dimension-bar"
                        style={{ width: `${Math.min(100, (score / 20) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="share-box judgment-share-box">
            <p>결과를 다시 보고 싶거나 친구와 비교하고 싶다면 링크를 복사해두세요.</p>
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
                <p>집중, 멀티태스킹, 중간 이탈이 어떤 식으로 같이 움직였는지 더 자세히 볼 수 있습니다.</p>
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
                <h3>당신의 작업 패턴 요약</h3>
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

          <RelatedTests current="/focus-type" />

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
