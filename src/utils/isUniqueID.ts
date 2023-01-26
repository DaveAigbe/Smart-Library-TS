const isUniqueID = (id: string | undefined, existingIDs: string[]): boolean => {
  if (id) {
    return !existingIDs.includes(id);
  }
  return false;
};

export { isUniqueID };
