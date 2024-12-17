import * as Yup from "yup";
import { TInputItem } from "src/shared/ui/TextInputSearch/TextInputSearch";

export const editUserSchema = Yup.object().shape({
  gender: Yup.object().test("is-not-empty", "Выберите пол", (value) => {
    const isNotEmpty = value as TInputItem;
    return isNotEmpty.id !== "empty";
  }),
});
