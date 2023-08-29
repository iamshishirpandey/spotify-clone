"use client";

import { MyContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <MyContextProvider>{children}</MyContextProvider>;
};
export default UserProvider;
