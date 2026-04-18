"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildStimulationSharedResult,
  calculateStimulationResult,
  stimulationCharacters,
  stimulationQuestions,
  type StimulationAnswerMap,
  type StimulationType,
} from "@/lib/stimulation-test";

type Stage = "landing" | "questions" | "result";

const floatingNotes = [
  "당신의 손가락은 생각보다 솔직합니다",
  "재미를 찾는 건지, 자극에 끌리는 건지 곧 드러납니다",
  "마지막 결과가 살짝 아플 수 있습니다",
];

export function StimulationExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<StimulationAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedResultKeys, setSharedResultKeys] = useState<{
    mainType: StimulationType;
    subType: StimulationType;
  } | null>(null);

  const result = useMemo(
    () =>
      sharedResultKeys
        ? buildStimulationSharedResult(sharedResultKeys)
        : calculateStimulationResult(answers),
    [answers, sharedResultKeys],
  );

  const currentQuestion = stimulationQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / stimulationQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedResultKeys(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/stimulation");
      window.requestAnimationFrame(() => {
        document.getElementById("stimulation-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionId: string) {
    const nextAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(nextAnswers);

    if (currentIndex === stimulationQuestions.length - 1) {
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
    setSharedResultKeys(null);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/stimulation");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/stimulation`);
    shareUrl.searchParams.set("mainType", result.mainType);
    shareUrl.searchParams.set("subType", result.subType);

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
    const mainType = params.get("mainType") as StimulationType | null;
    const subType = params.get("subType") as StimulationType | null;

    if (mainType && subType && stimulationCharacters[mainType] && stimulationCharacters[subType]) {
      setSharedResultKeys({ mainType, subType });
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("stimulation-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card stimulation-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">스크롤, 충동구매, 집중력 붕괴가 낯설지 않을 때</span>
          <h1>
            내 도파민은
            <br />
            얼마나 흔들릴까?
          </h1>
          <p>
            몇 가지 선택만으로
            <br />
            당신의 도파민 반응 패턴을
            <br />
            캐릭터처럼 분석해드립니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>메인 결과 + 서브 성향</span>
            <span>현실적인 일상 질문</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview stimulation-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🐵 스파크몽키</strong>
            <p>기다리는 것보다 지금 당장 재밌는 게 중요한 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🐹 스크롤햄스터</strong>
            <p>멈추고 싶은데 계속 굴러가는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"나는 의지가 약한 줄 알았는데, 그냥 자극에 너무 민감한 거였네."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트가 찔리는 이유</span>
              <h2>웃기게 시작했는데, 내 뇌 습관이 너무 현실적으로 보여집니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>너무 일상적이라 더 잘 걸립니다</strong>
                <p>영상 하나, 할인 문구 하나, 알림 하나에 내가 어떻게 반응하는지 그대로 드러납니다.</p>
              </article>
              <article className="feature-card">
                <strong>결과가 밈처럼 기억됩니다</strong>
                <p>도파민 반응 패턴을 캐릭터로 뽑아내서 공유하고 비교하기 좋게 보여줍니다.</p>
              </article>
              <article className="feature-card">
                <strong>웃기지만 은근 아픕니다</strong>
                <p>왜 자꾸 폰을 보게 되는지, 왜 집중이 깨지는지 현실적으로 찔러줍니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>이런 반응이 자주 나옵니다</span>
              <h2>재미를 찾는 건지, 자극에 끌리는 건지 슬슬 구분되기 시작합니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“영상 하나만 보려다 왜 한 시간이 사라지는지 이해됨.”</p>
              </article>
              <article className="reaction-card">
                <p>“나는 게으른 게 아니라 보상이 보여야 움직이는 사람이었네.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“친구 결과랑 비교하니까 왜 서로 소비 습관이 다른지 보임.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>생각보다 금방 끝납니다</span>
              <h2>몇 가지 선택만으로 당신의 도파민 반응 패턴이 드러납니다</h2>
              <p>
                도파민이라는 단어는 어려워도,
                <br />
                결과를 보면 왜 자꾸 끌리는지 바로 이해되기 시작합니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="stimulation-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {stimulationQuestions.length}
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

      {stage === "result" && (
        <section id="stimulation-result-section" className="panel result-panel">
          <div className="result-hero stimulation-result-hero">
            <p>당신의 메인 도파민 성향</p>
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
                  className={`judgment-image stimulation-image-${result.mainCharacter.slug}`}
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "grid";
                  }}
                />
                <div className="judgment-image-fallback">{result.mainCharacter.emblem}</div>
              </div>
              <div className="judgment-card-topline">
                <span>메인 결과</span>
                <strong>{result.mainCharacter.label}</strong>
              </div>
              <div className="judgment-card-head">
                <div>
                  <h3>{result.mainCharacter.name}</h3>
                  <p>{result.mainCharacter.headline}</p>
                </div>
              </div>
              <div className="judgment-percent-row">
                <span>{result.mainCharacter.label}</span>
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
                    className={`judgment-sub-image stimulation-image-${result.subCharacter.slug}`}
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "grid";
                    }}
                  />
                  <div className="judgment-sub-image-fallback">{result.subCharacter.emblem}</div>
                </div>
                <div>
                  <span>서브 성향</span>
                  <strong>{result.subCharacter.name}</strong>
                </div>
              </div>
              <p>{result.subCharacter.headline}</p>
              <div className="judgment-sub-meta">
                <span>{result.subCharacter.label}</span>
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

          <div className="panel inline-ad-panel">
            <div className="ad-slot">
              <AdSlot slot="5302993836" label="advertisement" />
            </div>
          </div>

          {!detailUnlocked ? (
            <div className="reward-panel">
              <div>
                <span>상세 해설</span>
                <h3>왜 이런 결과가 나왔는지 바로 이어서 보기</h3>
                <p>메인 도파민 성향이 왜 잡혔는지, 일상에서 어떤 패턴으로 나타나는지, 서브 성향까지 이어서 확인할 수 있습니다.</p>
              </div>
              <div className="reward-actions">
                <button className="primary-button" onClick={() => setDetailUnlocked(true)}>
                  상세 해설 열기
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="panel inline-ad-panel">
                <div className="ad-slot">
                  <AdSlot slot="7737585483" label="advertisement" />
                </div>
              </div>

              <div className="judgment-detail-grid">
                <article className="detail-card">
                  <h3>당신의 도파민 반응 요약</h3>
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
                  <h3>일상에서 이렇게 나타나요</h3>
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
            </>
          )}

          <RelatedTests current="/stimulation" />
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
