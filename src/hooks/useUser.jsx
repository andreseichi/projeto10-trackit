import { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: 'tashiro' });
  const [habitsPercentage, setHabitsPercentage] = useState(0);
  const [todayHabits, setTodayHabits] = useState([]);

  function loginUser(inputs) {
    setUser({ name: inputs.name, image: inputs.image });
  }

  function getTodayHabits(habits) {
    setTodayHabits(habits);

    getHabitsPercentage([
      ...habits,
      { done: true },
      { done: true },
      { done: true },
      { done: true },
    ]);
  }

  function getHabitsPercentage(habits) {
    const todayHabitsTotal = habits.length;
    const todayHabitsDone = habits.reduce(
      (res, item) => (item.done ? res + 1 : res),
      0
    );

    const percentageHabitsDone = parseFloat(
      ((todayHabitsDone * 100) / todayHabitsTotal).toFixed(2)
    );
    setHabitsPercentage(percentageHabitsDone);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        habitsPercentage,
        todayHabits,
        getTodayHabits,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
