import React, { useEffect, useState }from 'react';
import { Link, useHistory} from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] =useState([]);
  const categoryTitles = categorias.map(({titulo}) => titulo)
  const { HandleChange, values } = useForm({
    titulo:'Video Padrão',
    url:'https://www.youtube.com/watch?v=BkEk7C14ONE',
    categoria:'Criaturas'
  });

  useEffect(()=> {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      })
  }, [])
  // console.log(categorias)

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event)=> {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!')

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });
        // console.log('categoriaEscolhida',categoriaEscolhida)

      videosRepository.create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida.id,
      })
      .then(()=> {
        console.log('Cadastrou com sucesso')
        history.push('/')
      })

        history.push('/')
      }}>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={HandleChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={HandleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={HandleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Novo Vídeo
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;