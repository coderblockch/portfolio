import { ImageResponse } from "next/og";

export const alt = "David Jimenez — Junior Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.35), transparent 55%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 30, color: "#a78bfa" }}>Hola, soy</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 12 }}>
          David Jimenez
        </div>
        <div style={{ fontSize: 44, color: "#c4b5fd", marginTop: 8 }}>
          Junior Full-Stack Developer
        </div>
        <div style={{ fontSize: 28, color: "#a3a3a3", marginTop: 32 }}>
          Python · Flask · FastAPI · JavaScript · React
        </div>
      </div>
    ),
    size,
  );
}
