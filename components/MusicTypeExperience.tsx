"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildMusicSharedResult,
  calculateMusicResult,
  musicLabels,
  musicQuestions,
  type MusicAnswerMap,
  type MusicType,
} from "@/lib/music-type";

type Stage = "landing" | "questions" | "result";

const musicKeys: MusicType[] = [
  "emotional",
  "stimulus",
  "focus",
  "nostalgia",
  "background",
  "curation",
  "spontaneous",
  "immersive",
];

const floatingNotes = [
  "음악 취향보다 음악을 쓰는 방식이 먼저 드러납니다",
  "당신은 음악을 듣는 걸까, 감정과 집중에 활용하는 걸까",
  "플레이리스트는 생각보다 생활 패턴을 꽤 많이 말해줍니다",
];

export function MusicTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<MusicAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<Record<MusicType, number> | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildMusicSharedResult(sharedScores) : calculateMusicResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = musicQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / musicQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/music-type");
      window.requestAnimationFrame(() => {
        document.getElementById("music-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: String(optionIndex) };
    setAnswers(nextAnswers);

    if (currentIndex === musicQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/music-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/music-type`);
    musicKeys.forEach((key) => {
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
    const hasSharedScores = musicKeys.every((key) => params.has(key));
    if (!hasSharedScores) return;

    const scores = musicKeys.reduce(
      (acc, key) => {
        acc[key] = Number(params.get(key));
        return acc;
      },
      {} as Record<MusicType, number>,
    );

    if (musicKeys.every((key) => Number.isFinite(scores[key]))) {
      setSharedScores(scores);
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("music-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card music-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">플레이리스트로 읽는 감정과 몰입 패턴</span>
          <h1>
            내 플레이리스트가 말해주는
            <br />
            나의 진짜 성향
          </h1>
          <p>
            나는 음악을 듣는 걸까,
            <br />
            아니면 감정과 집중에 쓰는 걸까?
            <br />
            이어폰 속 당신의 진짜 패턴을 분석합니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>메인 + 서브 결과</span>
            <span>감성형 음악 패턴 분석</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview music-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🐋 감정잠수 고래</strong>
            <p>슬플 때 음악 깊게 파는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🦊 플레이리스트 장인 여우</strong>
            <p>선곡과 흐름까지 중요하게 보는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"난 음악을 듣는 게 아니라 그날의 기분을 정리하고 있었네."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 걸 봅니다</span>
              <h2>좋아하는 장르보다, 어떤 순간에 음악을 찾는지와 어떻게 쓰는지를 읽어봅니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>감정을 정리하기 위해 듣는지</strong>
                <p>슬플 때 더 깊이 파고들거나 복잡한 감정을 음악으로 정리하는 쪽인지 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>집중과 배경을 위해 쓰는지</strong>
                <p>작업 몰입이나 일상 배경을 위해 음악을 두는 패턴이 강한지 확인합니다.</p>
              </article>
              <article className="feature-card">
                <strong>즉흥적으로 반응하는지</strong>
                <p>그때그때 끌리는 곡을 틀어두는지, 선곡 흐름까지 직접 만드는지 같이 봅니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 공감이 잘 되냐면</span>
              <h2>플레이리스트는 취향보다 그날의 생활 패턴과 감정 사용법을 더 많이 드러내기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“난 음악 취향 테스트인 줄 알았는데 생활 패턴 테스트에 더 가까웠음.”</p>
              </article>
              <article className="reaction-card">
                <p>“왜 슬플 때 더 슬픈 노래 찾는지, 왜 작업할 때 같은 플레이리스트만 트는지 보임.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“결과가 감성적이라 거부감 없는데 이상하게 정확해서 공유하게 됨.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>가볍게 답해도 충분합니다</span>
              <h2>당신은 어떤 순간에 음악을 찾는 사람인지 확인해보세요</h2>
              <p>
                감정을 파는지, 집중을 만드는지,
                <br />
                그냥 틀어두는지, 즉흥적으로 움직이는지
                <br />
                플레이리스트 속 패턴을 읽어볼 수 있습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="music-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {musicQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar music-progress-bar" style={{ width: `${progress}%` }} />
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
        <section id="music-result-section" className="panel result-panel">
          <div className="result-hero music-result-hero">
            <p>당신의 음악 사용 패턴</p>
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
                  className={`judgment-image music-image-${result.profile.slug}`}
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
                <strong>몰입도 {result.percent}%</strong>
              </div>
              <div className="judgment-card-head">
                <div>
                  <h3>{result.profile.name}</h3>
                  <p>{result.profile.title}</p>
                </div>
              </div>
              <blockquote>{result.profile.summary}</blockquote>
            </article>

            <article className="judgment-sub-card music-dimension-card">
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
                      <span>{musicLabels[type as MusicType]}</span>
                      <strong>{score}</strong>
                    </div>
                    <div className="dimension-track music-dimension-track">
                      <div
                        className="dimension-bar music-dimension-bar"
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
                <p>당신의 음악 사용 방식, 일상 패턴, 서브 성향과 조언까지 더 자세히 볼 수 있습니다.</p>
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
                <h3>당신의 음악 사용 방식</h3>
                <p>{result.profile.detail}</p>
              </article>

              <article className="detail-card">
                <h3>왜 이런 패턴일까</h3>
                <ul>
                  {result.profile.reasons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>일상에서 이렇게 나타납니다</h3>
                <ul>
                  {result.profile.daily.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>서브 성향</h3>
                <p>
                  {result.subProfile.emblem} {result.subProfile.name}:
                  {" "}
                  {result.subProfile.title}
                </p>
              </article>

              <article className="detail-card">
                <h3>한 줄 조언</h3>
                <p>{result.profile.advice}</p>
              </article>
            </div>
          )}

          <RelatedTests current="/music-type" />

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
