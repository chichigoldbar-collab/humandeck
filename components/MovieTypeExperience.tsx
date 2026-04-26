"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildMovieSharedResult,
  calculateMovieResult,
  movieLabels,
  movieQuestions,
  type MovieAnswerMap,
  type MovieType,
} from "@/lib/movie-type";

type Stage = "landing" | "questions" | "result";

const movieKeys: MovieType[] = [
  "narrative",
  "emotional",
  "stimulus",
  "analysis",
  "casual",
  "visual",
  "escape",
  "explorer",
];

const floatingNotes = [
  "좋아하는 장르보다 어떤 장면에 반응하는지가 더 먼저 드러납니다",
  "영화를 보는 방식은 생각보다 일상 취향과 감정 사용법을 닮아 있습니다",
  "당신은 이야기, 감정, 자극, 연출 중 어디에 가장 먼저 끌리는 사람일까요",
];

export function MovieTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<MovieAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<Record<MovieType, number> | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildMovieSharedResult(sharedScores) : calculateMovieResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = movieQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / movieQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/movie-type");
      window.requestAnimationFrame(() => {
        document.getElementById("movie-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: String(optionIndex) };
    setAnswers(nextAnswers);

    if (currentIndex === movieQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/movie-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/movie-type`);
    movieKeys.forEach((key) => {
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
    const hasSharedScores = movieKeys.every((key) => params.has(key));
    if (!hasSharedScores) return;

    const scores = movieKeys.reduce(
      (acc, key) => {
        acc[key] = Number(params.get(key));
        return acc;
      },
      {} as Record<MovieType, number>,
    );

    if (movieKeys.every((key) => Number.isFinite(scores[key]))) {
      setSharedScores(scores);
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("movie-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card movie-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">영화 취향으로 읽는 몰입 포인트와 감정 패턴</span>
          <h1>
            내 영화 취향이 말해주는
            <br />
            나의 진짜 성향
          </h1>
          <p>
            나는 어떤 장면에 끌리는 사람일까?
            <br />
            영화 볼 때 당신이 집중하는 포인트는 무엇일까?
            <br />
            당신은 어떤 이야기 속에 몰입하는 타입인지 분석합니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>메인 + 서브 결과</span>
            <span>영화 몰입 패턴 분석</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview movie-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🦁 서사집착 사자</strong>
            <p>이야기가 말이 돼야 몰입하는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🦊 연출집착 여우</strong>
            <p>스토리보다 어떻게 보여주느냐를 보는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"영화 취향인 줄 알았는데, 내가 세상을 보는 방식이 더 많이 보인다."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 걸 봅니다</span>
              <h2>좋아하는 장르보다 어떤 장면에서 몰입하고, 어디에서 빠르게 식는지를 읽어봅니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>스토리와 구조에 끌리는지</strong>
                <p>전개, 완성도, 떡밥 회수처럼 이야기 자체가 얼마나 중요하게 작동하는지 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>감정과 캐릭터에 빠지는지</strong>
                <p>캐릭터의 마음, 관계 변화, 감정선에 얼마나 깊게 반응하는지 확인합니다.</p>
              </article>
              <article className="feature-card">
                <strong>자극과 연출을 더 보는지</strong>
                <p>속도감, 액션, 영상미, 장면 구성이 취향의 핵심인지 함께 읽어봅니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 공감이 잘 되냐면</span>
              <h2>영화 취향은 단순한 장르 선호보다, 내가 몰입하는 방식과 감정 사용법을 더 잘 드러내기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“나는 액션 좋아하는 줄 알았는데, 사실 지루하면 바로 식는 타입이었음.”</p>
              </article>
              <article className="reaction-card">
                <p>“스토리 허술하면 못 보는 이유랑, 캐릭터 감정에 왜 오래 남는지 같이 보임.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“영화 얘기인데 결국 내가 뭘 중요하게 보는 사람인지가 더 잘 나온다.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>가볍게 답해도 충분합니다</span>
              <h2>당신은 어떤 이야기 속에 가장 쉽게 들어가는 사람인지 확인해보세요</h2>
              <p>
                스토리, 감정, 자극, 연출, 해석,
                <br />
                어느 포인트에서 몰입이 시작되는지
                <br />
                영화 취향의 결을 캐릭터로 읽어볼 수 있습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="movie-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {movieQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar movie-progress-bar" style={{ width: `${progress}%` }} />
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
        <section id="movie-result-section" className="panel result-panel">
          <div className="result-hero movie-result-hero">
            <p>당신의 영화 몰입 타입</p>
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
                  className={`judgment-image movie-image-${result.profile.slug}`}
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
                  <strong>몰입도 {result.percent}%</strong>
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

            <article className="judgment-sub-card movie-dimension-card">
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
                      <span>{movieLabels[type as MovieType]}</span>
                      <strong>{score}</strong>
                    </div>
                    <div className="dimension-track movie-dimension-track">
                      <div
                        className="dimension-bar movie-dimension-bar"
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
                <p>당신의 영화 보는 방식, 일상 패턴, 서브 성향과 조언까지 더 자세히 볼 수 있습니다.</p>
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
                <h3>당신의 영화 보는 방식</h3>
                <p>{result.profile.detail}</p>
              </article>

              <article className="detail-card">
                <h3>왜 이런 취향일까</h3>
                <ul>
                  {result.profile.reasons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>이런 특징이 있습니다</h3>
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

          <RelatedTests current="/movie-type" />

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
