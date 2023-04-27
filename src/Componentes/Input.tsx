import { useForm, SubmitHandler } from 'react-hook-form';
import { InputCode } from '../Interfaces/InputCode'
import { ContextTrack } from '../Context/context'


export function Input() {
  const { register, handleSubmit, reset } = useForm<InputCode>()
  const { inputCode } = ContextTrack()

  const onSubmit: SubmitHandler<InputCode> = (data) => {
    console.log(data)
    inputCode(data)
    reset(data)
  }

  return (
    <>
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
    </>
  );
} 