import { fetchAuthSession } from "aws-amplify/auth"

export async function getCurrentUserToken() {
  try {
    // Force refresh to ensure latest tokens (useful immediately after sign-in/confirmation)
    const session = await fetchAuthSession({ forceRefresh: true })

    const accessToken = session.tokens?.accessToken?.toString()
    const idToken = session.tokens?.idToken?.toString()
    const attributes = session.tokens?.accessToken?.payload

    return {
      isLoggedIn: !!accessToken,
      accessToken,
      idToken,
      role: attributes?.["custom:role"] || null,
      groups: attributes?.["cognito:groups"] || [],
    }
  } catch (error) {
    console.error("User is not signed in", error)
    return {
      isLoggedIn: false,
      accessToken: null,
      idToken: null,
      role: null,
      groups: [],
    }
  }
}