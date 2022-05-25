import { useState } from 'react';

import Image from '../../assets/check.svg';

import { Container, Content, Heading, Span, CheckButton } from './styles';

export function TodayHabit({ name, done, currentSequence, record }) {
  const [isDone, setIsDone] = useState(done);

  function handleCheckHabit() {
    setIsDone(!isDone);
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
