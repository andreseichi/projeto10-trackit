import { useEffect } from 'react';
import dayjs from 'dayjs';
import locale from 'dayjs/locale/pt-br';

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
  const { todayHabits, habitsPercentage } = useUser();

  const data = dayjs().locale(locale).format('dddd, DD/MM');

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
              id={habit.id}
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
