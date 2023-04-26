import { useForm, SubmitHandler } from 'react-hook-form';


interface Input {
  code: string;
}

export function Input() {
  const { register, handleSubmit, reset } = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data)
    reset(data)
  }

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