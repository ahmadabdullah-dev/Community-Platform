namespace Business.DTOs;

public record RegisterUserDTO(
    string UserName,
    string Email,
    string Password,
    string ConfirmPassword
);
public record LoginUserDTO(
    string Email,
    string Password,
    bool IsPersistence
);
public record UserDTO(
    string UserName,
    string Email,
    string? Country,
    IList<string> Roles
);
