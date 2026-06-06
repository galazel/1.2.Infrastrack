import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { AuthProvider } from "./hooks/AuthProvider.jsx"
import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_5Z9ZhAbZO",
      userPoolClientId: "25oo7unm38ohaqdg1j32cr9eds",
      loginWith: {
        email: true,
      },
    },
  },
})
const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <AuthProvider>
            <App />
          </AuthProvider>
        </TooltipProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
