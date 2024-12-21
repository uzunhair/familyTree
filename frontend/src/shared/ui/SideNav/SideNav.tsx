import { Link } from "react-router-dom";
import { links } from "src/shared/lib/helpers/links";
import {
  ActivityIcon,
  BookIcon,
  ChevronDownIcon,
  FileTextIcon,
  SettingsIcon,
  UserCheckIcon,
  UserPlusIcon,
  UsersIcon,
} from "src/shared/ui/Icon";

const navData = [
  {
    link: links.home,
    text: "Главная",
    icon: <FileTextIcon />,
  },
  {
    link: links.home,
    text: "Добавить",
    icon: <UserPlusIcon />,
  },
  {
    link: links.editPerson("zet"),
    text: "Изменить",
    icon: <UserCheckIcon />,
  },
  {
    link: links.allPersons,
    text: "Список",
    icon: <UsersIcon />,
  },
  {
    link: links.notion,
    text: "Заметки",
    icon: <BookIcon />,
  },
];

export const SideNav = () => {
  return (
    <nav className="side-nav hidden w-[100px] overflow-x-hidden px-5 pb-16 pt-8 md:block xl:w-[260px]">
      <ul>
        {navData.map(({ link, text, icon }, index) => {
          return (
            <li key={index}>
              <Link to={link} className="side-menu">
                <div className="side-menu__icon">{icon}</div>
                <div className="side-menu__title">{text}</div>
              </Link>
            </li>
          );
        })}
        <li className="side-nav__divider my-6" style={{ display: "none" }} />
        <li style={{ display: "none" }}>
          <Link to={links.home} className="side-menu side-menu--active">
            <div className="side-menu__icon">
              <SettingsIcon />
            </div>
            <div className="side-menu__title">
              Настройки
              <div className="side-menu__sub-icon transform rotate-180">
                <ChevronDownIcon />
              </div>
            </div>
          </Link>
          <ul className="side-menu__sub-open">
            <li>
              <Link to={links.home} className="side-menu">
                <div className="side-menu__icon">
                  <ActivityIcon />
                </div>
                <div className="side-menu__title">Список</div>
              </Link>
            </li>
            <li>
              <Link to={links.home} className="side-menu side-menu--active">
                <div className="side-menu__icon">
                  <ActivityIcon />
                </div>
                <div className="side-menu__title">О программе</div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
