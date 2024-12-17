import { Link } from "react-router-dom";
import { links } from "src/shared/lib/helpers/links";

const navData = [
  {
    link: links.home,
    text: "Главная",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        data-lucide="file-text"
        className="lucide lucide-file-text stroke-1.5 w-5 h-5"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1={16} x2={8} y1={13} y2={13} />
        <line x1={16} x2={8} y1={17} y2={17} />
        <line x1={10} x2={8} y1={9} y2={9} />
      </svg>
    ),
  },
  {
    link: links.home,
    text: "Добавить",
    icon: (
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
        data-lucide="user-plus"
        className="lucide lucide-user-plus stroke-1.5 w-5 h-5 mx-auto block"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <line x1="19" x2="19" y1="8" y2="14"></line>
        <line x1="22" x2="16" y1="11" y2="11"></line>
      </svg>
    ),
  },
  {
    link: links.editPerson("zet"),
    text: "Изменить",
    icon: (
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
        data-lucide="user-check"
        className="lucide lucide-user-check stroke-1.5 w-5 h-5 mx-auto block"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <polyline points="16 11 18 13 22 9"></polyline>
      </svg>
    ),
  },
  {
    link: links.allPersons,
    text: "Список",
    icon: (
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
        data-lucide="users"
        className="lucide lucide-users stroke-1.5 w-5 h-5 mx-auto block"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
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
                data-lucide="settings"
                className="lucide lucide-settings stroke-1.5 w-5 h-5 mx-auto block"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div className="side-menu__title">
              Настройки
              <div className="side-menu__sub-icon transform rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="chevron-down"
                  className="lucide lucide-chevron-down stroke-1.5 w-5 h-5"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </Link>
          <ul className="side-menu__sub-open">
            <li>
              <Link to={links.home} className="side-menu">
                <div className="side-menu__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="activity"
                    className="lucide lucide-activity stroke-1.5 w-5 h-5"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="side-menu__title">Список</div>
              </Link>
            </li>
            <li>
              <Link to={links.home} className="side-menu side-menu--active">
                <div className="side-menu__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="activity"
                    className="lucide lucide-activity stroke-1.5 w-5 h-5"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
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
