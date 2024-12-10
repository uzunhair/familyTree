import {useEffect, useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {GenderInput} from "src/pages/EditPerson/GenderInput";
import {getIds} from "src/pages/EditPerson/lib/helper/getIds";
import {editUserSchema} from "src/pages/EditPerson/lib/schema/editUser";
import {getGenderById} from "src/shared/lib/helpers/getGender";
import {User, Users} from "src/shared/ui/Icon";
import {Textarea} from "src/shared/ui/Textarea";
import {TextInput} from "src/shared/ui/TextInput";
import {TextInputSearch} from "src/shared/ui/TextInputSearch";
import {TInputItem} from "src/shared/ui/TextInputSearch/TextInputSearch";
import {TextInputSelect} from "src/shared/ui/TextInputSelect";
import {LayoutMain} from "src/widgets/template/LayoutMain";
import {GetAllPerson, GetPersonByID, UpdatePersonByID} from "../../../wailsjs/go/main/App";

type TInputMultiple = {
  spouse: TInputItem[];
  friends: TInputItem[];
  colleagues: TInputItem[];
  familiar: TInputItem[];
  children: TInputItem[];
}

type TInputs = TInputMultiple & {
  id: string;
  title: string;
  birthday: string;
  gender: TInputItem;
  father: TInputItem;
  mother: TInputItem;
  comments: string;
}

type TUpdate = {
  id: string;
  title: string;
  spouse?: string;
  father?: string;
  mother?: string;
  friends?: string;
  colleagues?: string;
  familiar?: string;
  birthday?: string,
  gender?: string,
  comments?: string,
}

function EditPerson() {
  const {id = "0"} = useParams();

  const {
    handleSubmit,
    control,
    reset,
    formState,
  } = useForm<TInputs>({
    defaultValues: async () => GetPersonByID(id)
      .then((item) => ({
        ...item,
        gender: getGenderById(item.gender),
        children: []
      }
      )),
    resolver: yupResolver(editUserSchema),
  });

  const [apiPersons, setApiPersons] = useState<TInputItem[]>([]);

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    const {id, title, birthday, gender, comments, father, mother, spouse, friends, colleagues, familiar, children} = data;

    const mainPerson = {
      id: id,
      title: title,
      birthday: birthday,
      gender: gender.id,
      father: father.id,
      mother: mother.id,
      spouse: getIds(spouse),
      friends: getIds(friends),
      colleagues: getIds(colleagues),
      familiar: getIds(familiar),
      comments: comments,
    };

    const relatedUsers: TUpdate[] = [];

    // Добавляем всех из массивов spouse, friends, colleagues, familiar
    const addRelatedUsers = (users: TInputItem[], key: keyof TInputMultiple) => {
      const firstArray: TInputItem[] = (formState.defaultValues?.[key] || []).filter((item): item is TInputItem => item !== undefined);
      const secondArray= users || [];
      
      const toDelete: TUpdate[] = firstArray.filter((item1: TInputItem) =>
        !secondArray.some(item2 => item2.id === item1.id)
      ).map((item: TInputItem) => ({ ...item, [key]: "delete" }));
      
      const toAdd: TUpdate[] = secondArray.filter((item2: TInputItem) =>
        !firstArray.some((item1: TInputItem) => item1.id === item2.id)
      ).map(item => ({ ...item, [key]: "add" }));
      
      const result = [...toDelete, ...toAdd];
      
      result.forEach(user => {
        relatedUsers.push(user);
      });
    };

    addRelatedUsers(spouse, "spouse");
    addRelatedUsers(friends, "friends");
    addRelatedUsers(colleagues, "colleagues");
    addRelatedUsers(familiar, "familiar");

    if(children) {
      const parent = gender.id === "male" ? "father" : "mother";
      children.forEach(user => {
        relatedUsers.push({ ...user, [parent]: "add" });
      });
    }
    
    const mergedPersons = relatedUsers.reduce((acc: TUpdate[], person) => {
      const existingPerson = acc.find(p => p.id === person.id);
      if (existingPerson) {
        Object.assign(existingPerson, person);
      } else {
        acc.push({ ...person });
      }
      return acc;
    }, []);
    
    UpdatePersonByID(mainPerson, mergedPersons)
      .then((item) => {
        reset(data);
        // eslint-disable-next-line no-console
        console.log(
          "%c Update person %c " + item + " ",
          "background: #aa0000; color: #fff; border-radius: 3px 0px 0px 3px; padding: 1px; font-size: 0.7rem",
          "background: #009900; color: #fff; border-radius: 0px 3px 3px 0px; padding: 1px; font-size: 0.7rem"
        );
      })
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
            name="spouse"
            control={control}
            render={({field: {value, onChange,}, fieldState: {error}}) => (
              <TextInputSelect
                label="Муж/Жена"
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
            name="children"
            control={control}
            render={({field: {value, onChange,}, fieldState: {error}}) => (
              <TextInputSelect
                label="Дети"
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