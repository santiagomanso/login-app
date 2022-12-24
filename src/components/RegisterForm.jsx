import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'

const RegisterForm = () => {
  //states to handle form
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  //extract create user fn from context
  const { createUser } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await createUser(email, password)
      navigate('/')
    } catch (e) {
      console.log(e)
      setError(e.message)
    }
  }

  return (
    <section className='min-h-screen flex items-center justify-center md:px-10'>
      <div className='h-screen w-full max-w-xl md:h-auto  md:min-w-auto bg-gradient-to-br from-indigo-100 via-slate-200/50 to-slate-400/80 md:to-sky-900/40 flex rounded-2xl  md:p-5 shadow-lg items-stretch '>
        {/* form container */}
        <div className='w-full px-5 md:px-10 flex flex-col justify-center -translate-y-32 md:-translate-y-0'>
          <h2 className='font-bold text-2xl text-indigo-900/80 select-none'>
            Create your Account
          </h2>

          <p className='mt-2 text-gray-500 select-none'>
            Already registered?{' '}
            <Link to='/login' className='font-bold'>
              Sign in here
            </Link>
          </p>
          <form
            className='flex fl
          ex-col gap-4 mt-10'
            onSubmit={handleSubmit}
          >
            <label className='flex flex-col'>
              <span>
                Email address{' '}
                <span className='hidden md:inline text-red-500 font-bold'>
                  {error ? error : ''}
                </span>{' '}
              </span>
              <span className='md:hidden text-red-500 font-bold'>
                {error ? error : ''}
              </span>
              <input
                onClick={() => setError(null)}
                onChange={(e) => setEmail(e.target.value)}
                className={` ${
                  error && error.length > 1 ? 'py-5' : ''
                } p-2 mb-2 rounded-lg  focus:border-blue-500  transition duration-200`}
                type='email'
                placeholder='Email'
                name='email'
              />
            </label>

            <label className='flex flex-col'>
              <span>Password</span>
              <div className='relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  fill='lightgray'
                  className='bi bi-eye absolute top-1/2 right-3 -translate-y-1/2'
                  viewBox='0 0 16 16'
                >
                  <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                  <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
                </svg>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full bg-white p-2 rounded-lg border-2 border-opacity-50 outline-none focus:border-blue-500  transition duration-200'
                  type='password'
                  name='password'
                  id=''
                  placeholder='password'
                />
              </div>
            </label>

            <button className='select-none mt-7 w-full shadow-md bg-gradient-to-br from-indigo-500/90 to-purple-500/80 text-white rounded-lg py-2 flex justify-center items-center gap-2 border font-semibold hover:scale-105 duration-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='currentColor'
                className='bi bi-person-fill-add'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1Z'
                />
                <path d='M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z' />
              </svg>
              <span className=''>Sign up</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegisterForm
