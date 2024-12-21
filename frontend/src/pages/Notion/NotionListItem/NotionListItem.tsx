import { Link } from "react-router-dom";
import { links } from "src/shared/lib/helpers/links";

export type TNotionListItem = {
  id: number;
  title: string;
  created: string;
  content: string;
  item: {
    site_id: number;
    site_root_id: number;
    blueprint_uuid: string;
    content_group: string;
    slug: string;
    is_enabled: number;
    published_at: null;
    published_at_date: string;
    expired_at: null;
    draft_mode: number;
    primary_id: null;
    primary_attrs: null;
    is_version: number;
    published_at_day: number;
    published_at_month: number;
    published_at_year: number;
    content: string;
    author_id: number;
    featured_text: string;
    gallery_media: null;
    created_user_id: null;
    updated_user_id: null;
    deleted_user_id: null;
    deleted_at: null;
    created_at: string;
    updated_at: string;
    counter: number;
  };
};

export const NotionListItem = ({ title, id, created }: TNotionListItem) => {
  return (
    <div className="intro-y">
      <div className="transition duration-200 ease-in-out transform cursor-pointer inline-block sm:block border-b border-slate-200/60hover:relative hover:z-20 hover:shadow-md bg-white text-slate-800">
        <div className="flex px-5 py-3">
          <div className="mr-5">
            <Link className="ml-1 truncate" to={links.notionEdit(id)}>
              {id}
            </Link>
          </div>
          <div className="truncate flex-1">
            <Link className="ml-3 truncate block" to={links.notionEdit(id)}>
              {title}
            </Link>
          </div>
          <div className="pl-10 ml-auto whitespace-nowrap">{created}</div>
        </div>
      </div>
    </div>
  );
};
