import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import Vercel tools
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { initAntiInspect } from "./utils/antiInspect";

// Only run external tracking and security scripts in Production
if (import.meta.env.PROD) {
  try {
    inject();
    initAntiInspect();
  } catch (error) {
    console.error("Failed to initialize production scripts:", error);
  }
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <>
      <App />
      {/* SpeedInsights only renders in production automatically */}
      <SpeedInsights />
    </>
  );
}