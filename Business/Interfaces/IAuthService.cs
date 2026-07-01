namespace Business.Interfaces;

public interface IAuthService
{
    Task<Result<string>> RegisterUserAsync(RegisterUserDTO dto);
    Task<Result<string>> LoginUserAsync(LoginUserDTO dto);
    Task<Result<string>> LogoutUserAsync();

}
