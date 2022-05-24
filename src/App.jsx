import { ThreeDots } from 'react-loader-spinner';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <h1>hello world</h1>

      <ThreeDots />
    </>
  );
}
