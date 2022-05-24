import { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: 'tashiro' });
  const [habitoPorcentagem, setHabitoPorcentagem] = useState(66);

  function loginUser(inputs) {
    setUser({ name: inputs.name, image: inputs.image });
  }

  return (
    <UserContext.Provider value={{ user, loginUser, habitoPorcentagem }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
