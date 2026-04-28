"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildSurvivalSharedResult,
  calculateSurvivalResult,
  survivalLabels,
  survivalQuestions,
  type SurvivalAnswerMap,
  type SurvivalType,
} from "@/lib/survival-type";

type Stage = "landing" | "questions" | "result";

const survivalKeys: SurvivalType[] = [
  "instinct",
  "strategic",
  "avoidant",
  "endure",
  "impulsive",
  "calculated",
  "dependent",
  "panic",
];

const floatingNotes = [
  "위기 상황에서는 머리로 생각하는 나와 실제로 움직이는 내가 꽤 다를 수 있습니다",
  "숲에서 길을 잃은 설정이지만, 실제로는 판단력과 감정 반응을 같이 보는 테스트입니다",
  "당신은 멈추는 사람인지, 움직이는 사람인지, 아니면 같이 해결하려는 사람인지 드러납니다",
];

export function SurvivalTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<SurvivalAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<Record<SurvivalType, number> | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildSurvivalSharedResult(sharedScores) : calculateSurvivalResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = survivalQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / survivalQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/survival-type");
      window.requestAnimationFrame(() => {
        document.getElementById("survival-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: String(optionIndex) };
    setAnswers(nextAnswers);

    if (currentIndex === survivalQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/survival-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/survival-type`);
    survivalKeys.forEach((key) => {
      shareUrl.searchParams.set(key, String(result.scores[key]));
    });

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
    const hasSharedScores = survivalKeys.every((key) => params.has(key));
    if (!hasSharedScores) return;

    const scores = survivalKeys.reduce(
      (acc, key) => {
        acc[key] = Number(params.get(key));
        return acc;
      },
      {} as Record<SurvivalType, number>,
    );

    if (survivalKeys.every((key) => Number.isFinite(scores[key]))) {
      setSharedScores(scores);
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("survival-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card survival-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">숲에서 길을 잃은 설정으로 보는 위기 대응 방식, 감정 반응, 행동 스타일 분석</span>
          <h1>
            당신은 위기 상황에서
            <br />
            어떤 인간일까
          </h1>
          <p>
            길을 잃었을 때, 당신의 진짜 선택.
            <br />
            머리로 생각하는 나와 실제 행동하는 나.
            <br />
            상황이 꼬였을 때 어떻게 움직이는지 분석합니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>메인 + 서브 결과</span>
            <span>판단력 + 감정 + 행동 스타일</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview survival-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🐺 생존본능 늑대</strong>
            <p>빠르게 판단하고 움직이는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🦉 전략가 부엉이</strong>
            <p>상황 파악이 먼저인 타입</p>
          </article>
          <article className="preview-quote">
            <p>"머리로는 차분할 줄 알았는데, 실제 위기 상상에선 생각보다 몸이 먼저 움직일 수 있다."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 걸 봅니다</span>
              <h2>위험 앞에서 움직이는지, 버티는지, 피하는지, 같이 해결하려는지를 함께 읽습니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>판단이 먼저인지 행동이 먼저인지</strong>
                <p>위기 상황에서 분석으로 시작하는지, 일단 움직이는지를 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>감정이 어떻게 들어오는지</strong>
                <p>불안이 커지는지, 감정을 눌러서 버티는지, 누군가를 찾는지 함께 읽습니다.</p>
              </article>
              <article className="feature-card">
                <strong>실제 선택 스타일이 어떤지</strong>
                <p>회피형인지, 버티는형인지, 계산형인지, 멘붕형인지 행동 패턴으로 정리합니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 몰입감이 강하냐면</span>
              <h2>숲에서 길을 잃은 설정 하나만으로도 머리로 생각하는 나와 실제 반응하는 내가 꽤 다르게 튀어나오기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“평소엔 차분한 줄 알았는데, 막상 위기 상상하니까 바로 움직이는 답만 골랐음.”</p>
              </article>
              <article className="reaction-card">
                <p>“판단형인 줄 알았는데 불안 커지면 멈추는 쪽이라 결과가 더 찔렸다.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“재미로 시작했는데, 결국 내가 압박 상황에서 어떤 사람인지 보이는 테스트다.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>가볍게 답해도 충분합니다</span>
              <h2>길을 잃었을 때 당신은 어떤 방식으로 살아남으려는 사람인지 확인해보세요</h2>
              <p>
                빠른 판단, 위험 회피, 버티는 힘, 멘붕,
                <br />
                어떤 반응이 위기에서 먼저 튀는지
                <br />
                캐릭터처럼 읽어볼 수 있습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="survival-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {survivalQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar survival-progress-bar" style={{ width: `${progress}%` }} />
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
        <section id="survival-result-section" className="panel result-panel">
          <div className="result-hero survival-result-hero">
            <p>당신의 위기 대응 타입</p>
            <strong>
              {result.profile.emblem} {result.profile.name}
            </strong>
            <p>{result.profile.title}</p>
          </div>

          <div className="judgment-result-grid">
            <article className={`judgment-result-card ${result.profile.accent}`}>
              <div className="judgment-visual">
                <img
                  src={result.profile.imagePath}
                  alt={result.profile.name}
                  className={`judgment-image survival-image-${result.profile.slug}`}
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
                  <strong>생존력 {result.percent}%</strong>
                </div>
                <div className="judgment-card-head">
                  <div>
                    <h3>{result.profile.name}</h3>
                    <p>{result.profile.title}</p>
                  </div>
                </div>
                <blockquote>{result.profile.summary}</blockquote>
              </div>
            </article>

            <article className="judgment-sub-card survival-dimension-card">
              <div className="judgment-sub-head">
                <div>
                  <span>서브 성향</span>
                  <strong>
                    {result.subProfile.emblem} {result.subProfile.name}
                  </strong>
                  <p>{result.subProfile.title}</p>
                </div>
              </div>
              <div className="dimension-bars">
                {Object.entries(result.scores).map(([type, score]) => (
                  <div key={type} className="dimension-row">
                    <div className="dimension-meta">
                      <span>{survivalLabels[type as SurvivalType]}</span>
                      <strong>{score}</strong>
                    </div>
                    <div className="dimension-track survival-dimension-track">
                      <div
                        className="dimension-bar survival-dimension-bar"
                        style={{ width: `${Math.min(100, (score / 10) * 100)}%` }}
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
                <p>위기 대응 방식, 강점, 리스크, 실제 생활에서 드러나는 반응까지 더 자세히 볼 수 있습니다.</p>
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
                <h3>당신의 위기 대응 방식</h3>
                <p>{result.profile.detail}</p>
              </article>

              <article className="detail-card">
                <h3>강점</h3>
                <ul>
                  {result.profile.reasons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>실제 상황에서 이런 식입니다</h3>
                <ul>
                  {result.profile.daily.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>서브 성향</h3>
                <p>
                  {result.subProfile.emblem} {result.subProfile.name}: {result.subProfile.title}
                </p>
              </article>

              <article className="detail-card">
                <h3>한 줄 조언</h3>
                <p>{result.profile.advice}</p>
              </article>
            </div>
          )}

          <RelatedTests current="/survival-type" />

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
