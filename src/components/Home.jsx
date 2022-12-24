//import context
import { useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'

const Home = () => {
  //extract user and logout from context
  const { user, logout } = UserAuth()

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex h-screen justify-center items-center'>
      <h1 className='text-4xl font-bold text-center'>
        Welcome {user && user.email}
      </h1>

      <button
        onClick={handleLogout}
        className='border px-3 py-2 text-2xl rounded-lg'
      >
        Logout
      </button>
    </div>
  )
}

export default Home
