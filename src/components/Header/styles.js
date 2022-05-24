import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  background-color: #126ba5;
`;

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 49px;

  color: #ffffff;
`;

export const UserPicture = styled.img`
  border: 100%;
  width: 52px;
  height: 52px;

  border-radius: 100%;
`;
