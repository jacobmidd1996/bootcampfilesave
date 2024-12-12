import { createContext } from 'react';

interface UserContextInfo {
  userName: string,
  userCredentials: 'Guest' | 'User' | 'Admin';
}

const UserContext = createContext<UserContextInfo>({ userName: 'this value is never used', userCredentials: 'Guest' });

export default UserContext;
