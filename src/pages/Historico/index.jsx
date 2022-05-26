import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Content, Title, Text } from './styles';

export function Historico() {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Histórico</Title>

        <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
      </Content>
      <Footer />
    </Container>
  );
}
