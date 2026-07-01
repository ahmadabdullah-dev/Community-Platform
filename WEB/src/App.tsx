import './App.css'
import LoginUserForm from './features/auth/LoginUserForm'
import LogoutUserAsync from './features/auth/LogoutUserButton'
import RegisterUserForm from './features/auth/RegisterUserForm'

function App() {

  return (
    <>
      Community Platform
      <RegisterUserForm/>
      <LoginUserForm/>
      <LogoutUserAsync/>
    </>
  )
}

export default App
