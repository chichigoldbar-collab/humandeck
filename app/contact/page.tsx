import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 | 휴먼덱",
  description:
    "휴먼덱 서비스 문의, 광고 문의, 권리 침해 신고, 오류 제보를 위한 공식 연락처 안내 페이지입니다.",
};

export default function ContactPage() {
  return (
    <main className="policy-shell">
      <section className="policy-card">
        <span className="eyebrow">Contact</span>
        <h1>문의하기</h1>
        <p>
          휴먼덱 이용 중 오류를 발견했거나, 광고·제휴·콘텐츠 관련 문의가 있는 경우 아래
          연락처로 남겨주시면 확인 후 답변드립니다. 테스트 결과와 서비스 설명은 참고용
          콘텐츠이며, 개별 심리 상담이나 전문 판단을 대신하지 않습니다.
        </p>

        <div className="policy-section">
          <h2>운영 정보</h2>
          <p>상호: 테디맨션</p>
          <p>대표자: 노현정</p>
          <p>사업자등록번호: 563-49-01362</p>
          <p>통신판매업신고번호: 2026-서울종로-0563</p>
          <p>주소: 서울특별시 종로구 성균관로 15-8 2층</p>
        </div>

        <div className="policy-section">
          <h2>연락처</h2>
          <p>이메일: teddysmansion01@gmail.com</p>
          <p>전화: 070-4136-3336</p>
        </div>

        <div className="policy-section">
          <h2>문의 가능한 내용</h2>
          <p>1. 서비스 이용 중 오류, 깨진 링크, 이미지·텍스트 표시 문제</p>
          <p>2. 광고, 제휴, 콘텐츠 사용 문의</p>
          <p>3. 개인정보, 정책, 삭제 요청 관련 문의</p>
          <p>4. 저작권, 초상권 등 권리 침해 신고</p>
        </div>

        <div className="policy-section">
          <h2>안내</h2>
          <p>
            운영자는 접수된 문의를 검토한 뒤 가능한 범위에서 순차적으로 답변합니다. 서비스
            운영 상황에 따라 회신까지 일정 시간이 걸릴 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
