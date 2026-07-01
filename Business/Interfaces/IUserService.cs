
namespace Business.Interfaces;

public interface IUserService
{
    Task<Result<UserDTO>> GetCurrentUserAsync();
}
