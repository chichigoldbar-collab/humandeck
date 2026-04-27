"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  baseballLabels,
  baseballQuestions,
  buildBaseballSharedResult,
  calculateBaseballResult,
  type BaseballAnswerMap,
  type BaseballType,
} from "@/lib/baseball-type";

type Stage = "landing" | "questions" | "result";

const baseballKeys: BaseballType[] = [
  "bluff",
  "analysis",
  "emotional",
  "follower",
  "rationalizer",
  "trivia",
  "confident",
  "indifferent",
];

const floatingNotes = [
  "야구를 아는 방식보다 아는 척하는 방식이 더 먼저 드러날 수 있습니다",
  "응원, 확신, 분위기, 정보 과잉 중 어디가 먼저 튀는지 보게 됩니다",
  "모르면 모른다고 말하는 타입인지도 생각보다 중요하게 잡힙니다",
];

export function BaseballTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<BaseballAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<Record<BaseballType, number> | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildBaseballSharedResult(sharedScores) : calculateBaseballResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = baseballQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / baseballQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/baseball-type");
      window.requestAnimationFrame(() => {
        document.getElementById("baseball-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: String(optionIndex) };
    setAnswers(nextAnswers);

    if (currentIndex === baseballQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/baseball-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/baseball-type`);
    baseballKeys.forEach((key) => {
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
    const hasSharedScores = baseballKeys.every((key) => params.has(key));
    if (!hasSharedScores) return;

    const scores = baseballKeys.reduce(
      (acc, key) => {
        acc[key] = Number(params.get(key));
        return acc;
      },
      {} as Record<BaseballType, number>,
    );

    if (baseballKeys.every((key) => Number.isFinite(scores[key]))) {
      setSharedScores(scores);
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("baseball-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card baseball-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">야구 얘기할 때 드러나는 확신, 감정, 아는 척의 패턴 분석</span>
          <h1>
            나는 야구를
            <br />
            얼마나 아는 척 하는
            <br />
            인간일까
          </h1>
          <p>
            당신의 야구 지식, 진짜일까 연기일까?
            <br />
            말은 전문가, 실제는 어떨까?
            <br />
            야구 얘기할 때 드러나는 진짜 모습을 분석합니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>메인 + 서브 결과</span>
            <span>아는 척 패턴 분석</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview baseball-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🦊 얕은지식 여우</strong>
            <p>키워드만 알고 전문가처럼 말하는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🦉 진짜분석 부엉이</strong>
            <p>데이터와 흐름을 같이 보는 진짜 팬</p>
          </article>
          <article className="preview-quote">
            <p>"야구를 얼마나 아는가보다, 야구를 어떻게 말하는지가 더 잘 들킨다."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 걸 봅니다</span>
              <h2>야구 지식의 깊이보다, 야구 얘기할 때 어떤 태도로 반응하는지를 먼저 읽습니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>진짜 분석형인지</strong>
                <p>경기 흐름, 작전, 결과의 이유를 얼마나 실제로 같이 보는지 살펴봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>아는 척이 먼저인지</strong>
                <p>완전히 모르는 상태를 불편해해서 말부터 던지는지 확인합니다.</p>
              </article>
              <article className="feature-card">
                <strong>감정과 확신이 앞서는지</strong>
                <p>응원, 분위기, 자신감이 정보보다 먼저 움직이는지도 같이 봅니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 이 테스트가 찔리냐면</span>
              <h2>야구를 얼마나 보느냐보다, 야구 얘기할 때 내가 어떤 사람인지가 더 잘 드러나기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“나 결과 보니까 아는 팬이 아니라 아는 척 잘하는 팬이었음.”</p>
              </article>
              <article className="reaction-card">
                <p>“맨날 투수 운용 탓하는데, 왜 그런 말부터 튀는지 설명돼서 웃김.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“진짜 지식보다 확신으로 버티는 순간이 많았다는 게 제일 찔렸다.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>가볍게 답해도 충분합니다</span>
              <h2>당신은 야구를 아는 사람인지, 아는 척 잘하는 사람인지 확인해보세요</h2>
              <p>
                확신, 감정, 잡지식, 분위기 적응,
                <br />
                어떤 방식으로 야구 얘기에 들어가는지
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
        <section id="baseball-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {baseballQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar baseball-progress-bar" style={{ width: `${progress}%` }} />
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
        <section id="baseball-result-section" className="panel result-panel">
          <div className="result-hero baseball-result-hero">
            <p>당신의 야구 아는 척 타입</p>
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
                  className={`judgment-image baseball-image-${result.profile.slug}`}
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
                  <strong>신뢰도 {result.percent}%</strong>
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

            <article className="judgment-sub-card baseball-dimension-card">
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
                      <span>{baseballLabels[type as BaseballType]}</span>
                      <strong>{score}</strong>
                    </div>
                    <div className="dimension-track baseball-dimension-track">
                      <div
                        className="dimension-bar baseball-dimension-bar"
                        style={{ width: `${Math.min(100, (score / 10) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="share-box judgment-share-box">
            <p>결과를 다시 보고 싶거나 친구랑 비교하고 싶다면 링크를 복사해두세요.</p>
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
                <p>야구 얘기할 때 왜 이런 패턴이 나오는지, 사람들이 어떻게 느끼는지까지 더 자세히 볼 수 있습니다.</p>
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
                <h3>당신의 야구 스타일</h3>
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

          <RelatedTests current="/baseball-type" />

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
