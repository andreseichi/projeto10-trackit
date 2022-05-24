import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ThreeDots } from 'react-loader-spinner';

import { Container, Image, Form, Input, Button, LinkStyled } from './styles';

import Logo from '../../assets/logo.svg';

export function Cadastro() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
  });
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

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
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
        inputs
      )
      .then((response) => {
        if (response.status === 201) {
          console.log('cadastrado');
          navigate('/');
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

      <Form onSubmit={(event) => submitForm(event)}>
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
        <Input
          placeholder="nome"
          type="text"
          name="name"
          onChange={handleForm}
          value={inputs.name}
          required
          disabled={isLoading}
        />
        <Input
          placeholder="foto"
          type="text"
          name="image"
          onChange={handleForm}
          value={inputs.image}
          required
          disabled={isLoading}
        />

        <Button onSubmit={(event) => submitForm(event)} disabled={isLoading}>
          {isLoading ? <ThreeDots height="auto" color="#fff" /> : 'Cadastrar'}
        </Button>
      </Form>

      <LinkStyled to="/">Já tem uma conta? Faça login!</LinkStyled>
    </Container>
  );
}
