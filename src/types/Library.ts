interface Videos {
  ids: string[];
}

export interface Library {
  [genre: string]: Videos;
}
