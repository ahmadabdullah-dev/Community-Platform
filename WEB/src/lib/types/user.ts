export type UserDto = {
  userName: string;
  email: string;
  country?: string | null;
  roles: string[];
};