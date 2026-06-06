import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/AuthProvider"

function RoleRoute({ allowedGroup }) {
  const { isLoggedIn, groups } = useAuth()

  return isLoggedIn && groups.includes(allowedGroup)
    ? <Outlet />
    : <Navigate to="/" replace />
}

export default RoleRoute