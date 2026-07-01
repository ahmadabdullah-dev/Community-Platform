import "./App.css";
import LoginUserForm from "./features/auth/LoginUserForm";
import LogoutUserAsync from "./features/auth/LogoutUserButton";
import RegisterUserForm from "./features/auth/RegisterUserForm";
import USerCard from "./features/user/UserCard";

function App() {
  return (
    <>
      Community Platform
      <USerCard />
      <RegisterUserForm />
      <LoginUserForm />
      <LogoutUserAsync />
    </>
  );
}

export default App;
