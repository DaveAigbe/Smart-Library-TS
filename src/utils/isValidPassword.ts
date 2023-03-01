export const isValidPassword = (
  password: string | undefined | null
): boolean => {
  if (!password) {
    return true;
  }

  return password.length >= 8;
};
