import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm'


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const {HandleChange, values, clearForm} = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(()=> {
    console.log('alo')
     const URL = window.location.hostname.includes('localhost')
     ?'http://localhost:8000/categorias'
     :'https://imersaoreact.herokuapp.com/categorias';
     fetch(URL)
     .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
}, []);
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria:{values.nome}</h1>

      <form onSubmit={function HandleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        clearForm();
      }}>
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome} /*enviando valor via props*/
            onChange={HandleChange}
          />
        </div>

        <div>
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={HandleChange}
          />
        </div>      

        <div>
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={HandleChange}
          />
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      ) }
      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para Home
    </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;