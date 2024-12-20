import { KeyboardEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "src/shared/lib/helpers/links";
import { SearchIcon, UserIcon, UsersIcon } from "src/shared/ui/Icon";
import { Search } from "src/shared/ui/Search";
import { Layout } from "src/widgets/template/Layout";
import { GetPersonList } from "../../../wailsjs/go/main/App";

type TPerson = {
  id: string;
  title: string;
  birthday: string;
  father: string;
  mother: string;
  spouse: string[];
  friends: string[];
  colleagues: string[];
  familiar: string[];
};

type SearchResult = {
  persons: TPerson[];
  count: number;
};

export const AllPersons = () => {
  const [apiPersons, setApiPersons] = useState<SearchResult>();
  const [search, setSearch] = useState("");

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputElement = event.target as HTMLInputElement;
      setSearch(inputElement.value);
    }
  };

  useEffect(() => {
    GetPersonList(search)
      .then((item) => {
        // eslint-disable-next-line no-console
        console.log("GetPersonList", item);
        setApiPersons(item);
      })
      // eslint-disable-next-line no-console
      .catch((errors) => console.log("Error: GetPersonList", errors));
  }, [search]);

  const progressCalc = (person: TPerson) => {
    const { spouse, father, mother, birthday } = person;
    const totalFields = 4;

    const count =
      Number(!!spouse && spouse.length > 0) +
      Number(!!father) +
      Number(!!mother) +
      Number(!!birthday);

    const percentage = (count / totalFields) * 100;

    return `${percentage}%`;
  };

  return (
    <Layout.Main title="Список">
      <Layout.Container title="Список">
        <div className="intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap">
          <Link
            to={links.addPerson}
            className="
            transition 
            duration-200 
            border 
            inline-flex 
            items-center 
            justify-center 
            py-2 
            px-3 
            rounded-md 
            font-medium 
            cursor-pointer 
            focus:ring-4 
            focus:ring-primary 
            focus:ring-opacity-20 
            focus-visible:outline-none 
            [&:hover:not(:disabled)]:bg-opacity-90 
            [&:hover:not(:disabled)]:border-opacity-90 
            [&:not(button)]:text-center 
            disabled:opacity-70 
            disabled:cursor-not-allowed 
            bg-primary 
            border-primary 
            text-white 
            mr-2 
            shadow-md"
          >
            Добавить человека
          </Link>
          <div className="mx-auto hidden text-slate-500 md:block">
            Показаны с 1 по {apiPersons?.count} из {apiPersons?.count} записей
          </div>
          <div className="mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0">
            <div className="relative w-56 text-slate-500">
              <input
                type="text"
                placeholder="Поиск..."
                onKeyDown={handleOnKeyDown}
                className="
                disabled:bg-slate-100
                disabled:cursor-not-allowed
                [&[readonly]]:bg-slate-100
                [&[readonly]]:cursor-not-allowed
                transition
                duration-200
                ease-in-out
                text-sm
                border-slate-200
                shadow-sm
                rounded-md
                placeholder:text-slate-400/90
                focus:ring-4
                focus:ring-primary
                focus:ring-opacity-20
                focus:border-primary
                focus:border-opacity-40
                group-[.form-inline]:flex-1
                group-[.input-group]:rounded-none
                group-[.input-group]:[&:not(:first-child)]:border-l-transparent
                group-[.input-group]:first:rounded-l
                group-[.input-group]:last:rounded-r
                group-[.input-group]:z-10
                !box
                w-56
                pr-10"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
        {apiPersons?.persons.map((item) => {
          return (
            <div key={item.id} className="intro-y col-span-12 md:col-span-6">
              <div className="box">
                <div className="flex flex-col items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400 lg:flex-row">
                  <div className="image-fit h-24 w-24 lg:mr-1 lg:h-12 lg:w-12 flex justify-center items-center">
                    <UserIcon />
                  </div>
                  <div className="mt-3 text-center lg:ml-2 lg:mr-auto lg:mt-0 lg:text-left">
                    <Link className="font-medium" to={links.editPerson(item.id)}>
                      {item.title}
                    </Link>
                    <div className="mt-0.5 text-xs text-slate-500">Дата рождения 27.07.1991</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap">
                  <div className="mb-4 mr-auto w-full lg:mb-0 lg:w-1/2">
                    <div className="flex text-xs text-slate-500">
                      <div className="mr-auto">Progress</div>
                      <div>{progressCalc(item)}</div>
                    </div>
                    <div className="w-full bg-slate-200 rounded mt-2 h-1">
                      <div
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="bg-primary h-full rounded text-xs text-white flex justify-center items-center w-1/4"
                        style={{ width: progressCalc(item) }}
                      ></div>
                    </div>
                  </div>
                  <Link
                    to={links.editPerson(item.id)}
                    className="
                    transition
                    duration-200
                    border
                    shadow-sm
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    font-medium
                    cursor-pointer
                    focus:ring-4
                    focus:ring-primary
                    focus:ring-opacity-20
                    focus-visible:outline-none
                    [&:hover:not(:disabled)]:bg-opacity-90
                    [&:hover:not(:disabled)]:border-opacity-90
                    [&:not(button)]:text-center
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    border-secondary
                    text-slate-500
                    [&:hover:not(:disabled)]:bg-secondary/20
                    px-2
                    py-1"
                  >
                    Открыть
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Layout.Container>
    </Layout.Main>
  );
};
