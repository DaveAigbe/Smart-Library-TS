const isUniqueValue = (
  value: string | undefined,
  existingValues: string[]
): boolean => {
  const lowerCasedValues = existingValues.map((value) => value.toLowerCase());
  if (value) {
    return !lowerCasedValues.includes(value.toLowerCase());
  }
  return false;
};

export { isUniqueValue };
