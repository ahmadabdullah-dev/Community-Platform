import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { useUser } from "../../lib/hooks/useUser";

export default function UserCard() {
  const { GetCurrentUserAsync } = useUser();
  const { data, isLoading, isError, error } = GetCurrentUserAsync;
  const user = data?.value;

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Typography color="error">Error: {error?.message}</Typography>;

  return (
    <Card sx={{ maxWidth: 320, p: 1 }}>
      <CardContent>
        <Typography variant="h6">{user?.userName}</Typography>
        <Typography>Email: {user?.email}</Typography>
        <Typography>Country: {user?.country}</Typography>
        <Typography>Roles: {user?.roles?.join(", ")}</Typography>
      </CardContent>
    </Card>
  );
}
