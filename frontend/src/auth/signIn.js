import { signIn, fetchAuthSession } from "aws-amplify/auth"
import { replace } from "react-router-dom"
import { toast } from "sonner"

export const handleSignIn = async (email, password, navigate, refresh) => {
  try {
    const user = await signIn({ username: email, password })

    if (user) {
      await refresh()
      toast.success("Login successful!")
      const session = await fetchAuthSession({ forceRefresh: true })

      
      const accessPayload =
        session?.tokens?.accessToken?.payload ||
        session?.accessToken?.payload ||
        session?.signInUserSession?.accessToken?.payload ||
        null

      const idPayload =
        session?.tokens?.idToken?.payload ||
        session?.idToken?.payload ||
        session?.signInUserSession?.idToken?.payload ||
        null

      const groups =
        (accessPayload && accessPayload["cognito:groups"]) ||
        (idPayload && idPayload["cognito:groups"]) ||
        []

      const roleFromId =
        (idPayload && idPayload["custom:role"]) ||
        (accessPayload && accessPayload["custom:role"]) ||
        null

      console.log("session payload groups:", groups, "role:", roleFromId)

      const roleLower = roleFromId ? String(roleFromId).toLowerCase() : null
      if (roleLower === "company" || groups.includes("Company")) {
        navigate("/home/company",{replace: true})
      } else {
        navigate("/home/client",{replace: true})
      }
    }
  } catch (error) {
    switch (error.name) {
      case "NotAuthorizedException":
        toast.error("Incorrect email or password.")
        break
      case "UserNotFoundException":
        toast.error("Account does not exist.")
        break
      case "UserNotConfirmedException":
        toast.error("Please verify your email first.")
        break
      case "PasswordResetRequiredException":
        toast.error("Password reset is required.")
        break
      case "TooManyRequestsException":
        toast.error("Too many login attempts. Try again later.")
        break
      case "UserAlreadyAuthenticatedException":
        toast.error("You are already signed in.")
        break
      default:
        toast.error(error.message || "Something went wrong.")
    }
  }
}
