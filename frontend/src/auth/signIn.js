import { signIn } from "aws-amplify/auth";
import { toast } from "sonner";

export const handleSignIn = async (email, password) => {
  try {
    const { isSignedIn } = await signIn({
      username: email,
      password,
    });

    if (isSignedIn) {
      toast.success("Login successful!");
    }
  } catch (error) {
    switch (error.name) {
      case "NotAuthorizedException":
      toast.error("Incorrect email or password.");
        break;

      case "UserNotFoundException":
      toast.error("Account does not exist.");
        break;

      case "UserNotConfirmedException":
      toast.error("Please verify your email first.");
        break;

      case "PasswordResetRequiredException":
      toast.error("Password reset is required.");
        break;

      case "TooManyRequestsException":
      toast.error("Too many login attempts. Try again later.");
        break;

      case "UserAlreadyAuthenticatedException":
      toast.error("You are already signed in.");
        break;

      default:
      toast.error(error.message || "Something went wrong.");
    }
  }
};