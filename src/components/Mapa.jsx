import React, { useEffect } from "react";
import { Box } from "@mui/material";

const FlourishEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box textAlign="center" mt={5}>
      <div
        className="flourish-embed flourish-map"
        data-src="visualisation/22689192"
        dangerouslySetInnerHTML={{
          __html: `<noscript><img src="https://public.flourish.studio/visualisation/22689192/thumbnail" width="100%" alt="map visualization" /></noscript>`,
        }}
      />
    </Box>
  );
};

export default FlourishEmbed;
