export type RegisterUserDto = {
    userName : string,
    email: string,
    password: string,
    confirmPassword : string
}
export type LoginUserDto = {
    email : string,
    password : string,
    isPersistence: boolean
}