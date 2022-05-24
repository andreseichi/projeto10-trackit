import { Container, Image, Form, Input, Button, LinkStyled } from './styles';

import Logo from '../../assets/logo.svg';

export function Cadastro() {
  return (
    <Container>
      <Image src={Logo} />

      <Form>
        <Input placeholder="email" />
        <Input placeholder="senha" />
        <Input placeholder="nome" />
        <Input placeholder="foto" />

        <Button>Cadastrar</Button>
      </Form>

      <LinkStyled to="/">Já tem uma conta? Faça login!</LinkStyled>
    </Container>
  );
}
