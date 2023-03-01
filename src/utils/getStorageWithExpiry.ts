import { ExpiryStorage } from "../types/Types";

export const getStorageWithExpiry = (key: string): unknown => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item: ExpiryStorage = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
};
