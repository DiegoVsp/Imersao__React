import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}categorias`;

function criarNovaCategoria(categoria){
  return fetch(`${URL_CATEGORIES}`,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoria)
  })
}
 function getAll() {
  return fetch(`${URL_CATEGORIES}`)
  .then(async (respostaDoServidor) => {
    
    if(respostaDoServidor.ok){
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error('Não foi possivel pegar os dados :( ');
  })
}


 function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (respostaDoServidor) => {    
    if(respostaDoServidor.ok){
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error('Não foi possivel pegar os dados :( ');
  })
}

export default {
  getAllWithVideos,
  getAll,
  criarNovaCategoria,
};