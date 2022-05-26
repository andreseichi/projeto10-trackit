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

export const Title = styled.h2`
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color: #126ba5;

  text-transform: capitalize;
`;

export const Text = styled.span`
  margin-top: 28px;

  font-size: 18px;
  line-height: 22px;

  color: #666666;
`;
