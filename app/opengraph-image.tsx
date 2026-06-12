import { ImageResponse } from "next/og";
import { site } from "./data/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          backgroundColor: "#0a0a0c",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle at center, rgba(253, 51, 69, 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle at center, rgba(172, 159, 214, 0.12) 0%, transparent 70%)",
          }}
        />

        <p
          style={{
            fontSize: 28,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#ac9fd6",
            margin: 0,
            marginBottom: 32,
          }}
        >
          {site.name}
        </p>

        <p
          style={{
            fontSize: 72,
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#f5f5f7",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            margin: 0,
            maxWidth: 900,
          }}
        >
          Building{" "}
          <span style={{ color: "#fd3345" }}>worlds</span> one line at a time.
        </p>

        <p
          style={{
            fontSize: 28,
            color: "#8a8499",
            margin: 0,
            marginTop: 40,
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          {site.jobTitle}
        </p>

        <p
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            fontSize: 24,
            color: "#fd3345",
            margin: 0,
            letterSpacing: "0.1em",
          }}
        >
          {site.siteName}
        </p>
      </div>
    ),
    { ...size }
  );
}
