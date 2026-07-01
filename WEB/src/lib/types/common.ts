export type Result<T = null> = {
  isSuccess: boolean;
  value: T | null;
  error: string | null;
};
