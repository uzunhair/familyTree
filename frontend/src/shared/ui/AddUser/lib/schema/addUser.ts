import * as Yup from "yup";
import {stringRequired} from "src/shared/lib/utils/SimplifiedYup";

export const addUserSchema = Yup.object().shape({
    fio: stringRequired("ФИО"),
});