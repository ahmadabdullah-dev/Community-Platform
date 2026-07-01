import { useQuery } from "@tanstack/react-query"
import type { UserDto } from "../types/user"
import type { Result } from "../types/common"
import agent from "../api/agent"
export const useUser = () => {
    
const GetCurrentUserAsync = useQuery<Result<UserDto>,Error>({
    queryKey: ["current-user"],
    queryFn: async () => {
        const response = await agent.get<Result<UserDto>>("/user/current-user");
        return response.data;
    }
})
  
return{
    GetCurrentUserAsync
}

} 