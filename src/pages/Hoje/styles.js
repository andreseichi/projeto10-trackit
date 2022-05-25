import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: #f2f2f2;
`;

export const Content = styled.section`
  width: auto;
  padding: 20px 18px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TodayHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color: #126ba5;

  text-transform: capitalize;
`;

export const Text = styled.span`
  font-size: 18px;
  line-height: 22px;

  color: #bababa;
`;

export const TextHabitsDone = styled(Text)`
  color: #8fc549;
`;

export const HabitsContainer = styled.div`
  width: 100%;

  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
