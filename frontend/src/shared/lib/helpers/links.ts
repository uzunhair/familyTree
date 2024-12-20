export const links = {
  home: "/",
  addPerson: "/add-person",
  editPerson: (value: string) => `/edit-person/${value}`,
  allPersons: "/all-persons",
  forceGraph: "/force-graph",
  notion: "/notion",
  notionEdit: (value: number | string) => `/notion-edit/${value}`,
};
