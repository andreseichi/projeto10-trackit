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

export const HabitsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color: #126ba5;
`;

export const AddButton = styled.button`
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #52b6ff;
  font-size: 27px;
  line-height: 34px;
  color: #fff;

  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

export const Habits = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
`;

export const Text = styled.span`
  margin-top: 28px;

  font-size: 18px;
  line-height: 22px;

  color: #666666;
`;

export const NewHabitContainer = styled.form`
  width: 100%;
  padding: 18px;
  background-color: #fff;
  border-radius: 5px;

  margin-top: 20px;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding: 9px 11px;

  font-size: 20px;
  line-height: 25px;
  color: #666;

  &::placeholder {
    color: #dbdbdb;
  }

  :disabled {
    background: #f2f2f2;
  }
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 8px;
  gap: 4px;
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 8px;

  margin-top: 30px;
`;

export const Button = styled.button`
  width: 84px;
  height: 35px;
  background: ${({ secondary }) => (secondary ? '#fff' : '#52B6FF;')};
  border-radius: 5px;
  border: none;

  font-size: 16px;
  line-height: 20px;
  color: ${({ secondary }) => (secondary ? '#52B6FF' : '#fff;')};
  opacity: ${({ disabled, secondary }) =>
    disabled && !secondary ? '0.6' : '1'};

  padding: 8px 18px;

  cursor: pointer;
`;
