export const setStorageWithExpiry = (
  key: string,
  value: string | undefined,
  ttl: number
): void => {
  const now = new Date();

  // now.getTime() returns universal time in milliseconds, ttl is the amount of time the item should be valid from the current
  // day it was set.
  const items = {
    value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(items));
};
