import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './components/context/AuthContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
