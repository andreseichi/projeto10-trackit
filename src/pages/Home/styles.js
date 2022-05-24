import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: auto;
  margin-inline: 36px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 68px;
  width: 180px;
  height: 180px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 32px;
`;

export const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  color: #dbdbdb;
  font-size: 20px;
  line-height: 25px;

  padding: 9px 11px;

  outline: none;

  & + Input {
    margin-top: 6px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;

  font-size: 20px;
  line-height: 26px;
  color: #fff;

  margin-top: 6px;

  padding: 9px 11px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};

  cursor: pointer;
`;

export const LinkStyled = styled(Link)`
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;

  margin-top: 25px;

  color: #52b6ff;
`;
