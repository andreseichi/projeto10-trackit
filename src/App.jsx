import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Hoje } from './pages/Hoje';
import { Habitos } from './pages/Habitos';
import { Historico } from './pages/Historico';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </>
  );
}
