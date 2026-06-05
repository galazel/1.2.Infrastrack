import { fetchAuthSession } from 'aws-amplify/auth';

export async function getCurrentUserToken() {
  try {
    const session = await fetchAuthSession();

    const accessToken = session.tokens?.accessToken?.toString();
    const idToken = session.tokens?.idToken?.toString();

    const groups =
      session.tokens?.idToken?.payload?.['cognito:groups'] || [];

    return {
      isLoggedIn: !!accessToken,
      accessToken,
      idToken,
      groups,
    };
  } catch (error) {
    console.error('User is not signed in', error);
    return {
      isLoggedIn: false,
      accessToken: null,
      idToken: null,
      groups: [],
    };
  }
}