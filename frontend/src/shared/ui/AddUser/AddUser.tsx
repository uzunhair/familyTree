import {useEffect, useState} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {setPersonId} from "src/shared/lib/helpers/setPersonId";
import {TextInputSearch} from "src/shared/ui/TextInputSearch";
import {TPersonId} from "src/shared/ui/TextInputSearch/TextInputSearch";
import {TextInputSelect} from "src/shared/ui/TextInputSelect";
import {addUserSchema} from "./lib/schema/addUser";
import {SaveUserToJSONFile, GetAllPerson} from "../../../../wailsjs/go/main/App";
import {TextInput} from "../TextInput";

type TInputs = {
  id: string;
  fio: string;
  birthday: string;
  wife: TPersonId;
  father: TPersonId;
  mother: TPersonId;
  friends: string;
  colleagues: string;
  familiar: string;
}

type TInputsOut = {
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
  wife: {
    id: "",
    fio: ""
  },
  father: {
    id: "",
    fio: ""
  },
  mother: {
    id: "",
    fio: ""
  },
  friends: "",
  colleagues: "",
  familiar: "",
  createPerson: [],
};

export const AddUser = () => {
  const {
    handleSubmit,
    control,
    setError,
    setValue,
    watch,
  } = useForm<TInputs>({
    defaultValues,
    resolver: yupResolver(addUserSchema),
  });

  const [persons, setPersons] = useState<TPersonId[]>([]);
  
  const onSubmit: SubmitHandler<TInputs> = (data) =>  {
    const isDuplicate = persons.some(
      item => item.fio.toLowerCase().trim() === data.fio.toLowerCase().trim()
    );

    if (isDuplicate) {
      setError("fio", {
        type: "manual",
        message: "Поле дублируется, введите другое значение",
      });
      return;
    }

    const newPersons: TPersonId[] = [];
    const personData = (value: TPersonId) => {
      if (value.id) {
        return value;
      } else if (value.fio) {
        const item = { ...value, id: setPersonId(value.fio) };
        newPersons.push(item);
        return item;
      }
      return {id: ""};
    };

    const wife = personData(data.wife);
    const father = personData(data.father);
    const mother = personData(data.mother);

    const mainPerson: TInputsOut = {
      ...data,
      id: setPersonId(data.fio),
      wife: wife.id,
      father: father.id,
      mother: mother.id,
    };

    // SaveUserToJSONFile(mainPerson)
    // // eslint-disable-next-line no-console
    //   .then((item) => console.log("Add new person", item))
    // // eslint-disable-next-line no-console
    //   .catch((errors) => console.log("Errors: Add new person", errors));
  };
  
  useEffect(() => {
    GetAllPerson()
      .then((item) => {
        // eslint-disable-next-line no-console
        console.log("GetAllPerson", item);
        setPersons(item);
      })
      // eslint-disable-next-line no-console
      .catch((errors) => console.log("Error: GetAllPerson", errors));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="intro-y box p-5">
        <Controller
          name="fio"
          control={control}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <TextInputSearch 
              label="ФИО" 
              value={value} 
              onChange={onChange}
              error={error}
              data={persons}
            />
          )}
        />
        <Controller
          name="birthday"
          control={control}
          render={({field: {value, onChange}}) => (
            <TextInput label="Дата рождения" value={value} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="wife"
          control={control}
          render={({field: {value, onChange, }, fieldState: {error}}) => (
            <TextInputSelect
              label="Жена"
              value={value}
              onChange={onChange}
              error={error}
              data={persons}
              className="mt-4"
            />
          )}
        />
        <Controller
          name="father"
          control={control}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <TextInputSelect
              label="Отец"
              value={value}
              onChange={onChange}
              error={error}
              data={persons}
              className="mt-4"
            />
          )}
        />
        <Controller
          name="mother"
          control={control}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <TextInputSelect
              label="Мать"
              value={value}
              onChange={onChange}
              error={error}
              data={persons}
              className="mt-4"
            />
          )}
        />
        <Controller
          name="friends"
          control={control}
          render={({field: {value, onChange}}) => (
            <TextInput label="Друзья" value={value?.[0]} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="colleagues"
          control={control}
          render={({field: {value, onChange}}) => (
            <TextInput label="Коллеги" value={value?.[0]} onChange={onChange} className="mt-4"/>
          )}
        />
        <Controller
          name="familiar"
          control={control}
          render={({field: {value, onChange}}) => (
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