import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Hoje } from './pages/Hoje';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hoje" element={<Hoje />} />
      </Routes>
    </>
  );
}
