import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

import { Container, Image, Form, Input, Button, LinkStyled } from './styles';

import Logo from '../../assets/logo.svg';

export function Cadastro() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
  });

  const { setUser } = useUser();

  const navigate = useNavigate();

  function handleForm(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function submitForm(event) {
    event.preventDefault();
    setUser(inputs);

    navigate('/hoje');

    // TODO
    // realizar post com o objeto de cadastro
    // desabilitar os inputs
    // redirecionar pra rota / se sucesso
    // se falha, mostrar alerta e habilitar os inputs
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
        />
        <Input
          placeholder="senha"
          type="password"
          name="password"
          onChange={handleForm}
          value={inputs.password}
          required
        />
        <Input
          placeholder="nome"
          type="text"
          name="name"
          onChange={handleForm}
          value={inputs.name}
          required
        />
        <Input
          placeholder="foto"
          type="text"
          name="image"
          onChange={handleForm}
          value={inputs.image}
          required
        />

        <Button onSubmit={(event) => submitForm(event)}>Cadastrar</Button>
      </Form>

      <LinkStyled to="/">Já tem uma conta? Faça login!</LinkStyled>
    </Container>
  );
}
