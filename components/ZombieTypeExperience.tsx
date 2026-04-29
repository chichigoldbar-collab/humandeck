"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildZombieSharedResult,
  calculateZombieResult,
  zombieLabels,
  zombieQuestions,
  type ZombieAnswerMap,
  type ZombieType,
} from "@/lib/zombie-type";

type Stage = "landing" | "questions" | "result";

const zombieKeys: ZombieType[] = [
  "breaker",
  "strategist",
  "avoider",
  "holder",
  "impulsive",
  "calculator",
  "cooperative",
  "panic",
];

const floatingNotes = [
  "좀비 세상 설정이지만 실제로는 당신의 위기 대응 본능을 보는 테스트입니다",
  "생존은 성격보다 선택의 패턴에서 더 선명하게 드러납니다",
  "당신은 리더형인지, 생존형인지, 멘붕형인지 상황이 꼬일수록 더 잘 보입니다",
];

export function ZombieTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ZombieAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<Record<ZombieType, number> | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildZombieSharedResult(sharedScores) : calculateZombieResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = zombieQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / zombieQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/zombie-type");
      window.requestAnimationFrame(() => {
        document.getElementById("zombie-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: String(optionIndex) };
    setAnswers(nextAnswers);

    if (currentIndex === zombieQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/zombie-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/zombie-type`);
    zombieKeys.forEach((key) => {
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
    const hasSharedScores = zombieKeys.every((key) => params.has(key));
    if (!hasSharedScores) return;

    const scores = zombieKeys.reduce(
      (acc, key) => {
        acc[key] = Number(params.get(key));
        return acc;
      },
      {} as Record<ZombieType, number>,
    );

    if (zombieKeys.every((key) => Number.isFinite(scores[key]))) {
      setSharedScores(scores);
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("zombie-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card zombie-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">좀비 아포칼립스 설정으로 보는 판단력, 협력 본능, 생존 스타일 분석</span>
          <h1>
            좀비 세상에서
            <br />
            당신은 어떤 인간일까
          </h1>
          <p>
            살아남는 방식은 사람마다 다릅니다.
            <br />
            당신은 리더일까, 생존자일까, 탈락자일까?
            <br />
            선택 몇 개로 드러나는 당신의 생존 본능을 읽어봅니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>메인 + 서브 결과</span>
            <span>생존 본능 + 팀 반응</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview zombie-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🐺 돌파형 늑대</strong>
            <p>위험해도 밀고 나가는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🦉 전략형 부엉이</strong>
            <p>살아남는 건 계산이라고 믿는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"좀비를 상상하는데도 결국 드러나는 건 당신의 판단 방식과 생존 본능입니다."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 걸 봅니다</span>
              <h2>위험 앞에서 밀고 나가는지, 버티는지, 피하는지, 같이 움직이는지를 함께 읽습니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>행동과 결단</strong>
                <p>위기 상황에서 몸이 먼저 나가는지, 멈춰서 계산하는지 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>안전과 생존 기준</strong>
                <p>리스크를 줄이는 편인지, 버티는 편인지, 돌파하는 편인지 확인합니다.</p>
              </article>
              <article className="feature-card">
                <strong>혼자 vs 팀 반응</strong>
                <p>협력으로 풀어가는지, 혼자 판단하는지, 충돌 앞에서 어떻게 움직이는지도 같이 봅니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 몰입감이 강하냐면</span>
              <h2>좀비 세상 설정은 과장 같아도, 실제로는 압박 속에서 어떤 선택을 하는지가 더 또렷하게 드러나기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“난 차분한 줄 알았는데, 막상 설정 들어가니까 바로 뛰는 답만 고르게 됨.”</p>
              </article>
              <article className="reaction-card">
                <p>“생존 테스트라기보다 위기에서 내가 팀형인지 개인형인지 보이는 느낌.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“결국 좀비보다 더 무서운 건 내가 압박 앞에서 어떤 인간인지 아는 거였음.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>가볍게 답해도 충분합니다</span>
              <h2>좀비 세상에서 당신은 어떤 방식으로 살아남으려는 사람인지 확인해보세요</h2>
              <p>
                돌파력, 전략, 버티는 힘, 협력 성향,
                <br />
                어떤 본능이 먼저 튀는지
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
        <section id="zombie-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {zombieQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar zombie-progress-bar" style={{ width: `${progress}%` }} />
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
        <section id="zombie-result-section" className="panel result-panel">
          <div className="result-hero zombie-result-hero">
            <p>당신의 좀비 세상 생존 타입</p>
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
                  className={`judgment-image zombie-image-${result.profile.slug}`}
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

            <article className="judgment-sub-card zombie-dimension-card">
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
                      <span>{zombieLabels[type as ZombieType]}</span>
                      <strong>{score}</strong>
                    </div>
                    <div className="dimension-track zombie-dimension-track">
                      <div
                        className="dimension-bar zombie-dimension-bar"
                        style={{ width: `${Math.min(100, (score / 10) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="share-box judgment-share-box">
            <p>결과를 다시 보고 싶거나 친구들과 돌려보고 싶다면 링크를 복사해두세요.</p>
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
                <p>당신의 생존 방식, 강점, 리스크, 실제 생활에서의 대응 패턴까지 더 자세히 볼 수 있습니다.</p>
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
                <h3>당신의 생존 방식</h3>
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
                <h3>실제 상황이라면</h3>
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

          <RelatedTests current="/zombie-type" />

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
