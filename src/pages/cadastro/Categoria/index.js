import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

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
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={HandleChange}
          />
        </div>

        {/* <div>
          <label>
            Descrição
          <textarea type="text"
              value={values.descricao}
              name="descricao"
              onChange={HandleChange} />
          </label>
        </div> */}


        <div>
          <FormField
            label="Cor"
            type="color"
            value={values.cor}
            name="cor"
            onChange={HandleChange}
          />
        </div>

        {/* <div>        
          <label>
            Cor
          <input type="color"
              value={values.cor}
              name="cor"
              onChange={HandleChange} />
          </label>
        </div> */}

        <button>
          Cadastrar
      </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
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