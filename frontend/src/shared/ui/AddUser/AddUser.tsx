import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import {addUserSchema} from "./lib/schema/addUser";
import {SaveUserToJSONFile} from "../../../../wailsjs/go/main/App";
import {getInitials} from "../../lib/helpers/getInitials";
import {transliterate} from "../../lib/helpers/transliterate";
import {TextInput} from "../TextInput";

type TInputs = {
  id: string;
  fio: string;
  birthday: string;
  wife: string;
  father: string;
  mother: string;
  friends: string;
  colleagues: string;
  familiar: string;
}

const defaultValues = {
  id: "",
  fio: "",
  birthday: "",
  wife: "",
  father: "",
  mother: "",
  friends: "",
  colleagues: "",
  familiar: "",
};

export const AddUser = () => {
  const {
    handleSubmit,
    control
  } = useForm<TInputs>({
    defaultValues,
    resolver: yupResolver(addUserSchema),
  });

  const onSubmit: SubmitHandler<TInputs> = (data) =>  {
    const newData = {
      ...data,
      id: `${Date.now()}_${transliterate(getInitials(data.fio))}`
    };
    console.log(newData);
    SaveUserToJSONFile(newData)
      .then((item) => console.log("Add new person", item))
      .catch((errors) => console.log("Errors: Add new person", errors));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="intro-y box p-5">
        <Controller
          name="fio"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextInput label="ФИО" value={value} onChange={onChange} error={error} />
          )}
        />
        <Controller
          name="birthday"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput label="Дата рождения" value={value} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="wife"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput label="Жена" value={value} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="father"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput label="Отец" value={value} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="mother"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput label="Мать" value={value} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="friends"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput label="Друзья" value={value?.[0]} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="colleagues"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput label="Коллеги" value={value?.[0]} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="familiar"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput label="Знакомые" value={value?.[0]} onChange={onChange} className="mt-4"/>
          )}
        />
        <div className="mt-5 text-right">
          <button
            type="button"
            className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-5 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 mr-2 w-32"
          >
            Отменить
          </button>
          <button
            type="submit"
            className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-5 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-32"
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
  );
};