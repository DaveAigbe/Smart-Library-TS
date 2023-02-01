import { Library } from "./Library";

export interface User {
  [K: string]: {
    username: string;
    videos: Library;
  };
}
