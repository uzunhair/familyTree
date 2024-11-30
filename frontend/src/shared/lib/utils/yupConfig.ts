import * as Yup from "yup";

export const messages = {
  requiredField: (field: string) => `Необходимо заполнить поле «${field}»`,
};

export const stringRequired = (field: string) =>
  Yup.string().required(messages.requiredField(field));