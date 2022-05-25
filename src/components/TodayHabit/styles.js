import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 13px 13px 13px 15px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Heading = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;

  margin-bottom: 7px;
`;

export const Span = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: #666666;
`;

export const CheckButton = styled.button`
  height: 69px;
  width: 69px;

  background: #ebebeb;
  background-color: ${({ done }) => (done ? '#8FC549' : '#ebebeb')};
  border: 1px solid #e7e7e7;
  border-radius: 5px;

  cursor: pointer;
`;
