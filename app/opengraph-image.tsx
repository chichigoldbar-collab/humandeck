import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px",
          background:
            "radial-gradient(circle at top left, rgba(255,134,150,0.28), transparent 28%), radial-gradient(circle at top right, rgba(108,201,255,0.24), transparent 24%), linear-gradient(180deg, #fcfeff 0%, #eef6ff 100%)",
          color: "#1b2230",
          fontFamily: "Pretendard, Apple SD Gothic Neo, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "14px 20px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(39,56,86,0.08)",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          요즘 나, 왜 이러는지 궁금할 때
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>나도 몰랐던</span>
            <span>내 인간 캐릭터</span>
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.45,
              color: "#617087",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>연애, 자극, 생각 습관, 자존감, 의사결정까지</span>
            <span>한 번에 보는 인간 캐릭터 테스트</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["15문항", "결과 5개", "친구랑 하면 더 재밌음"].map((item) => (
            <div
              key={item}
              style={{
                display: "block",
                padding: "16px 22px",
                borderRadius: 22,
                background: "rgba(255,255,255,0.84)",
                border: "1px solid rgba(39,56,86,0.08)",
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
