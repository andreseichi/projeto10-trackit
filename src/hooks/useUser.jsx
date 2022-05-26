import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: '', image: '' });
  const [habitsPercentage, setHabitsPercentage] = useState(0);
  const [todayHabits, setTodayHabits] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('rodei');
    const user = localStorage.getItem('user');
    if (user !== null) {
      const userObject = JSON.parse(user);
      setUser(userObject);
      navigate('/hoje');

      return;
    }

    navigate('/');
  }, []);

  function loginUser(inputs) {
    const userObject = {
      name: inputs.name,
      image: inputs.image,
    };
    setUser(userObject);
    const userJSON = JSON.stringify(userObject);
    localStorage.setItem('user', userJSON);
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
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    if (isDone) {
      api
        .post(`habits/${id}/uncheck`, null, config)
        .then((response) => {
          if (response.status === 204) {
            getTodayHabits();
            return;
          }
        })
        .catch((error) => console.log(error));
    } else {
      api
        .post(`habits/${id}/check`, null, config)
        .then((response) => {
          if (response.status === 204) {
            getTodayHabits();
            return;
          }
        })
        .catch((error) => console.log(error));
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
