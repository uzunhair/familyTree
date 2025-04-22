import { KeyboardEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PersonsGrid } from "src/pages/AllPersons/ui/Grid";
import { List } from "src/pages/AllPersons/ui/List";
import { links } from "src/shared/lib/helpers/links";
import { SearchIcon } from "src/shared/ui/Icon";
import { Layout } from "src/widgets/template/Layout";
import { GetPersonList } from "../../../wailsjs/go/main/App";

interface NameID {
  id: string;
  title: string;
}

export type TPerson = {
  id: string;
  title: string;
  birthday: string;
  father?: NameID;
  mother?: NameID;
  spouse: string[];
  friends: string[];
  colleagues: string[];
  familiar: string[];
  comments: string;
};

type SearchResult = {
  persons: TPerson[];
  count: number;
};

export const AllPersons = () => {
  const [apiPersons, setApiPersons] = useState<SearchResult>();
  const [search, setSearch] = useState("");
  const [listView, setListView] = useState(true);

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
      </Layout.Container>
      {listView ? (
        <List persons={apiPersons?.persons} />
      ) : (
        <PersonsGrid persons={apiPersons?.persons} />
      )}
    </Layout.Main>
  );
};
