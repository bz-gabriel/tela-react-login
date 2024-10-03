import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login';
import Cadastro from './components/cadastro';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Cadastro</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Cadastro />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
