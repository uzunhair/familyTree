import { Link } from "react-router-dom";
import { links } from "src/shared/lib/helpers/links";

type TProps = {
  title?: string;
};

export const Breadcrumb = ({ title }: TProps) => {
  return (
    <nav
      aria-label="breadcrumb"
      className="flex -intro-x mr-auto h-full border-white/[0.08] md:ml-10 md:border-l md:pl-10"
    >
      <ol className="flex items-center text-theme-1 dark:text-slate-300 text-white/90">
        <li>
          <Link to={links.home}>Главная</Link>
        </li>
        <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-white/70">
          <Link to={links.home}>{title}</Link>
        </li>
      </ol>
    </nav>
  );
};
