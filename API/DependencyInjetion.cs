namespace API;

public static class DependencyInjetion
{
    public static IServiceCollection AddAPI(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("AllowWeb",
                policy =>
                {
                    policy.WithOrigins("http://localhost:3000")
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowCredentials();
                });
        });
        return services;
    }
}
