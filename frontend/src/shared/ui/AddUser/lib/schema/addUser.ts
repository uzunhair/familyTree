import {stringRequired} from "src/shared/lib/utils/SimplifiedYup";
import * as Yup from "yup";

export const addUserSchema = Yup.object().shape({
  fio: stringRequired("ФИО"),
});