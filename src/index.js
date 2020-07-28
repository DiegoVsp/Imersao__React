import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../src/pages/Home/index';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

// desafio
const Pag404 = () => (<div>Página 404</div>)


ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component ={Home} exact/>
      <Route path="/cadastro/Video" component ={CadastroVideo} />
      <Route path="/cadastro/Categoria" component ={CadastroCategoria} />
      <Route component ={Pag404}/>
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);


