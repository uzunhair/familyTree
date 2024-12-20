import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { GenderInput } from "src/pages/EditPerson/GenderInput";
import { getIds } from "src/pages/EditPerson/lib/helper/getIds";
import {
  mergedPersons,
  TInputMultiple,
  TMergedPersons,
} from "src/pages/EditPerson/lib/helper/mergedPersons";
import { editUserSchema } from "src/pages/EditPerson/lib/schema/editUser";
import { getGenderById } from "src/shared/lib/helpers/getGender";
import { DateField } from "src/shared/ui/DateField";
import { UserIcon, UsersIcon } from "src/shared/ui/Icon";
import { Textarea } from "src/shared/ui/Textarea";
import { TextInputSearch } from "src/shared/ui/TextInputSearch";
import { TInputItem } from "src/shared/ui/TextInputSearch/TextInputSearch";
import { TextInputSelect } from "src/shared/ui/TextInputSelect";
import { Layout } from "src/widgets/template/Layout";
import { GetAllPerson, GetPersonByID, UpdatePersonByID } from "../../../wailsjs/go/main/App";

export type TInputs = TInputMultiple & {
  id: string;
  title: string;
  birthday: string;
  gender: TInputItem;
  father: TInputItem;
  mother: TInputItem;
  comments: string;
};

function EditPerson() {
  const { id = "0" } = useParams();
  const [apiPersons, setApiPersons] = useState<TInputItem[]>([]);

  const { handleSubmit, control, reset, formState } = useForm<TInputs>({
    defaultValues: async () =>
      GetPersonByID(id).then((item) => ({
        ...item,
        gender: getGenderById(item.gender),
        children: [],
      })),
    resolver: yupResolver(editUserSchema),
  });

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    const {
      id,
      title,
      birthday,
      gender,
      comments,
      father,
      mother,
      spouse,
      friends,
      colleagues,
      familiar,
    } = data;
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

    const mergedPersonsResult = mergedPersons({
      data,
      defaultValues: formState.defaultValues,
    } as TMergedPersons);

    UpdatePersonByID(mainPerson, mergedPersonsResult, "update")
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
    <Layout.Main title="Редактировать">
      <Layout.Container title="Редактировать">
        <div className="intro-y col-span-12 lg:col-span-6">
          <form onSubmit={handleSubmit(onSubmit)} className="intro-y box p-5">
            <Controller
              name="title"
              control={control}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
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
                render={({ field: { value, onChange } }) => (
                  <div className="mt-4 col-span-12 lg:col-span-6">
                    <DateField label="Дата рождения" value={value} onChange={onChange} />
                  </div>
                )}
              />
              <GenderInput control={control} />
            </div>
            <Controller
              name="spouse"
              control={control}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextInputSelect
                  label="Муж/Жена"
                  value={value || []}
                  onChange={onChange}
                  error={error}
                  data={apiPersons}
                  className="mt-4"
                  multiple
                  icon={<UsersIcon />}
                />
              )}
            />
            <Controller
              name="father"
              control={control}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextInputSelect
                  label="Отец"
                  value={value}
                  inputValue={value?.title}
                  onChange={onChange}
                  error={error}
                  data={apiPersons}
                  className="mt-4"
                  icon={<UserIcon />}
                />
              )}
            />
            <Controller
              name="mother"
              control={control}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextInputSelect
                  label="Мать"
                  value={value}
                  inputValue={value?.title}
                  onChange={onChange}
                  error={error}
                  data={apiPersons}
                  icon={<UserIcon />}
                  className="mt-4"
                />
              )}
            />
            <Controller
              name="children"
              control={control}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
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
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextInputSelect
                  label="Друзья"
                  value={value || []}
                  onChange={onChange}
                  error={error}
                  data={apiPersons}
                  className="mt-4"
                  multiple
                  icon={<UsersIcon />}
                />
              )}
            />
            <Controller
              name="colleagues"
              control={control}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextInputSelect
                  label="Коллеги"
                  value={value || []}
                  onChange={onChange}
                  error={error}
                  data={apiPersons}
                  className="mt-4"
                  multiple
                  icon={<UsersIcon />}
                />
              )}
            />
            <Controller
              name="familiar"
              control={control}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextInputSelect
                  label="Знакомые"
                  value={value || []}
                  onChange={onChange}
                  error={error}
                  data={apiPersons}
                  className="mt-4"
                  multiple
                  icon={<UsersIcon />}
                />
              )}
            />
            <Controller
              name="comments"
              control={control}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
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
      </Layout.Container>
    </Layout.Main>
  );
}

export default EditPerson;
