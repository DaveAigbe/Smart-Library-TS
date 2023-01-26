interface Ids {
  ids: string[];
}

interface Videos {
  [genre: string]: Ids;
}

export type { Ids, Videos };
