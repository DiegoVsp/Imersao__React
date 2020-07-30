import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }
  function HandleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }



  useEffect(()=> {
    console.log('alo')
     const URL = window.location.hostname.includes('localhost')
     ?'http://localhost:8000/categorias'
     :'https://imersaoreact.herokuapp.com/categorias';
     fetch(URL)
     .then(async (respostaServidor) =>{
     const resposta = await respostaServidor.json();
     setCategorias([...resposta,])
   });
  });
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria:{values.nome}</h1>

      <form onSubmit={function HandleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
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
            value={values.descricao}
            name="descricao"
            onChange={HandleChange}
          />
        </div>      

        <div>
          <FormField
            label="Cor"
            type="color"
            value={values.cor}
            name="cor"
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
            <li key={`${categoria.nome}`}>
              {categoria.nome}
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