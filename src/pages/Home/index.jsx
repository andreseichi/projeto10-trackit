import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../../hooks/useUser';

import { ThreeDots } from 'react-loader-spinner';

import { Container, Image, Form, Input, Button, LinkStyled } from './styles';

import Logo from '../../assets/logo.svg';
import axios from 'axios';

export function Home() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const { loginUser } = useUser();

  function handleForm(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function submitForm(event) {
    event.preventDefault();

    setIsloading(true);

    axios
      .post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
        inputs
      )
      .then((response) => {
        if (response.status === 200) {
          const { token, name, image } = response.data;
          const user = {
            name,
            image,
          };
          localStorage.setItem('token', token);
          loginUser(user);
          navigate('/hoje');
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
        setIsloading(false);
      });
  }

  return (
    <Container>
      <Image src={Logo} />

      <Form onSubmit={(event) => submitForm(event)} disabled={isLoading}>
        <Input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleForm}
          value={inputs.email}
          required
          disabled={isLoading}
        />
        <Input
          placeholder="senha"
          type="password"
          name="password"
          onChange={handleForm}
          value={inputs.password}
          required
          disabled={isLoading}
        />

        <Button onSubmit={(event) => submitForm(event)} disabled={isLoading}>
          {isLoading ? <ThreeDots height="auto" color="#fff" /> : 'Entrar'}
        </Button>
      </Form>

      <LinkStyled to="/cadastro">Não tem uma conta? Cadastre-se</LinkStyled>
    </Container>
  );
}
