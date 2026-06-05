import { resetPassword } from "aws-amplify/auth"
import { confirmResetPassword } from "aws-amplify/auth"
import { toast } from "sonner"


export const handleResetPasswordRequest = async (email,navigate) => {

  try {
    const result = await resetPassword({ username: email })
    console.log(result)
    navigate('verification', {state: {email}})
  } catch (error) {
    toast.error(error?.message || "Failed to send password reset code.")
  }
}

export const handleResetPasswordConfirm = async (email, code, newPassword, navigate) => {

  try {
    await confirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword: newPassword,
    })
    toast.success("Password has been reset successfully.")
    navigate('/setup')
  } catch (error) {
    toast.error(error?.message || "Failed to reset password.")
  }
}
