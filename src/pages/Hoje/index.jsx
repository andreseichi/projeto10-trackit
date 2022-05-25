import { useEffect } from 'react';
import dayjs from 'dayjs';
import locale from 'dayjs/locale/pt-br';

import { api } from '../../services/api';

import { useUser } from '../../hooks/useUser';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { TodayHabit } from '../../components/TodayHabit';

import {
  Container,
  Content,
  TodayHeader,
  Title,
  Text,
  TextHabitsDone,
  HabitsContainer,
} from './styles';

export function Hoje() {
  const { todayHabits, getTodayHabits, habitsPercentage } = useUser();

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
        const { data } = response;
        getTodayHabits(data);
      }
    });
  }, []);

  // TODO
  // no subtitulo deixar nenhum habito concluido ou x% concluido
  // fazer post sempre q marcar ou desmarcar habito feito
  // logica das sequencias e recorde
  // integrar com o footer a porcentagem

  return (
    <Container>
      <Header />
      <Content>
        <TodayHeader>
          <Title>{data}</Title>
          {habitsPercentage > 0 ? (
            <TextHabitsDone>
              {habitsPercentage}% dos hábitos concluídos
            </TextHabitsDone>
          ) : (
            <Text>Nenhum hábito concluído ainda</Text>
          )}
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
