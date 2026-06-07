import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/AuthProvider"

function RedirectByRole() {
  const { isLoggedIn, groups } = useAuth()
  const { pathname } = useLocation()

  if (!isLoggedIn) return <Navigate to="/" replace />

  if (pathname === "/home") {
    if (groups.includes("Company"))
      return <Navigate to="/home/company" replace />
    return <Navigate to="/home/client" replace />
  }

  return <Outlet />
}

export default RedirectByRole
