import { TInputItem } from "src/shared/ui/TextInputSearch/TextInputSearch";

export const getIds = (value: TInputItem[]) => {
  if (!value?.length) return [];
  return value.map((item) => item.id);
};
