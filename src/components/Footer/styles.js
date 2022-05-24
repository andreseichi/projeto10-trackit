import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 70px;
  padding: 0 2rem;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  line-height: 22px;

  color: #52b6ff;

  position: relative;
`;

export const StyledProgress = styled.figure`
  width: 92px;
  height: 92px;

  position: absolute;

  transform: translate(-50%, -75%);
`;
