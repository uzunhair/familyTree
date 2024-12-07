import {useEffect, useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {GenderInput} from "src/pages/EditPerson/GenderInput";
import {editUserSchema} from "src/pages/EditPerson/lib/schema/editUser";
import {GENDER, getGenderById} from "src/shared/lib/helpers/getGender";
import {setPersonId} from "src/shared/lib/helpers/setPersonId";
import {User, Users} from "src/shared/ui/Icon";
import {Textarea} from "src/shared/ui/Textarea";
import {TextInput} from "src/shared/ui/TextInput";
import {TextInputSearch} from "src/shared/ui/TextInputSearch";
import {TInputItem} from "src/shared/ui/TextInputSearch/TextInputSearch";
import {TextInputSelect} from "src/shared/ui/TextInputSelect";
import {LayoutMain} from "src/widgets/template/LayoutMain";
import {GetAllPerson, GetPersonByID, UpdatePersonByID} from "../../../wailsjs/go/main/App";

type TInputs = {
  id: string;
  title: string;
  birthday: string;
  gender: TInputItem;
  father: TInputItem;
  mother: TInputItem;
  wife: TInputItem[];
  friends: TInputItem[];
  colleagues: TInputItem[];
  familiar: TInputItem[];
  comments: string;
}

type TInputsOut = {
  id: string;
  title: string;
  birthday: string;
  gender: string;
  father: string;
  mother: string;
  wife: string[];
  friends: string[];
  colleagues: string[];
  familiar: string[];
  comments: string;
}

type TInputsKeys = keyof TInputs;

function EditPerson() {
  const {id = "0"} = useParams();

  const {
    handleSubmit,
    control,
  } = useForm<TInputs>({
    defaultValues: async () => GetPersonByID(id)
      .then((item) => {
        return ({
          ...item, gender: getGenderById(item.gender)
        });
      }),
    resolver: yupResolver(editUserSchema),
  });

  const [apiPersons, setApiPersons] = useState<TInputItem[]>([]);

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    const newPersons: TInputsOut[] = [];

    const personObject = (value: TInputItem) => {
      if (!value) return {id: ""};

      if (value.id) {
        return value;
      }

      if (value.title && value.id !== "empty") {
        const item = {...value, id: setPersonId(value.title)};
        newPersons.push(item as TInputsOut);
        return item;
      }

      return {id: ""};
    };

    const personAddConst = Object.keys(data).reduce((acc, key) => {
      const typedKey = key as TInputsKeys;
      const value = data[typedKey];

      if (typeof value === "string" && value) {
        acc[typedKey] = value;
      } else if (Array.isArray(value)) {
        acc[typedKey] = value.map(item => personObject(item).id);
      } else if (typeof value === "object" && value !== null) {
        acc[typedKey] = personObject(value).id;
      }

      return acc;
    }, {} as Record<TInputsKeys, string | string[]>);

    const updatePerson = {
      ...personAddConst,
      id: data.id,
    } as TInputsOut;

    UpdatePersonByID(data.id, updatePerson, newPersons)
      // eslint-disable-next-line no-console
      .then((item) => console.log(
        "%c Update person %c " + item + " ",
        "background: #aa0000; color: #fff; border-radius: 3px 0px 0px 3px; padding: 1px; font-size: 0.7rem",
        "background: #009900; color: #fff; border-radius: 0px 3px 3px 0px; padding: 1px; font-size: 0.7rem"
      ))
      // eslint-disable-next-line no-console
      .catch((errors) => console.log("Errors: Update person", errors));
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
    <LayoutMain title="Редактировать">
      <div className="intro-y col-span-12 lg:col-span-6">
        <form onSubmit={handleSubmit(onSubmit)} className="intro-y box p-5">
          <Controller
            name="title"
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
          <div className="grid grid-cols-12 gap-6">
            <Controller
              name="birthday"
              control={control}
              render={({field: {value, onChange}}) => (
                <TextInput label="Дата рождения" value={value} onChange={onChange} className="mt-4 col-span-12 lg:col-span-6"/>
              )}
            />
            <GenderInput control={control} />
          </div>
          <Controller
            name="wife"
            control={control}
            render={({field: {value, onChange,}, fieldState: {error}}) => (
              <TextInputSelect
                label="Жена"
                value={value || []}
                onChange={onChange}
                error={error}
                data={apiPersons}
                className="mt-4"
                multiple
                icon={<Users />}
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
                inputValue={value?.title}
                onChange={onChange}
                error={error}
                data={apiPersons}
                className="mt-4"
                icon={<User />}
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
                inputValue={value?.title}
                onChange={onChange}
                error={error}
                data={apiPersons}
                icon={<User />}
                className="mt-4"
              />
            )}
          />
          <Controller
            name="friends"
            control={control}
            render={({field: {value, onChange,}, fieldState: {error}}) => (
              <TextInputSelect
                label="Друзья"
                value={value || []}
                onChange={onChange}
                error={error}
                data={apiPersons}
                className="mt-4"
                multiple
                icon={<Users />}
              />
            )}
          />
          <Controller
            name="colleagues"
            control={control}
            render={({field: {value, onChange,}, fieldState: {error}}) => (
              <TextInputSelect
                label="Коллеги"
                value={value || []}
                onChange={onChange}
                error={error}
                data={apiPersons}
                className="mt-4"
                multiple
                icon={<Users />}
              />
            )}
          />
          <Controller
            name="familiar"
            control={control}
            render={({field: {value, onChange,}, fieldState: {error}}) => (
              <TextInputSelect
                label="Знакомые"
                value={value || []}
                onChange={onChange}
                error={error}
                data={apiPersons}
                className="mt-4"
                multiple
                icon={<Users />}
              />
            )}
          />
          <Controller
            name="comments"
            control={control}
            render={({field: {value, onChange,}, fieldState: {error}}) => (
              <Textarea
                label="Комментарий"
                value={value}
                onChange={onChange}
                error={error}
                rows={5}
                className="mt-4"
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
        </form>
      </div>
    </LayoutMain>
  );
}

export default EditPerson;