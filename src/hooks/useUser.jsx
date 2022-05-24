import { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: 'tashiro' });
  const [habitoPorcentagem, setHabitoPorcentagem] = useState(66);

  return (
    <UserContext.Provider value={{ user, setUser, habitoPorcentagem }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
