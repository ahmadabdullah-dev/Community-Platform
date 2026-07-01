import { Button } from "@mui/material";
import { useAuth } from "../../lib/hooks/useAuth";

export default function LogoutUserAsync() {
  const { logoutUserAsync } = useAuth();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logoutUserAsync.mutate();
  };

  return <Button onClick={handleClick}>Logout</Button>;
}
