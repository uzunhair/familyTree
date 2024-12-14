export type TNode = {
  id:         string,
  name:       string,
  gender:     string,
  father:     string,
  mother:     string,
  spouse:     string[],
  friends:    string[],
  colleagues: string[],
  familiar:   string[],
}

export type TLinks = {
  source: string;
  target: string;
  relation: string;
}