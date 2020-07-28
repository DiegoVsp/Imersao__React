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
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;