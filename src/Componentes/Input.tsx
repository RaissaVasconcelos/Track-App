import { useForm, SubmitHandler } from 'react-hook-form';
import { api } from '../Service/api';
import { useState } from 'react';

interface Input {
  code: string;
}

export function Input() {
  const { register, handleSubmit, reset } = useForm<Input>()
  const [data, setData] = useState([{}])
  const [eventos, setEventos] = useState([{}])

  const onSubmit: SubmitHandler<Input> = async (data) => {
    console.log(data)
    const request = await api.post('/rastreio', data);
    console.log(request.data.response.objetos[0]);
    console.log(request.data.response.objetos[0].eventos);
    setData(request.data.response.objetos[0])
    setEventos(request.data.response.objetos[0].eventos)
    reset(data)
  }

  console.log('data: ', `${data}`)
  console.log('eventos', `${eventos}`)

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='id_code'>
        <input
          id='id_code'
          type='text'
          placeholder='Adicione o código de rastreio'
          { ...register('code') }
        />
      </label>
      <button type='submit'>Send</button>
    </form>
  );
} 