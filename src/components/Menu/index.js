import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/img/Diego-Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      {/* muda de href="" para to="" */}
      <a to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>

      <Button as={Link} className="ButtonLink" to="/cadastro/Video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;