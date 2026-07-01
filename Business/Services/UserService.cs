using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace Business.Services;

public class UserService : IUserService
{
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly UserManager<AppUser> _userManager;
    public UserService(IHttpContextAccessor httpContextAccessor, UserManager<AppUser> userManager)
    {
        _httpContextAccessor = httpContextAccessor;
        _userManager = userManager;
    }

    private string? GetCurrentUserId()
    {
        return _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier);
    }
    public async Task<Result<UserDTO>> GetCurrentUserAsync()
    {
        var userId = GetCurrentUserId();

        if(string.IsNullOrEmpty(userId))
          return Result<UserDTO>.Failure("No current user logged in");

        var user = await _userManager.FindByIdAsync(userId);

        if (user == null)
            return Result<UserDTO>.Failure("Current user was not found in database");

        var roles = await _userManager.GetRolesAsync(user);

        var userDTO = new UserDTO
        (
             user.UserName!,
             user.Email!,
             user.Country,
             roles
        );

        return Result<UserDTO>.Success(userDTO);
    }  
}
