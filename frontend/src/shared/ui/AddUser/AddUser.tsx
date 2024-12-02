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
  wife: TPersonId[];
  father: TPersonId;
  mother: TPersonId;
  friends: TPersonId[];
  colleagues: TPersonId[];
  familiar: TPersonId[];
}

type TInputsOut = {
  id: string;
  fio: string;
  birthday: string;
  wife: string[];
  father: string;
  mother: string;
  friends: string[];
  colleagues: string[];
  familiar: string[];
}

const defaultValues = {
  id: "",
  fio: "",
  birthday: "",
  wife: [],
  father: {
    id: "",
    fio: ""
  },
  mother: {
    id: "",
    fio: ""
  },
  friends: [],
  colleagues: [],
  familiar: [],
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

  const [apiPersons, setApiPersons] = useState<TPersonId[]>([]);
  
  const onSubmit: SubmitHandler<TInputs> = (data) =>  {
    const isDuplicate = apiPersons.some(
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

    const personObject = (value: TPersonId) => {
      if (!value) return { id: "" };

      if (value.id) {
        return value;
      }

      if (value.fio) {
        const item = { ...value, id: setPersonId(value.fio) };
        newPersons.push(item);
        return item;
      }

      return { id: "" };
    };
    
    const personArray = (value: TPersonId[]) => {
      return value.map((item) => personObject(item).id);
    };

    const mainPerson: TInputsOut = {
      ...data,
      id: setPersonId(data.fio),
      wife: personArray(data.wife),
      father: personObject(data.father).id,
      mother: personObject(data.mother).id,
      friends: personArray(data.friends),
      colleagues: personArray(data.colleagues),
      familiar: personArray(data.familiar),
    };

    console.log("data", data);
    console.log("_mainPerson", mainPerson);
    console.log("_newPersons", newPersons);

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
        setApiPersons(item);
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
              data={apiPersons}
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
              data={apiPersons}
              className="mt-4"
              multiple
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
              data={apiPersons}
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
              data={apiPersons}
              className="mt-4"
            />
          )}
        />
        <Controller
          name="friends"
          control={control}
          render={({field: {value, onChange, }, fieldState: {error}}) => (
            <TextInputSelect
              label="Друзья"
              value={value}
              onChange={onChange}
              error={error}
              data={apiPersons}
              className="mt-4"
              multiple
            />
          )}
        />
        <Controller
          name="colleagues"
          control={control}
          render={({field: {value, onChange, }, fieldState: {error}}) => (
            <TextInputSelect
              label="Коллеги"
              value={value}
              onChange={onChange}
              error={error}
              data={apiPersons}
              className="mt-4"
              multiple
            />
          )}
        />
        <Controller
          name="familiar"
          control={control}
          render={({field: {value, onChange, }, fieldState: {error}}) => (
            <TextInputSelect
              label="Знакомые"
              value={value}
              onChange={onChange}
              error={error}
              data={apiPersons}
              className="mt-4"
              multiple
            />
          )}
        />
        <div className="mt-5 text-right">
          <button
            type="button"
            className="
              [&:hover:not(:disabled)]:bg-opacity-90
              [&:hover:not(:disabled)]:bg-secondary/20
              [&:hover:not(:disabled)]:border-opacity-90
              [&:not(button)]:text-center
              border
              border-secondary
              cursor-pointer
              disabled:cursor-not-allowed
              disabled:opacity-70
              duration-200
              focus-visible:outline-none
              focus:ring-4
              focus:ring-opacity-20
              focus:ring-primary
              font-medium
              inline-flex
              items-center
              justify-center
              mr-2
              px-5
              py-2
              rounded-md
              shadow-sm
              text-slate-500
              transition
              w-32"
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