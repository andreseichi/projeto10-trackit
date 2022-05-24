import styled from 'styled-components';

export const Container = styled.button`
  width: 30px;
  height: 30px;

  background: ${({ isSelected }) => (isSelected ? '#CFCFCF' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#dbdbdb')};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-size: 20px;
  line-height: 25px;

  cursor: pointer;
`;
