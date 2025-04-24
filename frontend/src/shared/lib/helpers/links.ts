export const links = {
  home: "/",
  addPerson: "/add-person",
  editPerson: (value: string) => `/edit-person/${value}`,
  allPersons: "/all-persons",
  editGraph: "/edit-graph",
  forceGraph: "/force-graph",
  forceGraph3d: "/force-graph3d",
  notion: "/notion",
  notionEdit: (value: number | string) => `/notion-edit/${value}`,
};
