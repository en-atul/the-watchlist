import React from "react";

export default function OTT() {
  const [selectedPlatform, setSelectedPlatform] = React.useState<string | null>(
    null
  );

  const platforms = [
    "Netflix",
    "Hotstar",
    "Amazon Prime",
    "Disney+",
    "HBO Max",
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
      <h2>Select a Streaming Platform</h2>
      <div>
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => handleSelect(platform)}
            className="ott-btn"
          >
            {platform}
          </button>
        ))}
      </div>

      {selectedPlatform && <h2>You selected: {selectedPlatform}</h2>}
    </div>
  );
}
