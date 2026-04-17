"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildJudgmentSharedResult,
  calculateJudgmentResult,
  judgmentCharacters,
  judgmentQuestions,
  type JudgmentAnswerMap,
  type JudgmentBiasType,
} from "@/lib/judgment-test";

type Stage = "landing" | "questions" | "preResultAd" | "result";

const floatingNotes = [
  "생각보다 당신의 뇌는 단순할지도 모릅니다",
  "마지막에 꽤 찔릴 수 있습니다",
  "합리적인 척하는 순간이 가장 위험합니다",
];

export function JudgmentExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<JudgmentAnswerMap>({});
  const [preResultCountdown, setPreResultCountdown] = useState(5);
  const [detailCountdown, setDetailCountdown] = useState(5);
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedResultKeys, setSharedResultKeys] = useState<{
    mainBias: JudgmentBiasType;
    subBias: JudgmentBiasType;
  } | null>(null);

  const result = useMemo(
    () =>
      sharedResultKeys
        ? buildJudgmentSharedResult(sharedResultKeys)
        : calculateJudgmentResult(answers),
    [answers, sharedResultKeys],
  );

  const currentQuestion = judgmentQuestions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / judgmentQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedResultKeys(null);
    setDetailUnlocked(false);
    setPreResultCountdown(5);
    setDetailCountdown(5);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/judgment");
      window.requestAnimationFrame(() => {
        document.getElementById("judgment-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionId: string) {
    const nextAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(nextAnswers);

    if (currentIndex === judgmentQuestions.length - 1) {
      setStage("preResultAd");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }

  function goPrev() {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  }

  function revealResult() {
    if (preResultCountdown > 0) return;
    setStage("result");
  }

  function unlockDetail() {
    if (detailCountdown > 0) return;
    setDetailUnlocked(true);
  }

  function restart() {
    setAnswers({});
    setCurrentIndex(0);
    setStage("landing");
    setPreResultCountdown(5);
    setDetailCountdown(5);
    setDetailUnlocked(false);
    setSharedResultKeys(null);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/judgment");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/judgment`);
    shareUrl.searchParams.set("mainBias", result.mainBias);
    shareUrl.searchParams.set("subBias", result.subBias);

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
    const mainBias = params.get("mainBias") as JudgmentBiasType | null;
    const subBias = params.get("subBias") as JudgmentBiasType | null;

    if (mainBias && subBias && judgmentCharacters[mainBias] && judgmentCharacters[subBias]) {
      setSharedResultKeys({ mainBias, subBias });
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "preResultAd" || preResultCountdown <= 0) return;

    const timer = window.setTimeout(() => {
      setPreResultCountdown((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [stage, preResultCountdown]);

  useEffect(() => {
    if (stage !== "result" || detailUnlocked || detailCountdown <= 0) return;

    const timer = window.setTimeout(() => {
      setDetailCountdown((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [stage, detailUnlocked, detailCountdown]);

  return (
    <main className="shell">
      <section className="hero-card judgment-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">재미로 시작했다가 현실을 마주치는 테스트</span>
          <h1>
            내 판단은
            <br />
            얼마나 틀렸을까?
          </h1>
          <p>
            나는 꽤 합리적이라고 믿고 있나요?
            <br />
            몇 가지 선택만으로 당신의 인지편향을
            <br />
            날카롭게 분석해드립니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>상황형 질문 기반</span>
            <span>메인 편향 + 서브 성향</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview judgment-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🦊 픽스폭스</strong>
            <p>보고 싶은 것만 골라 믿는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🐋 앵커웨일</strong>
            <p>첫 정보의 영향을 오래 끌고 가는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"합리적인 줄 알았는데 생각보다 편향적이네."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트가 찔리는 이유</span>
              <h2>질문은 가볍지만, 결과는 내 판단 습관을 꽤 정확하게 건드립니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>합리적인 척하는 순간이 들킵니다</strong>
                <p>확증편향, 손실회피, 앵커링 같은 판단 습관을 캐릭터로 보여줍니다.</p>
              </article>
              <article className="feature-card">
                <strong>일상적인 선택으로 결과가 나옵니다</strong>
                <p>쇼핑, 뉴스, 인간관계처럼 익숙한 장면만으로도 내 편향이 드러납니다.</p>
              </article>
              <article className="feature-card">
                <strong>결과가 밈처럼 기억됩니다</strong>
                <p>메인 편향과 서브 성향을 카드처럼 정리해서 공유하기 좋게 보여줍니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>이런 반응이 자주 나옵니다</span>
              <h2>웃으면서 시작했다가, 마지막엔 스스로를 좀 의심하게 됩니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“이거 내 소비 습관까지 다 들켰네.”</p>
              </article>
              <article className="reaction-card">
                <p>“나는 합리적인 줄 알았는데 그냥 확신이 강한 사람이었음.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“친구랑 비교해보니까 서로 왜 답답했는지 이해됨.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>생각보다 빨리 끝나요</span>
              <h2>선택하는 순간, 당신의 편향이 드러납니다</h2>
              <p>
                12문항이면 충분합니다.
                <br />
                문제는 결과를 보고 나면 조금 뜨끔할 수 있다는 점입니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="judgment-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {judgmentQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="panel-header">
            <span>{floatingNotes[currentIndex % floatingNotes.length]}</span>
            <h2>{currentQuestion.text}</h2>
          </div>

          <div className="answer-list">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className="answer-button"
                onClick={() => selectAnswer(option.id)}
              >
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

      {stage === "preResultAd" && (
        <section className="panel ad-panel">
          <div className="panel-header">
            <span>거의 다 왔어요</span>
            <h2>당신 결과를 정리하는 중입니다</h2>
          </div>
          <div className="ad-slot">
            <AdSlot slot="5302993836" label="sponsored" />
          </div>
          <button
            className="primary-button"
            onClick={revealResult}
            disabled={preResultCountdown > 0}
          >
            {preResultCountdown > 0
              ? `${preResultCountdown}초 후 결과 공개`
              : "결과 공개하기"}
          </button>
        </section>
      )}

      {stage === "result" && (
        <section className="panel result-panel">
          <div className="result-hero judgment-result-hero">
            <p>당신의 메인 편향</p>
            <strong>
              {result.mainCharacter.emblem} {result.mainCharacter.name}
            </strong>
            <p>{result.mainCharacter.headline}</p>
          </div>

          <div className="judgment-result-grid">
            <article className={`judgment-result-card ${result.mainCharacter.accent}`}>
              <div className="judgment-visual">
                <img
                  src={result.mainCharacter.imagePath}
                  alt={result.mainCharacter.name}
                  className="judgment-image"
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "grid";
                  }}
                />
                <div className="judgment-emblem judgment-emblem-fallback">
                  {result.mainCharacter.emblem}
                </div>
              </div>
              <div className="judgment-card-topline">
                <span>메인 결과</span>
                <strong>{result.mainCharacter.biasLabel}</strong>
              </div>
              <div className="judgment-card-head">
                <div>
                  <h3>{result.mainCharacter.name}</h3>
                  <p>{result.mainCharacter.headline}</p>
                </div>
              </div>
              <div className="judgment-percent-row">
                <span>{result.mainCharacter.biasLabel}</span>
                <strong>{result.mainPercent}%</strong>
              </div>
              <blockquote>{result.mainCharacter.shortComment}</blockquote>
            </article>

            <article className={`judgment-sub-card ${result.subCharacter.accent}`}>
              <div className="judgment-sub-head">
                <div className="judgment-sub-visual">
                  <img
                    src={result.subCharacter.imagePath}
                    alt={result.subCharacter.name}
                    className="judgment-sub-image"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "grid";
                    }}
                  />
                  <div className="judgment-emblem judgment-sub-emblem-fallback">
                    {result.subCharacter.emblem}
                  </div>
                </div>
                <div>
                  <span>서브 성향</span>
                  <strong>{result.subCharacter.name}</strong>
                </div>
              </div>
              <p>{result.subCharacter.headline}</p>
              <div className="judgment-sub-meta">
                <span>{result.subCharacter.biasLabel}</span>
                <strong>{result.subPercent}%</strong>
              </div>
            </article>
          </div>

          <div className="share-box judgment-share-box">
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
            <div className="reward-panel">
              <div>
                <span>상세 해설</span>
                <h3>{detailCountdown > 0 ? `${detailCountdown}초 후 상세 해설 열기` : "상세 해설을 확인할 수 있어요"}</h3>
                <p>왜 이런 결과가 나왔는지, 일상에서 어떻게 드러나는지까지 이어서 볼 수 있습니다.</p>
              </div>
              <div className="reward-actions">
                <AdSlot slot="7737585483" label="sponsored" />
                <button
                  className="primary-button"
                  onClick={unlockDetail}
                  disabled={detailCountdown > 0}
                >
                  상세 해설 열기
                </button>
              </div>
            </div>
          ) : (
            <div className="judgment-detail-grid">
              <article className="detail-card">
                <h3>당신의 판단 요약</h3>
                <p>{result.mainCharacter.summaryBody}</p>
              </article>

              <article className="detail-card">
                <h3>왜 이런 결과가 나왔을까?</h3>
                <ul>
                  {result.mainCharacter.reasonBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>일상에서 이렇게 나타날 수 있어요</h3>
                <ul>
                  {result.mainCharacter.dailyBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>한 줄 조언</h3>
                <p>{result.mainCharacter.advice}</p>
                <div className="judgment-sub-insight">
                  <span>서브 성향</span>
                  <strong>
                    {result.subCharacter.emblem} {result.subCharacter.name}
                  </strong>
                  <p>{result.subCharacter.cardSummary}</p>
                </div>
              </article>
            </div>
          )}
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
