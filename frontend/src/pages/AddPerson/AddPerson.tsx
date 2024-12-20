import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addUserSchema } from "src/pages/AddPerson/AddPersonForm/lib/schema/addUser";
import { GenderInput } from "src/pages/EditPerson/GenderInput";
import { getIds } from "src/pages/EditPerson/lib/helper/getIds";
import { mergedPersons, TMergedPersons } from "src/pages/EditPerson/lib/helper/mergedPersons";
import { getGenderById } from "src/shared/lib/helpers/getGender";
import { setPersonId } from "src/shared/lib/helpers/setPersonId";
import { User, Users } from "src/shared/ui/Icon";
import { Textarea } from "src/shared/ui/Textarea";
import { TextInput } from "src/shared/ui/TextInput";
import { TextInputSearch } from "src/shared/ui/TextInputSearch";
import { TInputItem } from "src/shared/ui/TextInputSearch/TextInputSearch";
import { TextInputSelect } from "src/shared/ui/TextInputSelect";
import { Layout } from "src/widgets/template/Layout";
import { GetAllPerson, UpdatePersonByID } from "../../../wailsjs/go/main/App";

type TInputs = {
  birthday: string;
  children: TInputItem[];
  colleagues: TInputItem[];
  comments: string;
  familiar: TInputItem[];
  father: TInputItem;
  friends: TInputItem[];
  gender: TInputItem;
  id: string;
  mother: TInputItem;
  title: string;
  spouse: TInputItem[];
};

const defaultValues: TInputs = {
  birthday: "",
  colleagues: [],
  comments: "",
  children: [],
  familiar: [],
  father: { id: "", title: "" },
  friends: [],
  gender: getGenderById("empty"),
  id: "",
  mother: { id: "", title: "" },
  title: "",
  spouse: [],
};

function AddPerson() {
  const [apiPersons, setApiPersons] = useState<TInputItem[]>([]);
  const navigate = useNavigate();
  const { handleSubmit, control, setError, reset, formState } = useForm<TInputs>({
    defaultValues,
    resolver: yupResolver(addUserSchema),
  });

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    const isDuplicate = apiPersons.some(
      (item) => item.title.toLowerCase().trim() === data.title.toLowerCase().trim()
    );

    if (isDuplicate) {
      setError("title", {
        type: "manual",
        message: "Поле дублируется, введите другое значение",
      });
      return;
    }

    const {
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
    const id = setPersonId(title);
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

    UpdatePersonByID(mainPerson, mergedPersonsResult, "add")
      .then((item) => {
        reset(data);
        navigate(`edit-person/${id}`);
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
    <Layout.Main title="Добавить человека">
      <Layout.Container title="Добавить человека">
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
                  <TextInput
                    label="Дата рождения"
                    value={value}
                    onChange={onChange}
                    className="mt-4 col-span-12 lg:col-span-6"
                  />
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
                  icon={<Users />}
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
                  icon={<User />}
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
                  icon={<User />}
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
                  icon={<Users />}
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
                  icon={<Users />}
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
                  icon={<Users />}
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

export default AddPerson;
