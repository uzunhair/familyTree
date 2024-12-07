import {TInputItem} from "src/shared/ui/TextInputSearch/TextInputSearch";

export const GENDER: TInputItem[] = [
  {id: "empty", title: "Не указано"},
  {id: "male", title: "Мужской"},
  {id: "female", title: "Женский"}
];

export function getGenderById(id: string): TInputItem {
  const item = GENDER.find(item => item.id === id);
  return item || GENDER[0];
}