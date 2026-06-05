import { fetchAuthSession } from 'aws-amplify/auth';

export const callMyAPI = async () => {
  const session = await fetchAuthSession();
  const token = session.tokens?.idToken?.toString();

  const response = await fetch('https://your-api.com/data', {
    headers: {
      Authorization: `Bearer ${token}` // attach token here
    }
  });
}