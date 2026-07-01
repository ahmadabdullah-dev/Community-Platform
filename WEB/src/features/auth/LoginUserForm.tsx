import { useAuth } from "../../lib/hooks/useAuth";
import type { LoginUserDto } from "../../lib/types/auth";
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
  Checkbox,
  FormControlLabel
} from "@mui/material";

export default function LoginUserForm (){
     const { loginUserAsync } = useAuth();
    
      const [formData, setFormData] = useState<LoginUserDto>({
        email: "",
        password: "",
        isPersistence : false
      });
    
      const handleChange =
        (field: keyof LoginUserDto) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({ ...formData, [field]: e.target.value });
        };
        const handlePersistenceChange = (
          e: React.ChangeEvent<HTMLInputElement>,
        ) => {
          setFormData({
            ...formData,
            isPersistence: e.target.checked,
          });
        };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginUserAsync.mutate(formData);
      };
    return (
      <>
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
                Login
              </Typography>

              <form onSubmit={handleSubmit}>
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.isPersistence}
                      onChange={handlePersistenceChange}
                    />
                  }
                  label="Remember me"
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loginUserAsync.isPending}
                  sx={{ marginTop: 2 }}
                >
                  {loginUserAsync.isPending ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Login"
                  )}
                </Button>

                {loginUserAsync.data?.isSuccess && (
                  <Alert severity="success" sx={{ marginTop: 2 }}>
                    {loginUserAsync.data.value}
                  </Alert>
                )}

                {loginUserAsync.error && (
                  <Alert severity="error" sx={{ marginTop: 2 }}>
                    {loginUserAsync.error.message}
                  </Alert>
                )}
              </form>
            </Paper>
          </Box>
        </Container>
      </>
    );
}