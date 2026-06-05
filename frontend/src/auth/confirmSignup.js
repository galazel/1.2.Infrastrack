import { confirmSignUp } from "aws-amplify/auth"
import { toast } from "sonner"

export const handleConfirm = async (email, code, navigate) => {
  try {
    await confirmSignUp({
      username: email,
      confirmationCode: code,
    })
    toast.success("Registered Successfully")
    navigate("/client")
  } catch (error) {
    toast.error(error.message || "Something went wrong.")
  }
}
