import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { links } from "src/shared/lib/helpers/links";
import { Breadcrumb } from "src/shared/ui/Breadcrumb";
import { BarChart2Icon, BarChartIcon } from "src/shared/ui/Icon";
import { Notifications } from "src/shared/ui/Notifications";
import { Search } from "src/shared/ui/Search";
import { SideNav } from "src/shared/ui/SideNav/SideNav";

type TProps = {
  children: ReactNode;
  title?: string;
};

export const LayoutMain = ({ children, title }: TProps) => {
  return (
    <div
      className="
      icewall
      px-5
      sm:px-8
      py-5
      relative
      after:content-['']
      after:bg-gradient-to-b
      after:from-theme-1
      after:to-theme-2
      after:fixed
      after:inset-0
      after:z-[-2]
    "
    >
      <div
        className="
          mobile-menu
          group
          top-0
          inset-x-0
          fixed
          bg-theme-1/90
          z-[60]
          border-b
          border-white/[0.08]
          md:hidden
          before:content-['']
          before:w-full
          before:h-screen
          before:z-10
          before:fixed
          before:inset-x-0
          before:bg-black/90
          before:transition-opacity
          before:duration-200
          before:ease-in-out
          before:invisible
          before:opacity-0
          [&.mobile-menu--active]:before:visible
          [&.mobile-menu--active]:before:opacity-100
      "
      >
        <div className="flex h-[70px] items-center px-3 sm:px-8">
          <Link className="mr-auto text-lg text-white" to={links.home}>
            FamilyTree
          </Link>
          <div className="mobile-menu-toggler">
            <BarChart2Icon />
          </div>
        </div>
      </div>
      <div className="top-bar-boxed relative z-[51] -mx-5 mb-12 mt-12 h-[70px] border-b border-white/[0.08] px-3 sm:-mx-8 sm:px-8 md:-mt-5 md:pt-0">
        <div className="flex h-full items-center">
          <Link className="-intro-x hidden md:flex" to={links.home}>
            <span className="ml-3 text-lg text-white">FamilyTree</span>
          </Link>
          <Breadcrumb title={title} />
          <Search />
          <Notifications />
        </div>
      </div>
      <div className="wrapper relative before:content-[''] before:z-[-1] before:translate-y-[35px] before:opacity-0 before:w-[95%] before:rounded-[1.3rem] before:bg-white/10 before:h-full before:-mt-4 before:absolute before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/50">
        <div className="wrapper-box bg-gradient-to-b from-theme-1 to-theme-2 flex rounded-[1.3rem] -mt-[7px] md:mt-0 dark:from-darkmode-400 dark:to-darkmode-400 translate-y-[35px] before:block before:absolute before:inset-0 before:bg-black/[0.15] before:rounded-[1.3rem] before:z-[-1]">
          <SideNav />
          <div className="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[1.3rem] bg-slate-100 px-4 pb-10 shadow-sm before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
