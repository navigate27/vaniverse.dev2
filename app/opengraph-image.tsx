import { ImageResponse } from "next/og";
import { site } from "./data/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadSpaceGroteskBold() {
  const url =
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap";
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+)\) format\('(?:opentype|truetype)'\)/);

  if (!match?.[1]) {
    throw new Error("Failed to load font: Space Grotesk");
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}

export default async function OpenGraphImage() {
  const spaceGroteskBold = await loadSpaceGroteskBold();

  const headline = {
    fontFamily: "Space Grotesk",
    fontSize: 76,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    lineHeight: 0.92,
    letterSpacing: "-0.03em",
    margin: 0,
  };

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
            fontFamily: "Space Grotesk",
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

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ ...headline, color: "#f5f5f7" }}>Building</p>
          <p style={{ ...headline, color: "#fd3345" }}>worlds</p>
          <p style={{ ...headline, color: "#f5f5f7" }}>one line</p>
          <p style={{ ...headline, color: "#f5f5f7", display: "flex" }}>
            at a{" "}
            <span
              style={{
                textTransform: "lowercase",
                color: "#ac9fd6",
              }}
            >
              time
            </span>
            .
          </p>
        </div>

        <p
          style={{
            fontFamily: "Space Grotesk",
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
            fontFamily: "Space Grotesk",
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
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGroteskBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
