import Image from '../../assets/trash.svg';

import { Container, Heading, Days, DayDisplay, ExcludeIcon } from './styles';

export function Habito({ name, id, daysId, excludeHabit }) {
  return (
    <Container>
      <ExcludeIcon src={Image} onClick={() => excludeHabit(id)} />
      <Heading>
        {name} {id} {daysId}
      </Heading>
      <Days>
        <DayDisplay daysId={daysId} id={1}>
          D
        </DayDisplay>
        <DayDisplay daysId={daysId} id={2}>
          S
        </DayDisplay>
        <DayDisplay daysId={daysId} id={3}>
          T
        </DayDisplay>
        <DayDisplay daysId={daysId} id={4}>
          Q
        </DayDisplay>
        <DayDisplay daysId={daysId} id={5}>
          Q
        </DayDisplay>
        <DayDisplay daysId={daysId} id={6}>
          S
        </DayDisplay>
        <DayDisplay daysId={daysId} id={7}>
          S
        </DayDisplay>
      </Days>
    </Container>
  );
}
