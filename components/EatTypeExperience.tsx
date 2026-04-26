"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildEatSharedResult,
  calculateEatResult,
  eatCharacters,
  eatQuestions,
  type EatAnswerMap,
  type EatTrait,
} from "@/lib/eat-type";

type Stage = "landing" | "questions" | "result";

const floatingNotes = [
  "먹는 방식만 봐도 성격이 꽤 드러납니다",
  "질문은 가벼운데 결과는 제법 찔릴 수 있어요",
  "이건 테스트라기보다 공유 콘텐츠에 가깝습니다",
];

export function EatTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<EatAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedResultKeys, setSharedResultKeys] = useState<{
    mainTrait: EatTrait;
    subTrait: EatTrait;
  } | null>(null);

  const result = useMemo(
    () =>
      sharedResultKeys
        ? buildEatSharedResult(sharedResultKeys)
        : calculateEatResult(answers),
    [answers, sharedResultKeys],
  );

  const currentQuestion = eatQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / eatQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedResultKeys(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/eat-type");
      window.requestAnimationFrame(() => {
        document.getElementById("eat-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionId: string) {
    const nextAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(nextAnswers);

    if (currentIndex === eatQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/eat-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/eat-type`);
    shareUrl.searchParams.set("mainTrait", result.mainTrait);
    shareUrl.searchParams.set("subTrait", result.subTrait);

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
    const mainTrait = params.get("mainTrait") as EatTrait | null;
    const subTrait = params.get("subTrait") as EatTrait | null;

    if (mainTrait && subTrait && eatCharacters[mainTrait] && eatCharacters[subTrait]) {
      setSharedResultKeys({ mainTrait, subTrait });
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("eat-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card eat-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">먹는 방식만 봐도 성격이 은근 드러납니다</span>
          <h1>
            먹는 방식
            <br />
            성격 테스트
          </h1>
          <p>
            라면 먹는 순서, 메뉴 고르는 방식,
            <br />
            같이 먹을 때의 태도만으로
            <br />
            당신의 먹는 성격을 캐릭터처럼 보여드립니다.
          </p>
          <div className="hero-inline-copy">
            <span>총 10문항</span>
            <span>동물 캐릭터 결과</span>
            <span>밈처럼 남는 한 줄 결과</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview eat-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🦴 충동형 하이에나</strong>
            <p>보이면 바로 먹는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🐻 안정형 곰</strong>
            <p>튀지 않지만 만족도 높은 선택을 하는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"먹는 걸로까지 성격 들킬 줄은 몰랐는데 너무 나임."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트가 재밌는 이유</span>
              <h2>먹는 습관이 생각보다 성격을 솔직하게 드러냅니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>질문이 너무 현실적입니다</strong>
                <p>라면, 배달 앱, 뷔페, 치킨처럼 누구나 겪는 장면으로 바로 답하게 됩니다.</p>
              </article>
              <article className="feature-card">
                <strong>결과가 밈처럼 남습니다</strong>
                <p>먹는 방식 하나를 동물 캐릭터로 바꿔서 공유하고 놀리기 좋게 보여줍니다.</p>
              </article>
              <article className="feature-card">
                <strong>기능보다 공유성이 강합니다</strong>
                <p>테스트라기보다 친구끼리 보내고 비교하는 콘텐츠에 가깝게 설계했습니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>이런 반응이 자주 나옵니다</span>
              <h2>가볍게 눌렀는데 결과 카드가 은근 저장하고 싶어집니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“라면 먹는 방식으로 내 성격까지 들켜버림.”</p>
              </article>
              <article className="reaction-card">
                <p>“친구 결과 보고 바로 누구 닮았는지 말 나옴.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“이건 테스트라기보다 공유용 밈 카드다.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>짧게 끝나고 오래 남아요</span>
              <h2>먹는 방식만으로도 캐릭터가 꽤 선명하게 나옵니다</h2>
              <p>
                질문은 가볍게 끝나도
                <br />
                결과는 친구한테 보내고 싶을 만큼 밈처럼 남습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 테스트하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && (
        <section id="eat-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {eatQuestions.length}
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
        <section id="eat-result-section" className="panel result-panel">
          <div className="result-hero eat-result-hero">
            <p>당신의 메인 먹는 성격</p>
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
                  className={`judgment-image eat-image-${result.mainCharacter.slug}`}
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "grid";
                  }}
                />
                <div className="judgment-image-fallback">{result.mainCharacter.emblem}</div>
              </div>
              <div className="judgment-card-copy">
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
              </div>
            </article>

            <article className={`judgment-sub-card ${result.subCharacter.accent}`}>
              <div className="judgment-sub-head">
                <div className="judgment-sub-visual">
                  <img
                    src={result.subCharacter.imagePath}
                    alt={result.subCharacter.name}
                    className={`judgment-sub-image eat-image-${result.subCharacter.slug}`}
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
                  <span>보조 성향</span>
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
                <h3>먹는 습관이 왜 이런 캐릭터로 나왔는지 보기</h3>
                <p>메인 결과가 왜 잡혔는지, 일상에서 어떻게 드러나는지, 보조 성향까지 이어서 확인할 수 있습니다.</p>
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
                  <h3>당신의 먹는 방식 요약</h3>
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
                    <span>보조 성향</span>
                    <strong>
                      {result.subCharacter.emblem} {result.subCharacter.name}
                    </strong>
                    <p>{result.subCharacter.cardSummary}</p>
                  </div>
                </article>
              </div>
            </>
          )}

          <RelatedTests current="/eat-type" />
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
