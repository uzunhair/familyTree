import * as Yup from "yup";
import { stringRequired } from "src/shared/lib/utils/yupConfig";
import { TInputItem } from "src/shared/ui/TextInputSearch/TextInputSearch";

export const addUserSchema = Yup.object().shape({
  title: stringRequired("ФИО"),
  gender: Yup.object().test("is-not-empty", "Выберите пол", (value) => {
    const isNotEmpty = value as TInputItem;
    return isNotEmpty.id !== "empty";
  }),
});
