export const getVideoId = (value: string): string => {
  if (value.length === 11) {
    return value;
  }

  return value.slice(-11);
};
