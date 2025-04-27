import React from "react";
import Netflix from "./assets/netflix.webp";
import Disney from "./assets/disney.webp";
import HBOMax from "./assets/hbo-max.webp";
import PrimeVideo from "./assets/prime-video.webp";

export default function OTT() {
  const [selectedPlatform, setSelectedPlatform] = React.useState<string | null>(
    null
  );

  const platforms = [
    { name: "Netflix", logo: Netflix, color: "#E50914" },
    { name: "Disney+", logo: Disney, color: "#1B1464" },
    { name: "Amazon Prime", logo: PrimeVideo, color: "#00A8E1" },
    { name: "HBO Max", logo: HBOMax, color: "#1B1464" },
  ];

  const handleSelect = (platform: string) => {
    setSelectedPlatform(platform);

    const platformUrls: { [key: string]: string } = {
      Netflix: "https://www.netflix.com",
      Hotstar: "https://www.hotstar.com",
      "Amazon Prime": "https://www.primevideo.com",
      "Disney+": "https://www.disneyplus.com",
      "HBO Max": "https://www.hbomax.com",
    };

    window.open(platformUrls[platform], "_blank");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p style={{ color: "#999", fontWeight: "100" }}>
        Select a Streaming Platform
      </p>
      <div className="platform-grid">
        {platforms.map((platform) => (
          <div className="platform-card" key={platform.name}>
            <img
              src={platform.logo}
              alt={platform.name}
              className="platform-logo"
            />
            <h2 style={{ color: "#fff" }}>{platform.name}</h2>
            <button
              className="ott-btn"
              onClick={() => handleSelect(platform.name)}
            >
              Browse
            </button>
          </div>
        ))}
      </div>

      {/* {selectedPlatform && <h3>You selected: {selectedPlatform}</h3>} */}
    </div>
  );
}
