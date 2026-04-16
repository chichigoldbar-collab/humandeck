"use client";

import { useEffect, useMemo, useState } from "react";
import {
  buildResult,
  calculateResult,
  type AnswerMap,
  type ResultKeys,
} from "@/lib/scoring";
import { questions } from "@/lib/questions";
import { AdSlot } from "@/components/AdSlot";

type Stage = "landing" | "questions" | "preResultAd" | "result";

const axisLabelMap = {
  attachment: "관계 패턴",
  dopamine: "자극 성향",
  bias: "생각 습관",
  selfWorth: "자존감 구조",
  decision: "의사결정 방식",
} as const;

export function TestExperience() {
  const [stage, setStage] = useState<Stage>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [sharedResultKeys, setSharedResultKeys] = useState<ResultKeys | null>(null);

  const result = useMemo(
    () => (sharedResultKeys ? buildResult(sharedResultKeys) : calculateResult(answers)),
    [answers, sharedResultKeys],
  );
  const currentQuestion = questions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);
  const resultProfiles = [
    result.attachmentProfile,
    result.dopamineProfile,
    result.biasProfile,
    result.selfWorthProfile,
    result.decisionProfile,
  ];

  function selectAnswer(optionId: string) {
    const nextAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(nextAnswers);

    if (currentIndex === questions.length - 1) {
      setStage("preResultAd");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }

  function handleShare() {
    if (typeof window !== "undefined") {
      const shareUrl = new URL(window.location.href);
      shareUrl.searchParams.set("attachment", result.attachment);
      shareUrl.searchParams.set("dopamine", result.dopamine);
      shareUrl.searchParams.set("bias", result.bias);
      shareUrl.searchParams.set("selfWorth", result.selfWorth);
      shareUrl.searchParams.set("decision", result.decision);

      if (navigator.clipboard?.writeText) {
        navigator.clipboard
          .writeText(shareUrl.toString())
          .then(() => {
            window.alert("결과 페이지 링크를 복사했습니다.");
          })
          .catch(() => {
            window.prompt("이 링크를 복사해 공유해보세요.", shareUrl.toString());
          });
        return;
      }

      window.prompt("이 링크를 복사해 공유해보세요.", shareUrl.toString());
    }
  }

  function restart() {
    setAnswers({});
    setCurrentIndex(0);
    setStage("landing");
    setDetailUnlocked(false);
    setSharedResultKeys(null);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  }

  function moveToQuestions() {
    setStage("questions");
    setSharedResultKeys(null);

    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", window.location.pathname);
      window.requestAnimationFrame(() => {
        document.getElementById("question-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const attachment = params.get("attachment");
    const dopamine = params.get("dopamine");
    const bias = params.get("bias");
    const selfWorth = params.get("selfWorth");
    const decision = params.get("decision");

    if (attachment && dopamine && bias && selfWorth && decision) {
      setSharedResultKeys({
        attachment: attachment as ResultKeys["attachment"],
        dopamine: dopamine as ResultKeys["dopamine"],
        bias: bias as ResultKeys["bias"],
        selfWorth: selfWorth as ResultKeys["selfWorth"],
        decision: decision as ResultKeys["decision"],
      });
      setStage("result");
    }
  }, []);

  return (
    <main className="shell">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">요즘 나, 왜 이러는지 궁금할 때</span>
          <h1>
            나도 몰랐던
            <br />
            내 인간 캐릭터
          </h1>
          <p>
            15문항 안에 끝나는 테스트로
            <br />
            연애할 때 왜 이러는지,
            <br />
            왜 자꾸 같은 패턴에 끌리는지 한 번에 보여줍니다.
          </p>
          <div className="hero-inline-copy">
            <span>친구와 함께 보면 더 재밌어요</span>
            <span>결과를 오래 남기고 싶은 테스트</span>
          </div>
          <div className="hero-actions">
            <button className="primary-button" onClick={moveToQuestions}>
              내 캐릭터 확인하기
            </button>
          </div>
        </div>
        <div className="hero-preview">
          <div className="preview-orb preview-orb-one" />
          <div className="preview-orb preview-orb-two" />
          <article className="preview-card primary">
            <span className="preview-label">샘플 결과</span>
            <strong>🐺 거리두는 늑대</strong>
            <p>가까워질수록 조용히 도망치는 타입</p>
          </article>
          <article className="preview-card secondary">
            <strong>🔥 자극 사냥꾼</strong>
            <p>심심하면 결국 더 센 걸 찾는 타입</p>
          </article>
          <article className="preview-quote">
            <p>"웃으면서 했는데 왜 이렇게 찔리지?"</p>
          </article>
        </div>
      </section>

      {stage === "landing" && (
        <>
          <section className="panel landing-panel">
            <div className="panel-header">
              <span>이 테스트가 재밌는 이유</span>
              <h2>그냥 성격 테스트가 아니라, 내 패턴을 캐릭터로 선명하게 보여줍니다</h2>
            </div>
            <div className="landing-feature-grid">
              <article className="feature-card">
                <strong>연애할 때 왜 늘 똑같이 꼬이는지</strong>
                <p>가까워질수록 도망치는지, 더 불안해지는지 바로 보입니다.</p>
              </article>
              <article className="feature-card">
                <strong>왜 또 자극적인 것만 찾게 되는지</strong>
                <p>폰, 콘텐츠, 목표 집착까지 내 도파민 습관을 캐릭터로 정리합니다.</p>
              </article>
              <article className="feature-card">
                <strong>남들은 알았는데 나만 몰랐던 포인트</strong>
                <p>생각 습관, 자존감, 결정 방식까지 한 번에 묶어서 보여줍니다.</p>
              </article>
            </div>
          </section>

          <section className="panel social-proof-panel">
            <div className="panel-header">
              <span>이런 반응이 자주 나옵니다</span>
              <h2>가볍게 시작했다가, 생각보다 오래 남는 테스트</h2>
            </div>
            <div className="social-proof-grid">
              <article className="reaction-card">
                <p>“이거 왜 내 전애인도 나도 같이 맞는 것 같지”</p>
              </article>
              <article className="reaction-card">
                <p>“친구한테 보냈는데 결과 보고 바로 전화 옴”</p>
              </article>
              <article className="reaction-card accent">
                <p>“재밌는데 묘하게 기분 나쁨. 너무 맞아서.”</p>
              </article>
            </div>
          </section>

          <section className="panel final-cta-panel">
            <div className="final-cta-copy">
              <span>시작은 가볍게</span>
              <h2>결과는 생각보다 오래 남습니다</h2>
              <p>
                15문항이면 끝납니다.
                <br />
                그런데 결과는 친구한테 보내고 싶을 만큼 선명하게 남습니다.
              </p>
            </div>
            <button className="primary-button large" onClick={moveToQuestions}>
              지금 시작하기
            </button>
          </section>
        </>
      )}

      {stage === "questions" && currentQuestion && (
        <section id="question-section" className="panel question-panel">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {questions.length}
            </span>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="panel-header">
            <span>{axisLabelMap[currentQuestion.axis]}</span>
            <h2>{currentQuestion.prompt}</h2>
          </div>
          <div className="answer-list">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className="answer-button"
                onClick={() => selectAnswer(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {stage === "preResultAd" && (
        <section className="panel ad-panel">
          <div className="panel-header">
            <span>거의 다 왔어요</span>
            <h2>당신 결과를 정리하는 중입니다</h2>
          </div>
          <div className="ad-slot">
            <AdSlot slot="5302993836" label="sponsored" />
          </div>
          <button className="primary-button" onClick={() => setStage("result")}>
            결과 공개하기
          </button>
        </section>
      )}

      {stage === "result" && (
        <section className="panel result-panel">
          <div className="result-hero">
            <strong>당신의 인간 캐릭터 세트가 완성됐습니다.</strong>
          </div>

          <div className="result-grid">
            {resultProfiles.map((profile) => (
              <article key={profile.id} className={`result-card ${profile.accent}`}>
                <div className="character-visual">
                  <img
                    src={profile.imagePath}
                    alt={profile.name}
                    className="character-image"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "grid";
                    }}
                  />
                  <span className="character-emoji-fallback">{profile.emoji}</span>
                  <div className="visual-glow" />
                </div>
                <div className="result-card-body">
                  <h3>{profile.name}</h3>
                <strong>{profile.aura}</strong>
                  <p>{profile.summary}</p>
                  <div className="keyword-row">
                    {profile.keywords.map((keyword) => (
                      <span key={keyword} className="keyword-chip">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="share-box">
            <p>친구가 보기 전에 먼저 퍼질 결과 문구</p>
            <blockquote>{result.shareCopy}</blockquote>
            <div className="action-row">
              <button className="primary-button" onClick={handleShare}>
                공유하기
              </button>
              <button className="ghost-button" onClick={restart}>
                다시 테스트
              </button>
            </div>
          </div>

          {!detailUnlocked ? (
            <div className="reward-panel">
              <div>
                <span>더 깊게 보기</span>
                <h3>이 캐릭터가 왜 생겼는지 열어보기</h3>
                <p>겉으로 보이는 패턴 말고, 어디서 흔들리고 왜 반복되는지까지 보여드립니다.</p>
              </div>
              <div className="reward-actions">
                <AdSlot slot="7737585483" label="sponsored" />
                <button className="primary-button" onClick={() => setDetailUnlocked(true)}>
                  상세 해설 열기
                </button>
              </div>
            </div>
          ) : (
            <div className="detail-grid">
              {resultProfiles.map((profile) => (
                <article key={profile.id} className={`detail-card ${profile.accent}`}>
                  <h3>{profile.emoji} {profile.name} 상세</h3>
                  <div className="insight-stack">
                    <section>
                      <h4>겉으로 보이는 패턴</h4>
                      <p>{profile.pattern}</p>
                    </section>
                    <section>
                      <h4>약한 순간</h4>
                      <p>{profile.trigger}</p>
                    </section>
                    <section>
                      <h4>무너지는 포인트</h4>
                      <p>{profile.weakness}</p>
                    </section>
                    <section>
                      <h4>덜 무너지는 방법</h4>
                      <p>{profile.advice}</p>
                    </section>
                  </div>
                  <ul>
                    {profile.detail.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
