import { Link } from "react-router-dom";
import { links } from "src/shared/lib/helpers/links";
import { SearchIcon } from "src/shared/ui/Icon";

export const Search = () => {
  return (
    <div className="intro-x relative mr-3 sm:mr-6">
      <div className="search hidden sm:block">
        <input
          type="text"
          placeholder="Поиск..."
          className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-200 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"
        />
        <SearchIcon className="w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600" />
      </div>
    </div>
  );
};
