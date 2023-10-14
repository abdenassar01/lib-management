// UserContext.tsx
import { createContext, useContext, ReactNode, useState } from "react";
import { ROLE } from "../constant/role";

type User = {
  name: string;
  role: string;
};

type UserContextType = {
  user: User | null;
  login: (name: string, role: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, role: string) => {
    setUser({ name, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
