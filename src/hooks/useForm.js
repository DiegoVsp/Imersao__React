import {useState} from 'react';


function useForm(valoresIniciais){ //custom hook
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
  function clearForm(){
    setValues(valoresIniciais);
  }
  return {
    values,
    HandleChange,
    clearForm,
  };

}
export default useForm;