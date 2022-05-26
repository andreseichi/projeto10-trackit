import { useEffect, useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Day } from '../../components/Day';
import { Habito } from '../../components/Habito';

import {
  Container,
  Content,
  HabitsHeader,
  Title,
  AddButton,
  Habits,
  Text,
  NewHabitContainer,
  Input,
  Days,
  Buttons,
  Button,
} from './styles';

export function Habitos() {
  const [habits, setHabits] = useState([]);
  const [openNewHabit, setOpenNewHabit] = useState(false);
  const [inputDays, setInputDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    days: [],
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    api.get('habits', config).then((response) => {
      if (response.status === 200) {
        setHabits(response.data);
      }
    });
  }, []);

  function handleOpenNewHabit() {
    setInputDays([]);
    setInputs({});
    setOpenNewHabit(!openNewHabit);
  }

  function handleDaySelect(id) {
    const newInputDays = [...inputDays];

    const hasDaySelected = newInputDays.includes(id);

    if (hasDaySelected) {
      const newInputDaysFiltered = newInputDays.filter((dayId) => dayId !== id);
      setInputDays(newInputDaysFiltered);
      setInputs({ ...inputs, days: newInputDaysFiltered });
      return;
    }

    setInputDays([...newInputDays, id]);
    setInputs({ ...inputs, days: [...newInputDays, id] });
  }

  function handleForm(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function createHabit(event) {
    event.preventDefault();

    if (inputs.name === '' || inputs.days.length === 0) {
      return;
    }

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    setIsLoading(true);
    api
      .post('habits', inputs, config)
      .then((response) => {
        if (response.status === 201) {
          const { data } = response;
          setHabits([
            ...habits,
            { days: data.days, id: data.id, name: data.name },
          ]);
          setIsLoading(false);
          handleOpenNewHabit();
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
        setIsLoading(false);
      });
  }

  function excludeHabit(id) {
    const confirmExclude = window.confirm(`Você quer mesmo remover ?`);

    if (confirmExclude) {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };

      api
        .delete(`habits/${id}`, config)
        .then((response) => {
          if (response.status === 204) {
            const habitsFiltered = habits.filter(
              (idHabit) => idHabit.id !== id
            );
            setHabits(habitsFiltered);
          }
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <HabitsHeader>
          <Title>Meus Hábitos</Title>
          <AddButton onClick={handleOpenNewHabit}>+</AddButton>
        </HabitsHeader>

        {openNewHabit && (
          <NewHabitContainer>
            <Input
              placeholder="nome do hábito"
              type="text"
              name="name"
              onChange={handleForm}
              disabled={isLoading}
            />

            <Days>
              <Day
                handleDaySelect={handleDaySelect}
                id={7}
                disabled={isLoading}
              >
                D
              </Day>
              <Day
                handleDaySelect={handleDaySelect}
                id={1}
                disabled={isLoading}
              >
                S
              </Day>
              <Day
                handleDaySelect={handleDaySelect}
                id={2}
                disabled={isLoading}
              >
                T
              </Day>
              <Day
                handleDaySelect={handleDaySelect}
                id={3}
                disabled={isLoading}
              >
                Q
              </Day>
              <Day
                handleDaySelect={handleDaySelect}
                id={4}
                disabled={isLoading}
              >
                Q
              </Day>
              <Day
                handleDaySelect={handleDaySelect}
                id={5}
                disabled={isLoading}
              >
                S
              </Day>
              <Day
                handleDaySelect={handleDaySelect}
                id={6}
                disabled={isLoading}
              >
                S
              </Day>
            </Days>

            <Buttons>
              <Button
                secondary
                onClick={handleOpenNewHabit}
                type="button"
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button type="submit" onClick={createHabit} disabled={isLoading}>
                {isLoading ? (
                  <ThreeDots height="auto" color="#fff" />
                ) : (
                  'Salvar'
                )}
              </Button>
            </Buttons>
          </NewHabitContainer>
        )}

        <Habits>
          {habits.length ? (
            habits.map((habit) => (
              <Habito
                key={habit.id}
                name={habit.name}
                id={habit.id}
                daysId={habit.days}
                excludeHabit={excludeHabit}
              />
            ))
          ) : (
            <Text>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </Text>
          )}
        </Habits>
      </Content>

      <Footer />
    </Container>
  );
}
