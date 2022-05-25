import { useState } from 'react';

import { useUser } from '../../hooks/useUser';

import Image from '../../assets/check.svg';

import {
  Container,
  Content,
  Heading,
  Span,
  SpanSequence,
  SpanRecord,
  CheckButton,
} from './styles';

export function TodayHabit({ id, name, done, currentSequence, record }) {
  const [isDone, setIsDone] = useState(done);
  const [isNewRecord, setIsNewRecord] = useState(
    currentSequence === record && isDone
  );

  const { checkHabit } = useUser();

  function handleCheckHabit() {
    setIsDone(!isDone);
    checkHabit(id, isDone);
    handleSequenceHabit();
  }

  function handleSequenceHabit() {
    if (!isDone && currentSequence === record) {
      setIsNewRecord(true);
      return;
    }
    setIsNewRecord(false);
  }

  return (
    <Container>
      <Content>
        <Heading>{name}</Heading>
        <Span>
          Sequência atual:{' '}
          <SpanSequence isDone={isDone}>
            {currentSequence > 1
              ? `${currentSequence} dias`
              : `${currentSequence} dia`}
          </SpanSequence>
        </Span>
        <Span>
          Seu recorde:{' '}
          <SpanRecord isNewRecord={isNewRecord} isDone={isDone}>
            {record > 1 ? `${record} dias` : `${record} dia`}
          </SpanRecord>
        </Span>
      </Content>

      <CheckButton done={isDone} type="button" onClick={handleCheckHabit}>
        <img src={Image} alt="" />
      </CheckButton>
    </Container>
  );
}
