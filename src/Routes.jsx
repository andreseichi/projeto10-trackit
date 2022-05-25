import { Routes as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Hoje } from './pages/Hoje';
import { Habitos } from './pages/Habitos';
import { Historico } from './pages/Historico';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/hoje" element={<Hoje />} />
      <Route path="/habitos" element={<Habitos />} />
      <Route path="/historico" element={<Historico />} />
    </Router>
  );
}
