import './App.css'
import LoginUserForm from './features/auth/LoginUserForm'
import RegisterUserForm from './features/auth/RegisterUserForm'

function App() {

  return (
    <>
      Community Platform
      <RegisterUserForm/>
      <LoginUserForm/>
    </>
  )
}

export default App
