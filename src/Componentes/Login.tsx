import { useForm, SubmitHandler } from 'react-hook-form';

interface User {
  email: string;
  password: string;
}

export function Login() {
  const { register, handleSubmit, reset } = useForm<User>()

  const onSubmit = async (data: any) => {
    console.log(data)
    reset(data)
  }

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='email_user'>
        <input
          id='email_user'
          type='text'
          placeholder='email'
          { ...register('email') }
        />
      </label>
      <label htmlFor='password_user'>
        <input
          id='password_user'
          type='text'
          placeholder='senha'
          { ...register('password') }
        />
      </label>
      <button type='submit'>Send</button>
    </form>
  );
}
