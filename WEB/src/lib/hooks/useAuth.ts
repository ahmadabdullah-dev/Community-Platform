import { useMutation} from "@tanstack/react-query";
import agent from "../api/agent";
import type { LoginUserDto, RegisterUserDto } from "../types/auth";
import type { Result } from "../types/common";

export const useAuth = () => {

 const registerUserAsync = useMutation<Result<string>, Error, RegisterUserDto>({
   mutationFn: async (creds: RegisterUserDto) => {
     const response = await agent.post<Result<string>>("/auth/register-user",creds);
     return response.data;
   },
 });

 const loginUserAsync = useMutation<Result<string>, Error, LoginUserDto>({
  mutationFn: async (creds : LoginUserDto) => {
    const response = await agent.post<Result<string>>("/auth/login-user",creds);
    console.log(response.data)
    return response.data;
  }
 })
 const logoutUserAsync = useMutation<Result<string>,Error>({
  mutationFn: async () => {
    const response = await agent.post<Result<string>>("/auth/logout-user");
    return response.data;
  }
 })

    return {
        registerUserAsync,
        loginUserAsync,
        logoutUserAsync
    }
}