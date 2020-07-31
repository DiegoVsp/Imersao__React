 const URL_BACKEND = window.location.hostname.includes('localhost')
?'http://localhost:8000'
:'https://imersaoreact.herokuapp.com/categorias';


export default {
  URL_BACKEND,
}
