import loginPNG from '../assets/login.jpg'

const LoginForm = () => {
  return (
    <section className='min-h-screen flex items-center justify-center md:px-10'>
      <div className='bg-gradient-to-br from-indigo-100/30 via-slate-200/70 to-slate-300 md:to-rose-200/70 flex rounded-2xl max-w-6xl p-5 shadow-lg items-stretch'>
        {/* form container */}
        <div className='md:w-[45%] px-10'>
          <h2 className='font-bold text-2xl text-indigo-900/80'>Login</h2>
          <p className='mt-2 text-gray-500'>
            If you are already a member, easily log in
          </p>
          <form className='flex flex-col gap-4 mt-6'>
            <input
              className='p-2 rounded-lg border-2 border-opacity-50 outline-none focus:border-blue-500  transition duration-200'
              type='email'
              placeholder='Email'
              name='email'
            />

            <div className='relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='gray'
                className='bi bi-eye absolute top-1/2 right-3 -translate-y-1/2'
                viewBox='0 0 16 16'
              >
                <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
              </svg>
              <input
                className='w-full bg-white p-2 rounded-lg border-2 border-opacity-50 outline-none focus:border-blue-500  transition duration-200'
                type='password'
                name='password'
                id=''
                placeholder='password'
              />
            </div>
            <div className='flex items-stretch justify-between'>
              <button className='w-[45%] shadow-md bg-gradient-to-br from-indigo-500/90 to-purple-500/80 text-white rounded-lg py-2 flex justify-center items-center gap-1 border font-semibold'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='currentColor'
                  className='bi bi-person-badge'
                  viewBox='0 0 16 16'
                >
                  <path d='M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                  <path d='M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z' />
                </svg>
                <span className=' lg:hidden'>As guest</span>
                <span className='hidden lg:block'>Log in as a Guest</span>
              </button>
              <button className='w-[45%] shadow-md bg-gradient-to-br from-gray-300/90 to-slate-600/70 text-white tracking-wider py-2 rounded-md font-bold'>
                Login
              </button>
            </div>
          </form>
          <div className='mt-8 grid grid-cols-3 items-center'>
            <hr className='border-gray-400' />
            <p className='text-center text-sm text-gray-500'>OR</p>
            <hr className='border-gray-400' />
          </div>

          <button className='shadow-md bg-white w-full rounded-lg py-2 mt-5 flex justify-center items-center gap-2 border text-gray-500 font-semibold'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              width='25px'
            >
              <path
                fill='#FFC107'
                d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
              />
              <path
                fill='#FF3D00'
                d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
              />
              <path
                fill='#4CAF50'
                d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
              />
              <path
                fill='#1976D2'
                d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
              />
            </svg>
            Login with Google
          </button>
          <div className='flex justify-between items-center mt-4 font-semibold text-gray-500'>
            <p className='md:hidden'>No account?</p>
            <p className='hidden md:block'>You don't have an account?</p>
            <button className='py-2 px-10 select-none'>Register</button>
          </div>
        </div>

        {/* Image Container */}
        <div className='w-[55%] hidden md:block'>
          <img src={loginPNG} alt='login' className='rounded-lg min-h-full' />
        </div>
      </div>
    </section>
  )
}

export default LoginForm