import { Routes, Route } from "react-router-dom"
import AccountLayout from "./layouts/AccountLayout"
import SetupAccount from "./pages/SetupAccount"
import RegisterCompany from "./pages/RegisterCompany"
import RegisterClient from "./pages/RegisterClient"
import Login from "./pages/Login"
import RegisterLayout from "./layouts/RegisterLayout"
import ClientDashboardLayout from "./layouts/ClientDashboardLayout"
import CompanyDashboardLayout from "./layouts/CompanyDashboardLayout"
import NewChat from "./pages/NewChat"
import Chat from "./pages/Chat"
import ResetPassword from "./pages/VerificationCode"
import ResetPasswordLayout from "./layouts/ResetPasswordLayout"
import ResetEmail from "./pages/ResetEmail"
import VerificationCode from "./pages/VerificationCode"
import ProtectedRoute from "./components/ProtectedRoute"
import RoleRoute from "./components/RoleRoute"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountLayout />}>
        <Route index element={<Login />} />
        <Route path="setup" element={<SetupAccount />} />
      </Route>
      <Route path="register" element={<RegisterLayout />}>
        <Route path="company" element={<RegisterCompany />} />
        <Route path="client" element={<RegisterClient />} />
      </Route>
      <Route path="code" element={<ResetPasswordLayout />}>
        <Route index element={<ResetEmail />} />
        <Route path="verification" element={<VerificationCode />} />
      </Route>
      <Route path="home" element={<ProtectedRoute />}>
        <Route element={<RoleRoute allowedGroup="Client" />}>
          <Route path="client" element={<ClientDashboardLayout />}>
            <Route index element={<NewChat />} />
            <Route path=":chatId" element={<Chat />} />
          </Route>
        </Route>
        <Route element={<RoleRoute allowedGroup="Company" />}>
          <Route path="company" element={<CompanyDashboardLayout />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
