import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
       <BrowserRouter>
      <TooltipProvider>
        {" "}
        <App />
      </TooltipProvider>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
