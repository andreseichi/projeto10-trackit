import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;

  padding: 15px;

  position: relative;
`;

export const Heading = styled.h3`
  font-size: 20px;
  line-height: 25px;
  color: #666666;
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 8px;
  gap: 4px;
`;

export const DayDisplay = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ daysId, id }) => (daysId.includes(id) ? '#CFCFCF' : '#fff')};
  color: ${({ daysId, id }) => (daysId.includes(id) ? '#fff' : '#dbdbdb')};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-size: 20px;
  line-height: 25px;

  cursor: pointer;
`;

export const ExcludeIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;

  width: 13px;
  height: 15px;

  cursor: pointer;
`;
