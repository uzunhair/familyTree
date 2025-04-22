import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TNotionListItem } from "src/pages/Notion/NotionListItem";
import { AlignLeftIcon, EyeIcon } from "src/shared/ui/Icon";
import { Tiptap } from "src/shared/ui/Tiptap/Tiptap";
import { Layout } from "src/widgets/template/Layout";

const NOTION_TOKEN: string = import.meta.env.VITE_NOTION_TOKEN;

export const NotionEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState<TNotionListItem>();
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // @ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      id: id,
      title,
      content: editorContent,
    };

    try {
      const response = await axios.post("https://api.v05.ru/api/notion/section/post", data, {
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
        },
      });
      console.info(response);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.v05.ru/api/notion/section/${id}`);
          setData(response.data);
          setTitle(response.data.title);
          setEditorContent(response.data.content);
        } catch (error) {
          console.warn("Error", error);
        }
      };

      fetchData();
    }
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <Layout.Main title="Редактировать заметки">
      <>
        <div className="intro-y mt-8 flex flex-col items-center sm:flex-row">
          <h2 className="mr-auto text-lg font-medium">Редактировать заметки</h2>
          <div className="mt-4 flex w-full sm:mt-0 sm:w-auto">
            <button
              type="button"
              className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box ml-auto mr-2 flex sm:ml-0"
            >
              <EyeIcon />
              Открыть на сайте
            </button>
          </div>
        </div>
        <div className="intro-y mt-5 grid grid-cols-12 gap-5 z-index-50">
          <div className="intro-y col-span-12 lg:col-span-8">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitle}
              className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 intro-y !box px-4 py-3 pr-10"
            />
            <div className="intro-y box mt-5 overflow-hidden">
              <ul className="border-b w-full flex flex-col border-transparent bg-slate-200 dark:border-transparent dark:bg-darkmode-800 sm:flex-row">
                <li
                  id="keywords-tab"
                  role="presentation"
                  className="focus-visible:outline-none -mb-px"
                >
                  <button
                    data-tw-target="#keywords"
                    role="tab"
                    className="
                      cursor-pointer
                      appearance-none
                      border
                      border-transparent
                      dark:text-slate-400
                      [&.active]:dark:text-white
                      rounded-t-md
                      dark:border-transparent
                      [&.active]:bg-white
                      [&.active]:font-medium
                      [&.active]:dark:border-b-darkmode-600
                      [&:not(.active)]:dark:hover:border-transparent
                      flex
                      items-center
                      justify-center
                      w-full
                      px-5
                      py-0
                      text-slate-500
                      [&:not(.active)]:hover:border-transparent
                      [&:not(.active)]:hover:bg-transparent
                      [&:not(.active)]:hover:text-slate-600
                      [&:not(.active)]:hover:dark:bg-transparent
                      [&:not(.active)]:hover:dark:text-slate-300
                      [&.active]:text-primary
                      [&.active]:border-transparent
                      [&.active]:dark:bg-darkmode-600
                      [&.active]:dark:border-x-transparent
                      [&.active]:dark:border-t-transparent
                      active"
                    aria-selected="true"
                  >
                    <span
                      data-placement="top"
                      aria-selected="false"
                      className="tooltip cursor-pointer flex w-full items-center justify-center py-4"
                    >
                      <AlignLeftIcon className="mr-2 h-5 w-5" />
                      Контент
                    </span>
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane p-5 visible opacity-100 active">
                  <Tiptap content={editorContent} onUpdate={setEditorContent} />
                  <div className="mt-5 text-right">
                    <button
                      onClick={handleSubmit}
                      className="
                        transition
                        duration-200
                        border
                        py-2
                        px-3
                        rounded-md
                        font-medium
                        cursor-pointer
                        focus:ring-4
                        focus:ring-primary
                        focus:ring-opacity-20
                        focus-visible:outline-none
                        dark:focus:ring-slate-700
                        dark:focus:ring-opacity-50
                        [&:hover:not(:disabled)]:bg-opacity-90
                        [&:hover:not(:disabled)]:border-opacity-90
                        [&:not(button)]:text-center
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                        bg-primary
                        border-primary
                        text-white
                        dark:border-primary
                        shadow-md"
                    >
                      Сохранить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="intro-y box p-5">текст текст</div>
          </div>
        </div>
      </>
    </Layout.Main>
  );
};
