"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildCoupleSharedResult,
  calculateCoupleResult,
  coupleDimensionLabels,
  coupleQuestions,
  type CoupleAnswerMap,
} from "@/lib/couple-type";

type Stage = "landing" | "questions" | "result";

const answerOptions = [
  { value: 1, label: "전혀 아니다" },
  { value: 2, label: "아닌 편이다" },
  { value: 3, label: "보통이다" },
  { value: 4, label: "그런 편이다" },
  { value: 5, label: "매우 그렇다" },
];

const floatingNotes = [
  "부부 관계는 감정보다 패턴에서 더 잘 보일 때가 있습니다",
  "질문은 차분하지만 결과는 꽤 솔직할 수 있습니다",
  "이건 진단이라기보다 관계 패턴을 보는 콘텐츠에 가깝습니다",
];

export function CoupleTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<CoupleAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<{
    conflict: number;
    connection: number;
    partnership: number;
    affection: number;
  } | null>(null);

  const result = useMemo(
    () =>
      sharedScores
        ? buildCoupleSharedResult(sharedScores)
        : calculateCoupleResult(answers),
    [answers, sharedScores],
  );

  const currentQuestion = coupleQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / coupleQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/couple-type");
      window.requestAnimationFrame(() => {
        document.getElementById("couple-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(value: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: value };
    setAnswers(nextAnswers);

    if (currentIndex === coupleQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/couple-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/couple-type`);
    shareUrl.searchParams.set("conflict", String(result.scores.conflict));
    shareUrl.searchParams.set("connection", String(result.scores.connection));
    shareUrl.searchParams.set("partnership", String(result.scores.partnership));
    shareUrl.searchParams.set("affection", String(result.scores.affection));

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
      params.has("conflict") &&
      params.has("connection") &&
      params.has("partnership") &&
      params.has("affection");

    if (!hasSharedScores) return;

    const conflict = Number(params.get("conflict"));
    const connection = Number(params.get("connection"));
    const partnership = Number(params.get("partnership"));
    const affection = Number(params.get("affection"));

    if (
      Number.isFinite(conflict) &&
      Number.isFinite(connection) &&
      Number.isFinite(partnership) &&
      Number.isFinite(affection)
    ) {
      setSharedScores({ conflict, connection, partnership, affection });
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("couple-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card couple-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">같이 사는 방식은 생각보다 많은 걸 드러냅니다</span>
          <h1>
            부부 관계
            <br />
            분석 테스트
          </h1>
          <p>
            갈등 처리, 정서적 연결,
            <br />
            생활 협업, 애정 표현
            <br />
            네 가지 축으로 관계 패턴을 보여드립니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 16문항</span>
            <span>4가지 핵심 지표</span>
            <span>동물 캐릭터 결과</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview couple-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🐻 안정형 곰 부부</strong>
            <p>편안하고 균형 잡힌 관계</p>
          </article>
          <article className="preview-card secondary">
            <strong>🐧 거리두기형 펭귄 부부</strong>
            <p>같이 살지만 따로 사는 느낌이 커진 관계</p>
          </article>
          <article className="preview-quote">
            <p>"안정적인 줄만 알았는데, 어디가 비어 있는지도 같이 보이네."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트가 재밌는 이유</span>
              <h2>누가 맞고 틀렸는지보다, 관계가 어떤 패턴으로 굴러가는지를 보여줍니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>감정만이 아니라 생활까지 같이 봅니다</strong>
                <p>애정 표현뿐 아니라 갈등 처리와 생활 협업까지 함께 보도록 설계했습니다.</p>
              </article>
              <article className="feature-card">
                <strong>결과가 공감형 콘텐츠로 남습니다</strong>
                <p>동물 캐릭터와 밈 한 줄로 결과를 압축해서 공유하기 좋게 정리합니다.</p>
              </article>
              <article className="feature-card">
                <strong>네 축 점수가 같이 보여집니다</strong>
                <p>관계가 좋은지 나쁜지가 아니라, 어디가 강하고 어디가 비어 있는지를 함께 봅니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>이런 반응이 자주 나옵니다</span>
              <h2>큰 싸움이 없다고 꼭 건강한 건 아니라는 걸 보여줍니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“우린 안 싸우는데 왜 피곤한지 이해됨.”</p>
              </article>
              <article className="reaction-card">
                <p>“생활은 잘 굴러가는데 감정은 비어 있다는 말이 너무 정확함.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“이건 누굴 평가하는 테스트가 아니라 관계 패턴 요약 같다.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>차분하게 답해도 충분합니다</span>
              <h2>네 가지 축으로 관계의 결이 더 선명해집니다</h2>
              <p>
                감정, 연결, 생활, 애정이
                <br />
                각각 어떻게 움직이는지 한 번에 볼 수 있습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="couple-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {coupleQuestions.length}
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
            {answerOptions.map((option) => (
              <button
                key={option.value}
                className="answer-button"
                onClick={() => selectAnswer(option.value)}
              >
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
        <section id="couple-result-section" className="panel result-panel">
          <div className="result-hero couple-result-hero">
            <p>당신들의 관계 유형</p>
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
                  className={`judgment-image couple-image-${result.profile.slug}`}
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

            <article className="judgment-sub-card couple-dimension-card">
              <div className="judgment-sub-head">
                <div>
                  <span>4가지 핵심 지표</span>
                  <strong>{coupleDimensionLabels[result.strongestDimension]}이 상대적으로 강합니다</strong>
                </div>
              </div>
              <div className="dimension-bars">
                {Object.entries(result.scores).map(([dimension, score]) => (
                  <div key={dimension} className="dimension-row">
                    <div className="dimension-meta">
                      <span>{coupleDimensionLabels[dimension as keyof typeof coupleDimensionLabels]}</span>
                      <strong>{score} / 20</strong>
                    </div>
                    <div className="dimension-track">
                      <div
                        className="dimension-bar"
                        style={{ width: `${Math.min(100, (score / 20) * 100)}%` }}
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

          <div className="panel inline-ad-panel">
            <div className="ad-slot">
              <AdSlot slot="5302993836" label="advertisement" />
            </div>
          </div>

          {!detailUnlocked ? (
            <div className="reward-panel">
              <div>
                <span>상세 해설</span>
                <h3>이 관계 유형이 왜 나왔는지 이어서 보기</h3>
                <p>결과 요약, 왜 이런 패턴이 잡혔는지, 관계를 덜 소모적으로 만드는 포인트까지 함께 볼 수 있습니다.</p>
              </div>
              <div className="reward-actions">
                <button className="primary-button" onClick={() => setDetailUnlocked(true)}>
                  상세 해설 열기
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="judgment-detail-grid">
                <article className="detail-card">
                  <h3>관계 요약</h3>
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
                  <h3>강한 축</h3>
                  <p>{coupleDimensionLabels[result.strongestDimension]} 쪽이 상대적으로 높게 나왔습니다. 이 축은 두 사람이 비교적 잘 유지하고 있는 관계의 기반일 가능성이 큽니다.</p>
                </article>

                <article className="detail-card">
                  <h3>한 줄 조언</h3>
                  <p>{result.profile.advice}</p>
                </article>
              </div>
            </>
          )}

          <RelatedTests current="/couple-type" />
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
