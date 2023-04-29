import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { ContextTrack } from '../Context/context'
import * as z from 'zod'

const inputSchema = z.object({
  code: z.string()
  .regex(/^[A-Z]{2}[0-9]{9}[A-Z]{2}$/, 'Código deve possuir 13 caracteres, 4 letras e 9 numeros, por exemplo: AA123456789XX.')
})

export type Input = z.infer<typeof inputSchema>

export function Input() {
  const { inputCode, msg } = ContextTrack();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Input>({
    resolver: zodResolver(inputSchema)
  })

  const onSubmit: SubmitHandler<Input> = (data: Input) => {
    inputCode(data)
    reset(data)
    if (msg.includes('Objeto não encontrado')) {
      alert('Objeto não encontrado na base de dados dos Correios')
    }
  }

  return (
    <div className='w-full py-12 bg-gradient-to-r from-cyan-900 via-purple-700 to-pink-900'>
      <div className='max-w-[1000px] w-full mx-auto py-8 px-5 flex flex-col justify-center items-center gap-10'>
        <h1 className="text-4xl font-bold text-slate-50">Rastreio de encomendas</h1>
        <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex border-2 rounded'>
            <input
              className='p-3.5 w-full focus:outline-none'
              id='id_code'
              type='text'
              placeholder='Adicione o código de rastreio'
              { ...register('code') }
            />
            <button className='bg-pink-800 rounded hover:bg-pink-700 text-white font-bold py-2 px-4 rounded' type='submit'>Send</button>
          </div>
          {errors.code && <span className='text-1xl text-white whitespace-pre-line' >{errors.code.message}</span>}
        </form>
      </div>
    </div>
  );
} 