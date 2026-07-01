using Microsoft.AspNetCore.Identity;

namespace Business.Services;

public class AuthService : IAuthService
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;
    private readonly IUserService _userService;

    private const string MEMBER_ROLE = "Member";

    public AuthService(
        UserManager<AppUser> userManager,
        SignInManager<AppUser> signInManager,
        IUserService userService
    )
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _userService = userService;
    }

    public async Task<Result<string>> RegisterUserAsync(RegisterUserDTO dto)
    {  
        var newUser = new AppUser
        {
            UserName = dto.UserName,
            Email = dto.Email,
            EmailConfirmed = false
        };

        var registerResult = await _userManager.CreateAsync(newUser,dto.Password);
        
        if (!registerResult.Succeeded)
            return Result<string>.Failure(string.Join(",", registerResult.Errors.Select(e => e.Description)));

        await _userManager.AddToRoleAsync(newUser, MEMBER_ROLE);
        
        return Result<string>.Success("User registered succesfully");

    }
    
    public async Task<Result<string>> LoginUserAsync(LoginUserDTO dto)
    {
        var user = await _userManager.FindByEmailAsync(dto.Email);
       
        if (user == null)
            return Result<string>.Failure("Invalid email or password");

        var loginResult = await _signInManager.PasswordSignInAsync(user,dto.Password,dto.IsPersistence,false);
      
        return loginResult.Succeeded ? Result<string>.Success("Logged in successfully") : Result<string>.Failure("Invalid email or password");
    }
    public async Task<Result<string>> LogoutUserAsync()
    {
        var user = await _userService.GetCurrentUserAsync();

        if (user.IsSuccess == false)
            return Result<string>.Failure(user.Error!);
        
        await _signInManager.SignOutAsync();

        return Result<string>.Success("Logged out successfully");
    }

}
