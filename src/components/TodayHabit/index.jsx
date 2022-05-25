import { useState } from 'react';

import { useUser } from '../../hooks/useUser';

import Image from '../../assets/check.svg';

import { Container, Content, Heading, Span, CheckButton } from './styles';

export function TodayHabit({ id, name, done, currentSequence, record }) {
  const [isDone, setIsDone] = useState(done);

  const { checkHabit } = useUser();

  function handleCheckHabit() {
    setIsDone(!isDone);
    checkHabit(id, isDone);
  }

  return (
    <Container>
      <Content>
        <Heading>{name}</Heading>
        <Span>
          Sequência atual:{' '}
          {currentSequence > 1
            ? `${currentSequence} dias`
            : `${currentSequence} dia`}
        </Span>
        <Span>
          Seu recorde: {record > 1 ? `${record} dias` : `${record} dia`}
        </Span>
      </Content>

      <CheckButton done={isDone} type="button" onClick={handleCheckHabit}>
        <img src={Image} alt="" />
      </CheckButton>
    </Container>
  );
}
