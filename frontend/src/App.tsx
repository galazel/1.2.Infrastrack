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

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountLayout />}>
        <Route index element={<Login />} />
        <Route path="/setup" element={<SetupAccount />} />
      </Route>
      <Route path="register" element={<RegisterLayout />}>
        <Route path="company" element={<RegisterCompany />} />
        <Route path="client" element={<RegisterClient />} />
      </Route>
      <Route path="gg" element={<ClientDashboardLayout />}>
        <Route index element={<NewChat />} />
        <Route path=":chatId" element={<Chat />} />
      </Route>
      <Route path="dd" element={<CompanyDashboardLayout />}></Route>
    </Routes>
  )
}

export default App
