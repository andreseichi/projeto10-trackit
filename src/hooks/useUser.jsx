import { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: 'tashiro' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
