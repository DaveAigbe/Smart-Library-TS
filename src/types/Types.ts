export interface User {
  email?: string;
  username?: string;
  library?: Library;
  createdAt?: string;
}

export interface Library {
  [genre: string]: Videos;
}

interface Videos {
  ids: string[];
}

export type Genres = string[];

export type NotificationState = "success" | "warning" | "error";

export type ActiveToggle = [
  isActive: boolean,
  toggleActive: (state?: boolean) => void
];

export interface ExpiryStorage {
  value: unknown;
  expiry: number;
}
