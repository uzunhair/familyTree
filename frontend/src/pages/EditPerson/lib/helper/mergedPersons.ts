import { TInputs } from "src/pages/EditPerson/EditPerson";
import { TInputItem } from "src/shared/ui/TextInputSearch/TextInputSearch";

export type TInputMultiple = {
  spouse: TInputItem[];
  friends: TInputItem[];
  colleagues: TInputItem[];
  familiar: TInputItem[];
  children: TInputItem[];
};

export type TUpdate = {
  id: string;
  title: string;
  spouse?: string;
  father?: string;
  mother?: string;
  friends?: string;
  colleagues?: string;
  familiar?: string;
  birthday?: string;
  gender?: string;
  comments?: string;
};

export type TMergedPersons = {
  defaultValues: TInputs;
  data: TInputs;
};

export const mergedPersons = ({ data, defaultValues }: TMergedPersons) => {
  const { gender, spouse, friends, colleagues, familiar, children, father, mother } = data;
  const relatedUsers: TUpdate[] = [];

  const addRelatedUsers = (users: TInputItem[], key: keyof TInputMultiple) => {
    const firstArray: TInputItem[] = (defaultValues?.[key] || []).filter(
      (item): item is TInputItem => item !== undefined
    );
    const secondArray = users || [];

    const toDelete: TUpdate[] = firstArray
      .filter((item1: TInputItem) => !secondArray.some((item2) => item2.id === item1.id))
      .map((item: TInputItem) => ({ ...item, [key]: "delete" }));

    const toAdd: TUpdate[] = secondArray
      .filter((item2: TInputItem) => !firstArray.some((item1: TInputItem) => item1.id === item2.id))
      .map((item) => ({ ...item, [key]: "add" }));

    const result = [...toDelete, ...toAdd];

    result.forEach((user) => {
      relatedUsers.push(user);
    });
  };

  addRelatedUsers(spouse, "spouse");
  addRelatedUsers(friends, "friends");
  addRelatedUsers(colleagues, "colleagues");
  addRelatedUsers(familiar, "familiar");

  if (children) {
    const parent = gender.id === "male" ? "father" : "mother";
    children.forEach((user) => {
      relatedUsers.push({ ...user, [parent]: "add" });
    });
  }

  if (mother?.id) {
    relatedUsers.push({ ...mother });
  }

  if (father?.id) {
    relatedUsers.push({ ...father });
  }

  return relatedUsers.reduce((acc: TUpdate[], person) => {
    const existingPerson = acc.find((p) => p.id === person.id);
    if (existingPerson) {
      Object.assign(existingPerson, person);
    } else {
      acc.push({ ...person });
    }
    return acc;
  }, []);
};
