import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useAuth } from "../../lib/hooks/useAuth";
import type { RegisterUserDto } from "../../lib/types/auth";

export const RegisterPage = () => {
  const { registerUserAsync } = useAuth();

  const [formData, setFormData] = useState<RegisterUserDto>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange =
    (field: keyof RegisterUserDto) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    registerUserAsync.mutate(formData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: 3 }}>
            Register
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange("userName")}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              fullWidth
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={registerUserAsync.isPending}
              sx={{ marginTop: 2 }}
            >
              {registerUserAsync.isPending ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Register"
              )}
            </Button>

            {registerUserAsync.data?.isSuccess && (
              <Alert severity="success" sx={{ marginTop: 2 }}>
                {registerUserAsync.data.value}
              </Alert>
            )}

            {registerUserAsync.error && (
              <Alert severity="error" sx={{ marginTop: 2 }}>
                {registerUserAsync.error.message}
              </Alert>
            )}
          </form>
        </Paper>
      </Box>
    </Container>
  );
};
