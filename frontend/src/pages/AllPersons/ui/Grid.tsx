import { Link } from "react-router-dom";
import { TPerson } from "src/pages/AllPersons/AllPersons";
import { links } from "src/shared/lib/helpers/links";
import { UserIcon } from "src/shared/ui/Icon";

interface Props {
  persons?: TPerson[];
}

export const PersonsGrid = ({ persons }: Props) => {
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
    <div className="mt-5 grid grid-cols-12 gap-6">
      {persons?.map((item) => {
        return (
          <div key={item.id} className="intro-y col-span-12 md:col-span-6 box">
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
        );
      })}
    </div>
  );
};
