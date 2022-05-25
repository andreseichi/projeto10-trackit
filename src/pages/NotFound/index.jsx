import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Content, Title } from './styles';

export function NotFound() {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Página não encontrada</Title>
      </Content>

      <Footer />
    </Container>
  );
}
