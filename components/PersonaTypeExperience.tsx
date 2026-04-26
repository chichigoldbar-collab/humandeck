"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildPersonaSharedResult,
  calculatePersonaResult,
  personaLabels,
  personaQuestions,
  type PersonaAnswerMap,
  type PersonaType,
} from "@/lib/persona-type";

type Stage = "landing" | "questions" | "result";

const personaKeys: PersonaType[] = [
  "coping",
  "pleasing",
  "aloof",
  "competent",
  "cheerful",
  "dominant",
  "defensive",
  "performative",
];

const floatingNotes = [
  "사람들 앞에서 맡는 역할은 생각보다 반복됩니다",
  "겉모습은 성격보다 상황에서 더 잘 드러날 때가 있습니다",
  "이 테스트는 진짜 나와 보여지는 나 사이를 가볍게 봅니다",
];

export function PersonaTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<PersonaAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<Record<PersonaType, number> | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildPersonaSharedResult(sharedScores) : calculatePersonaResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = personaQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / personaQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/persona-type");
      window.requestAnimationFrame(() => {
        document.getElementById("persona-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: String(optionIndex) };
    setAnswers(nextAnswers);

    if (currentIndex === personaQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/persona-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/persona-type`);
    personaKeys.forEach((key) => {
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
    const hasSharedScores = personaKeys.every((key) => params.has(key));
    if (!hasSharedScores) return;

    const scores = personaKeys.reduce(
      (acc, key) => {
        acc[key] = Number(params.get(key));
        return acc;
      },
      {} as Record<PersonaType, number>,
    );

    if (personaKeys.every((key) => Number.isFinite(scores[key]))) {
      setSharedScores(scores);
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("persona-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card persona-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">사람들 앞에서 맡는 나의 역할 분석</span>
          <h1>
            나는 남들 앞에서
            <br />
            어떤 캐릭터로 살아갈까?
          </h1>
          <p>
            당신이 보여주는 모습은 진짜일까,
            <br />
            아니면 상황에 맞춘 역할일까?
            <br />
            겉모습 패턴을 캐릭터로 정리합니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>8가지 페르소나 캐릭터</span>
            <span>메인 + 서브 결과</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview persona-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🦊 괜찮은척 여우</strong>
            <p>힘들어도 아무렇지 않은 척하는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🦌 착한척 사슴</strong>
            <p>싫어도 싫다고 못 하는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"나 원래 이런 사람인 줄 알았는데, 사람들 앞에서 맡는 역할이었네."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 걸 봅니다</span>
              <h2>성격 자체보다, 사람들 앞에서 반복해서 보여주는 역할을 읽어봅니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>내가 자주 쓰는 사회적 얼굴</strong>
                <p>괜찮은 척, 착한 척, 무심한 척처럼 관계 안에서 반복되는 겉모습을 봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>상황이 바뀌어도 남는 패턴</strong>
                <p>친구, 단체 대화방, 새로운 사람 앞에서 어떤 역할을 맡는지 행동형 질문으로 읽습니다.</p>
              </article>
              <article className="feature-card">
                <strong>메인과 서브 조합 해석</strong>
                <p>가장 강한 페르소나와 두 번째 성향을 함께 보여줘서 조합으로 더 재밌게 볼 수 있습니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 찔리냐면</span>
              <h2>내가 편해서 하는 행동인지, 보여주려고 하는 역할인지 구분되기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“괜찮은 척이 성격인 줄 알았는데 그냥 습관이었음.”</p>
              </article>
              <article className="reaction-card">
                <p>“사람들 앞에서 왜 자꾸 분위기 띄우는지 조금 알 것 같음.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“메인과 서브 조합이 나를 너무 정확하게 설명해서 저장하고 싶어짐.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>가볍게 답해도 충분합니다</span>
              <h2>사람들 앞에서 내가 맡는 역할을 확인해보세요</h2>
              <p>
                착한 사람, 쿨한 사람, 유능한 사람,
                <br />
                혹은 괜찮은 척하는 사람.
                <br />
                반복되는 겉모습 패턴을 볼 수 있습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="persona-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {personaQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar persona-progress-bar" style={{ width: `${progress}%` }} />
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
        <section id="persona-result-section" className="panel result-panel">
          <div className="result-hero persona-result-hero">
            <p>당신의 겉모습 캐릭터</p>
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
                  className={`judgment-image persona-image-${result.profile.slug}`}
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
                  <strong>페르소나 일치도 {result.percent}%</strong>
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

            <article className="judgment-sub-card persona-dimension-card">
              <div className="judgment-sub-head">
                <div>
                  <span>서브 캐릭터</span>
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
                      <span>{personaLabels[type as PersonaType]}</span>
                      <strong>{score}</strong>
                    </div>
                    <div className="dimension-track persona-dimension-track">
                      <div
                        className="dimension-bar persona-dimension-bar"
                        style={{ width: `${Math.min(100, (score / 12) * 100)}%` }}
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
                <h3>사람들이 보는 나와 실제 리스크까지 보기</h3>
                <p>겉모습 패턴, 왜 그렇게 행동하는지, 사람들이 보는 모습과 주의할 점을 더 자세히 볼 수 있습니다.</p>
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
                <h3>당신의 겉모습 패턴</h3>
                <p>{result.profile.detail}</p>
              </article>

              <article className="detail-card">
                <h3>왜 이렇게 행동할까?</h3>
                <ul>
                  {result.profile.reasons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>사람들이 보는 당신</h3>
                <ul>
                  {result.profile.viewedAs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>실제 리스크</h3>
                <ul>
                  {result.profile.risks.map((item) => (
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

          <RelatedTests current="/persona-type" />

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
