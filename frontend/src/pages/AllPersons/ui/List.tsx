import { Link } from "react-router-dom";
import { TPerson } from "src/pages/AllPersons/AllPersons";
import { links } from "src/shared/lib/helpers/links";

interface Props {
  persons?: TPerson[];
}

export const List = ({ persons }: Props) => {
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

  console.log("_", persons);

  return (
    <div className="intro-y box mt-5 overflow-x-auto">
      <table className="w-full text-left">
        <thead className="">
          <tr className="">
            <th className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap">
              ФИО
            </th>
            <th className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap">
              Отец
            </th>
            <th className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap">
              Мать
            </th>
            <th className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap">
              Сибсы
            </th>
            <th className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap">
              День рождения
            </th>
            <th className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap">
              Комментарий
            </th>
            <th className="font-medium px-5 py-3 border-b-2 dark:border-darkmode-300 whitespace-nowrap">
              Действия
            </th>
          </tr>
        </thead>
        <tbody>
          {persons?.map((item) => {
            return (
              <tr key={item.id} className="[&:hover_td]:bg-slate-100">
                <td className="px-5 py-3 border-b dark:border-darkmode-300">
                  <Link to={links.editPerson(item.id)} className="font-medium">
                    {item.title}
                  </Link>
                </td>
                <td
                  className="px-5 py-3 border-b dark:border-darkmode-300"
                  title={item.father?.title}
                >
                  {item.father && <div className="ml-3 h-2 w-2 rounded-full bg-success"></div>}
                </td>
                <td
                  className="px-5 py-3 border-b dark:border-darkmode-300"
                  title={item.mother?.title}
                >
                  {item.mother && <div className="ml-3 h-2 w-2 rounded-full bg-success"></div>}
                </td>
                <td className="px-5 py-3 border-b dark:border-darkmode-300">
                  {item.siblings?.length}
                </td>
                <td className="px-5 py-3 border-b dark:border-darkmode-300">{item.birthday}</td>
                <td className="px-5 py-3 border-b dark:border-darkmode-300">{item.comments}</td>
                <td className="px-5 py-3 border-b dark:border-darkmode-300">
                  <Link to={links.editPerson(item.id)} className="flex items-center mr-3 edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="check-square"
                      className="lucide lucide-check-square w-4 h-4 mr-1"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Редактировать
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
