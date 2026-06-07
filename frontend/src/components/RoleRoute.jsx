import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/AuthProvider"
import PageNotFound from "./PageNotFound"

function RoleRoute({ allowedGroup }) {
  const { isLoggedIn, groups } = useAuth()

  return isLoggedIn && groups.includes(allowedGroup)
    ? <Outlet />
    : <PageNotFound/>
}

export default RoleRoute