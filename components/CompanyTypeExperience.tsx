"use client";

import { useEffect, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTests } from "@/components/RelatedTests";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildCompanySharedResult,
  calculateCompanyResult,
  companyLabels,
  companyQuestions,
  type CompanyAnswerMap,
  type CompanyType,
} from "@/lib/company-type";

type Stage = "landing" | "questions" | "result";

const companyKeys: CompanyType[] = [
  "adaptation",
  "endurance",
  "leadership",
  "avoidance",
  "analysis",
  "social",
  "stress",
  "loyalty",
];

const floatingNotes = [
  "회사에서는 일을 잘하는 방식보다 살아남는 방식이 먼저 드러날 수 있습니다",
  "지시, 회의, 눈치, 평가 앞에서 어떤 반응이 먼저 튀는지 보게 됩니다",
  "회사 안에서는 실력만큼이나 패턴이 더 빨리 들킬 때가 많습니다",
];

export function CompanyTypeExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<CompanyAnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedScores, setSharedScores] = useState<Record<CompanyType, number> | null>(null);

  const result = useMemo(
    () => (sharedScores ? buildCompanySharedResult(sharedScores) : calculateCompanyResult(answers)),
    [answers, sharedScores],
  );

  const currentQuestion = companyQuestions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / companyQuestions.length) * 100);

  function moveToQuestions() {
    setStage("questions");
    setSharedScores(null);
    setDetailUnlocked(false);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/company-type");
      window.requestAnimationFrame(() => {
        document.getElementById("company-question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [String(currentQuestion.id)]: String(optionIndex) };
    setAnswers(nextAnswers);

    if (currentIndex === companyQuestions.length - 1) {
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
      window.history.replaceState({}, "", "/company-type");
    }
  }

  function handleShare() {
    if (typeof window === "undefined") return;

    const shareUrl = new URL(`${window.location.origin}/company-type`);
    companyKeys.forEach((key) => {
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
    const hasSharedScores = companyKeys.every((key) => params.has(key));
    if (!hasSharedScores) return;

    const scores = companyKeys.reduce(
      (acc, key) => {
        acc[key] = Number(params.get(key));
        return acc;
      },
      {} as Record<CompanyType, number>,
    );

    if (companyKeys.every((key) => Number.isFinite(scores[key]))) {
      setSharedScores(scores);
      setStage("result");
      setDetailUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (stage !== "result" || typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      document.getElementById("company-result-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [stage]);

  return (
    <main className="shell">
      <section className="hero-card company-hero-card">
        <div className="hero-copy">
          <span className="eyebrow">회사에서 드러나는 적응력, 버티는 힘, 주도권, 멘탈 패턴 분석</span>
          <h1>
            회사에서
            <br />
            당신은 어떤 인간일까
          </h1>
          <p>
            일보다 사람 때문에 힘든 당신을 위한 테스트
            <br />
            회사에서 드러나는 당신의 진짜 캐릭터
            <br />
            당신은 일하는 걸까, 버티는 걸까
          </p>
          <div className="hero-inline-copy">
            <span>총 12문항</span>
            <span>메인 + 서브 결과</span>
            <span>회사 생존 패턴 분석</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              테스트 시작하기
            </button>
          </div>
        </div>

        <div className="hero-preview company-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🦊 눈치장인 여우</strong>
            <p>상황 적응이 제일 빠른 회사 생존형</p>
          </article>
          <article className="preview-card secondary">
            <strong>🐺 주도형 늑대</strong>
            <p>답답하면 결국 내가 나서는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"일을 잘하는 것보다, 회사에서 어떻게 버티는지가 더 빨리 들킬 때가 있다."</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트는 이런 걸 봅니다</span>
              <h2>일의 실력보다 회사 안에서 어떤 방식으로 반응하고 살아남는지가 먼저 드러납니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>상황 적응형인지</strong>
                <p>지시, 회의, 분위기 앞에서 누가 제일 빨리 공기를 읽는지 살펴봅니다.</p>
              </article>
              <article className="feature-card">
                <strong>버티기형인지</strong>
                <p>맡은 일을 끝까지 끌고 가는지, 참고 누적하는지 확인합니다.</p>
              </article>
              <article className="feature-card">
                <strong>주도권이 먼저인지</strong>
                <p>답답하면 직접 정리하는 타입인지, 계산하고 움직이는 타입인지 같이 봅니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>왜 이 테스트가 찔리냐면</span>
              <h2>회사에서는 실력보다, 스트레스받을 때 어떤 식으로 반응하는지가 더 빨리 보이기 때문입니다</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“나 일 못하는 건 아닌데, 회사만 가면 눈치부터 보게 되는 이유가 설명됨.”</p>
              </article>
              <article className="reaction-card">
                <p>“답답하면 내가 다 하는 버릇이 왜 피곤한지도 같이 보임.”</p>
              </article>
              <article className="reaction-card accent">
                <p>“회사에서 살아남는 캐릭터가 따로 있다는 말이 제일 현실적이었다.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>가볍게 답해도 충분합니다</span>
              <h2>당신은 회사에서 리더인지, 버티는 사람인지, 피하는 사람인지 확인해보세요</h2>
              <p>
                눈치, 충성, 분석, 멘붕,
                <br />
                어떤 방식으로 회사 안에서 살아남는지
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
        <section id="company-question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {companyQuestions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar company-progress-bar" style={{ width: `${progress}%` }} />
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
        <section id="company-result-section" className="panel result-panel">
          <div className="result-hero company-result-hero">
            <p>당신의 회사 생존 캐릭터</p>
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
                  className={`judgment-image company-image-${result.profile.slug}`}
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

            <article className="judgment-sub-card company-dimension-card">
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
                      <span>{companyLabels[type as CompanyType]}</span>
                      <strong>{score}</strong>
                    </div>
                    <div className="dimension-track company-dimension-track">
                      <div
                        className="dimension-bar company-dimension-bar"
                        style={{ width: `${Math.min(100, (score / 10) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="share-box judgment-share-box">
            <p>결과를 다시 보고 싶거나 동료와 비교하고 싶다면 링크를 복사해두세요.</p>
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
                <h3>왜 회사에서 이런 패턴이 나오는지 이어서 보기</h3>
                <p>강점과 리스크, 실제 회사 장면에서 이 반응이 어떻게 드러나는지 더 자세히 볼 수 있습니다.</p>
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
                <h3>당신의 회사 생존 방식</h3>
                <p>{result.profile.detail}</p>
              </article>

              <article className="detail-card">
                <h3>강점</h3>
                <ul>
                  {result.profile.strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>리스크</h3>
                <ul>
                  {result.profile.risks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>실제 회사에서</h3>
                <ul>
                  {result.profile.workplace.map((item) => (
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

          <RelatedTests current="/company-type" />

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
