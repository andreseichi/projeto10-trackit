import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import locale from 'dayjs/locale/pt-br';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { TodayHabit } from '../../components/TodayHabit';

import {
  Container,
  Content,
  TodayHeader,
  Title,
  Text,
  HabitsContainer,
} from './styles';

export function Hoje() {
  const [todayHabits, setTodayHabits] = useState([]);

  const data = dayjs().locale(locale).format('dddd, DD/MM');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    api.get('habits/today', config).then((response) => {
      if (response.status === 200) {
        console.log(response);

        const { data } = response;
        setTodayHabits(data);
      }
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <TodayHeader>
          <Title>{data}</Title>
          <Text>Nenhum hábito concluído ainda</Text>
        </TodayHeader>

        <HabitsContainer>
          {todayHabits?.map((habit) => (
            <TodayHabit
              key={habit.id}
              name={habit.name}
              done={habit.done}
              currentSequence={habit.currentSequence}
              record={habit.highestSequence}
            />
          ))}
        </HabitsContainer>
      </Content>
      <Footer />
    </Container>
  );
}
