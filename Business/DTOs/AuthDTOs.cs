namespace Business.DTOs;

public record RegisterUserDTO(
    string UserName,
    string Email,
    string Password,
    string ConfirmPassword
);


