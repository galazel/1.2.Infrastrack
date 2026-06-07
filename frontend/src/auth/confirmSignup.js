import { confirmSignUp } from "aws-amplify/auth"
import { toast } from "sonner"
import { handleSignIn } from "./signIn"

export const handleConfirm = async (email, code, password, navigate, refresh) => {
  try {
    const result = await confirmSignUp({
      username: email,
      confirmationCode: code,
    })

    let isSignUpComplete = true
    if (result && typeof result === "object" && "isSignUpComplete" in result) {
      isSignUpComplete = !!result.isSignUpComplete
    }

    if (isSignUpComplete) {
      await handleSignIn(email, password, navigate, refresh)
    }
  } catch (error) {
    console.error(error)
    toast.error(error.message || "Something went wrong.")
  }
}