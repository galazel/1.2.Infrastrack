import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react"
import { getCurrentUserToken } from "../auth/getCurrentUser"
import Loading from "../components/Loading"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    ready: false,
    isLoggedIn: false,
    groups: [],
    role: null,
  })

  const checkAuth = useCallback(async () => {
    const result = await getCurrentUserToken()
    setAuth({
      ready: true,
      isLoggedIn: result.isLoggedIn,
      groups: result.groups || [],
      role: result.role || null,
    })
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (!auth.ready) return <Loading />

  return (
    <AuthContext.Provider value={{ ...auth, refresh: checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)