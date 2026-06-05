import { signUp } from "aws-amplify/auth"
import { toast } from "sonner"

export const handleSignUp = async (email, password, navigate) => {
  try {
    await signUp({
      username: email,
      password: password,
      options: {
        userAttributes: { email },
      },
    })
    navigate("/code/verification", {
      state: { type: "signUpVerification", email: email },
    })
  } catch (error) {
    toast.error(error.message || "Something went wrong.")
  }
}
