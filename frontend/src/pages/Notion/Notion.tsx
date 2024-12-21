import { useEffect, useState } from "react";
import axios from "axios";
import { NotionFilter } from "src/pages/Notion/NotionFilter";
import { NotionItem } from "src/pages/Notion/NotionItem";
import { TNotionItem } from "src/pages/Notion/NotionItem/NotionItem";
import { NotionMenu } from "src/pages/Notion/NotionMenu";
import { HashIcon } from "src/shared/ui/Icon";
import { Layout } from "src/widgets/template/Layout";

export const Notion = () => {
  const [data, setData] = useState<TNotionItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://v05.ru/api/notion/collection");
        setData(response.data);
      } catch (error) {
        console.warn("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout.Main title="Заметки">
      <div className="mt-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
          <h2 className="intro-y mr-auto mt-2 text-lg font-medium">Заметки</h2>
          <NotionMenu />
        </div>
        <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
          <NotionFilter />
          <div className="intro-y box mt-5">
            <div className="flex flex-col-reverse border-b border-slate-200/60 p-5 text-slate-500 sm:flex-row">
              <div className="-mx-5 mt-3 flex items-center border-t border-slate-200/60 px-5 pt-5 sm:mx-0 sm:mt-0 sm:border-0 sm:px-0 sm:pt-0">
                <HashIcon />
                <div className="ml-5 pl-1 flex h-5 items-center justify-center">Заголовок</div>
              </div>
              <div className="flex items-center sm:ml-auto">
                {/*<div className="">1 - 50 of 5,238</div>*/}
                {/*<div className="ml-5 flex h-5 w-5 items-center justify-center">*/}
                {/*  <svg*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    width={24}*/}
                {/*    height={24}*/}
                {/*    viewBox="0 0 24 24"*/}
                {/*    fill="none"*/}
                {/*    stroke="currentColor"*/}
                {/*    strokeWidth={2}*/}
                {/*    strokeLinecap="round"*/}
                {/*    strokeLinejoin="round"*/}
                {/*    className="icon-chevron-left stroke-1.5 h-4 w-4"*/}
                {/*  >*/}
                {/*    <path d="m15 18-6-6 6-6" />*/}
                {/*  </svg>*/}
                {/*</div>*/}
                {/*<div className="ml-5 flex h-5 w-5 items-center justify-center">*/}
                {/*  <svg*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    width={24}*/}
                {/*    height={24}*/}
                {/*    viewBox="0 0 24 24"*/}
                {/*    fill="none"*/}
                {/*    stroke="currentColor"*/}
                {/*    strokeWidth={2}*/}
                {/*    strokeLinecap="round"*/}
                {/*    strokeLinejoin="round"*/}
                {/*    className="icon-chevron-right stroke-1.5 h-4 w-4"*/}
                {/*  >*/}
                {/*    <path d="m9 18 6-6-6-6" />*/}
                {/*  </svg>*/}
                {/*</div>*/}
                <div className="ml-5 flex h-5 w-5 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="calendar"
                    className="icon-calendar stroke-1.5 w-5 h-5 mx-auto block"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto sm:overflow-x-visible">
              {data.map((item) => (
                <NotionItem key={item.id} {...item} />
              ))}
            </div>
            <div className="flex flex-col items-center p-5 text-center text-slate-500 sm:flex-row sm:text-left">
              <div className="pl-1">Записей: {data.length}</div>
              {/*<div className="mt-2 sm:ml-auto sm:mt-0">Last account activity: 36 minutes ago</div>*/}
            </div>
          </div>
        </div>
      </div>
    </Layout.Main>
  );
};
