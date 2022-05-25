import { createContext, useContext, useState } from 'react';
import { api } from '../services/api';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: 'tashiro' });
  const [habitsPercentage, setHabitsPercentage] = useState(0);
  const [todayHabits, setTodayHabits] = useState([]);

  function loginUser(inputs) {
    setUser({ name: inputs.name, image: inputs.image });
  }

  function getTodayHabits() {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    api.get('habits/today', config).then((response) => {
      if (response.status === 200) {
        const { data } = response;
        setTodayHabits(data);
        getHabitsPercentage(data);
      }
    });
  }

  function getHabitsPercentage(habits) {
    const todayHabitsTotal = habits.length;
    const todayHabitsDone = habits.reduce(
      (res, item) => (item.done ? res + 1 : res),
      0
    );

    const percentageHabitsDone = parseFloat(
      ((todayHabitsDone * 100) / todayHabitsTotal).toFixed(0)
    );
    setHabitsPercentage(percentageHabitsDone);
  }

  function checkHabit(id, isDone) {
    console.log('clicou', id, isDone);

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    if (isDone) {
      api.post(`habits/${id}/uncheck`, null, config).then((response) => {
        if (response.status === 204) {
          console.log(response);
          getTodayHabits();
          return;
        }
      });
    } else {
      api.post(`habits/${id}/check`, null, config).then((response) => {
        if (response.status === 204) {
          console.log(response);
          getTodayHabits();
          return;
        }
      });
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        habitsPercentage,
        todayHabits,
        getTodayHabits,
        checkHabit,
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
