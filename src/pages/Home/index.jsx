import { Container, Image, Form, Input, Button, LinkStyled } from './styles';

import Logo from '../../assets/logo.svg';

export function Home() {
  return (
    <Container>
      <Image src={Logo} />

      <Form>
        <Input placeholder="email" />
        <Input placeholder="senha" />

        <Button>Entrar</Button>
      </Form>

      <LinkStyled to="/cadastro">Não tem uma conta? Cadastre-se</LinkStyled>
    </Container>
  );
}
