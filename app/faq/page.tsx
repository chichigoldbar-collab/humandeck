import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자주 묻는 질문 | 휴먼덱",
  description:
    "휴먼덱 테스트 이용 방법, 결과 해석, 개인정보 처리, 광고 노출에 대해 자주 묻는 질문을 정리했습니다.",
};

const faqs = [
  {
    question: "휴먼덱 테스트는 어떤 서비스인가요?",
    answer:
      "휴먼덱은 다양한 주제의 짧은 질문을 통해 사용자의 반응 패턴을 캐릭터와 해설 형태로 정리해주는 테스트형 콘텐츠 서비스입니다.",
  },
  {
    question: "결과는 실제 성격 진단인가요?",
    answer:
      "아닙니다. 휴먼덱의 결과는 재미와 해석 중심의 콘텐츠이며, 전문적인 진단이나 치료 판단을 대신하지 않습니다.",
  },
  {
    question: "테스트는 무료인가요?",
    answer:
      "현재 휴먼덱의 테스트는 무료로 제공됩니다. 서비스 운영을 위해 일부 페이지에 광고가 포함될 수 있습니다.",
  },
  {
    question: "여러 테스트를 같이 해도 되나요?",
    answer:
      "네. 각 테스트는 다루는 주제가 달라서 함께 보면 서로 다른 방향의 패턴을 비교해보기 좋습니다.",
  },
  {
    question: "내 답변이나 결과가 저장되나요?",
    answer:
      "현재 기본 테스트 흐름은 별도 회원가입 없이 동작하며, 서비스 운영과 품질 개선을 위한 최소한의 로그나 공유 링크 정보만 처리될 수 있습니다. 자세한 내용은 개인정보처리방침을 참고해 주세요.",
  },
  {
    question: "광고는 왜 보이나요?",
    answer:
      "휴먼덱은 무료로 서비스를 제공하고 있기 때문에 광고 수익을 통해 운영 비용을 충당하고 있습니다. 이용 경험을 해치지 않는 범위에서 광고 배치를 조정하고 있습니다.",
  },
  {
    question: "문의는 어디로 하면 되나요?",
    answer:
      "문의는 teddysmansion01@gmail.com 또는 070-4136-3336으로 남겨주시면 확인 후 답변드립니다.",
  },
];

export default function FaqPage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">FAQ</span>
        <h1>자주 묻는 질문</h1>
        <p>
          휴먼덱을 이용하면서 자주 묻는 질문을 모았습니다. 테스트 결과, 이용 방식,
          광고와 개인정보 처리에 대한 기본 내용을 아래에서 확인하실 수 있습니다.
        </p>

        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-card">
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
