import { signOut } from 'aws-amplify/auth';

export const handleSignOut = async () => {
  await signOut();
  window.location.href = '/login';
}