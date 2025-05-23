'use client';
import { User } from '@/actions/user-get';
import React from 'react';
type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
export const UserContext = React.createContext<IUserContext | null>(null);
export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error('useContext deve estar dentro do UserContextProvider');
  }
  return context;
};
export const UserContextProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) => {
  const [userState, setUser] = React.useState<User | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
