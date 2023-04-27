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
    <div className='w-full py-12 bg-gradient-to-r from-cyan-900 via-purple-700 to-pink-900'>
      <div className='max-w-[1000px] w-full mx-auto py-8 px-5 flex flex-col justify-center items-center gap-10'>
        <h1 className="text-4xl font-bold text-slate-50">Rastreio de encomendas</h1>
        <form className="flex border-2 w-full rounded" onSubmit={handleSubmit(onSubmit)}>
          <input
            className='p-3.5 w-full focus:outline-none'
            id='id_code'
            type='text'
            placeholder='Adicione o código de rastreio'
            { ...register('code') }
          />
          <button className='bg-pink-800 rounded hover:bg-pink-700 text-white font-bold py-2 px-4 rounded' type='submit'>Send</button>
        </form>

      </div>
    </div>
  );
} 