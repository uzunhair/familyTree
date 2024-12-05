import {useState} from "react";
import {Breadcrumb} from "src/shared/ui/Breadcrumb";
import {AddPersonForm} from "./pages/AddPerson/AddPersonForm";
import {Greet} from "../wailsjs/go/main/App";

function App() {
  const [resultText, setResultText] = useState("Please enter your name below 👇");
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }
  return (
    <div id="App">
      <div
        className="icewall px-5 sm:px-8 py-5 relative after:content-[''] after:bg-gradient-to-b after:from-theme-1 after:to-theme-2 dark:after:from-darkmode-800 dark:after:to-darkmode-800 after:fixed after:inset-0 after:z-[-2]">
        {/* BEGIN: Mobile Menu */}
        <div
          className="mobile-menu group top-0 inset-x-0 fixed bg-theme-1/90 z-[60] border-b border-white/[0.08] dark:bg-darkmode-800/90 md:hidden before:content-[''] before:w-full before:h-screen before:z-10 before:fixed before:inset-x-0 before:bg-black/90 before:transition-opacity before:duration-200 before:ease-in-out before:invisible before:opacity-0 [&.mobile-menu--active]:before:visible [&.mobile-menu--active]:before:opacity-100">
          <div className="flex h-[70px] items-center px-3 sm:px-8">
            <a className="mr-auto text-lg text-white" href="#1">
                FamilyTree
            </a>
            <a className="mobile-menu-toggler" href="example.test">
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
                data-lucide="bar-chart2"
                className="lucide lucide-bar-chart2 stroke-1.5 h-8 w-8 -rotate-90 transform text-white"
              >
                <line x1={18} x2={18} y1={20} y2={10}/>
                <line x1={12} x2={12} y1={20} y2={4}/>
                <line x1={6} x2={6} y1={20} y2={14}/>
              </svg>
            </a>
          </div>
          <div
            className="scrollable h-screen z-20 top-0 left-0 w-[270px] -ml-[100%] bg-primary transition-all duration-300 ease-in-out dark:bg-darkmode-800 [&[data-simplebar]]:fixed [&_.simplebar-scrollbar]:before:bg-black/50 group-[.mobile-menu--active]:ml-0"
            data-simplebar="init"
          >
            <div className="simplebar-wrapper" style={{margin: 0}}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer"/>
              </div>
              <div className="simplebar-mask">
                <div className="simplebar-offset" style={{right: 0, bottom: 0}}>
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                    style={{height: "auto", overflow: "hidden"}}
                  >
                    <div className="simplebar-content" style={{padding: 0}}>
                      <a
                        href="example.test"
                        className="fixed top-0 right-0 mt-4 mr-4 transition-opacity duration-200 ease-in-out invisible opacity-0 group-[.mobile-menu--active]:visible group-[.mobile-menu--active]:opacity-100"
                      >
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
                          data-lucide="x-circle"
                          className="lucide lucide-x-circle stroke-1.5 mobile-menu-toggler h-8 w-8 -rotate-90 transform text-white"
                        >
                          <circle cx={12} cy={12} r={10}/>
                          <path d="m15 9-6 6"/>
                          <path d="m9 9 6 6"/>
                        </svg>
                      </a>
                      <ul className="py-2">
                        <li>
                          <a className="menu" href="icewall-side-menu-post-page.html">
                            <div className="menu__icon">
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
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1={16} x2={8} y1={13} y2={13}/>
                                <line x1={16} x2={8} y1={17} y2={17}/>
                                <line x1={10} x2={8} y1={9} y2={9}/>
                              </svg>
                            </div>
                            <div className="menu__title">Главная</div>
                          </a>
                        </li>
                        <li className="menu__divider my-6"/>
                        <li>
                          <a className="menu menu--active" href="#1">
                            <div className="menu__icon">
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
                                data-lucide="edit"
                                className="lucide lucide-edit stroke-1.5 w-5 h-5"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>
                              </svg>
                            </div>
                            <div className="menu__title">
                                Добавить человека
                              <div className="menu__sub-icon transform rotate-180">
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
                                  <path d="m6 9 6 6 6-6"/>
                                </svg>
                              </div>
                            </div>
                          </a>
                          <ul className="menu__sub-open">
                            <li>
                              <a
                                className="menu"
                                href="icewall-side-menu-crud-data-list-page.html"
                              >
                                <div className="menu__icon">
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
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                  </svg>
                                </div>
                                <div className="menu__title">Списко людей</div>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu menu--active"
                                href="icewall-side-menu-crud-form-page.html"
                              >
                                <div className="menu__icon">
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
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                  </svg>
                                </div>
                                <div className="menu__title">Биометрия</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{width: 0, height: 0}}
              />
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{visibility: "hidden"}}
            >
              <div
                className="simplebar-scrollbar"
                style={{width: 0, display: "none"}}
              />
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{visibility: "hidden"}}
            >
              <div
                className="simplebar-scrollbar"
                style={{height: 0, display: "none"}}
              />
            </div>
          </div>
        </div>
        {/* END: Mobile Menu */}
        {/* BEGIN: Top Bar */}
        <div
          className="top-bar-boxed relative z-[51] -mx-5 mb-12 mt-12 h-[70px] border-b border-white/[0.08] px-3 sm:-mx-8 sm:px-8 md:-mt-5 md:pt-0">
          <div className="flex h-full items-center">
            {/* BEGIN: Logo */}
            <a className="-intro-x hidden md:flex" href="example.test">
              <span className="ml-3 text-lg text-white">FamilyTree</span>
            </a>
            {/* END: Logo */}
            <Breadcrumb />
            {/* BEGIN: Search */}
            <div className="intro-x relative mr-3 sm:mr-6">
              <div className="search hidden sm:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-200 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"
                />
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
                  data-lucide="search"
                  className="lucide lucide-search stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500"
                >
                  <circle cx={11} cy={11} r={8}/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
              <a className="relative text-white/70 sm:hidden" href="">
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
                  data-lucide="search"
                  className="lucide lucide-search stroke-1.5 w-5 h-5 dark:text-slate-500"
                >
                  <circle cx={11} cy={11} r={8}/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </a>
              <div
                data-transition=""
                data-selector=".show"
                data-enter="transition-all ease-linear duration-150"
                data-enter-from="mt-5 invisible opacity-0 translate-y-1"
                data-enter-to="mt-[3px] visible opacity-100 translate-y-0"
                data-leave="transition-all ease-linear duration-150"
                data-leave-from="mt-[3px] visible opacity-100 translate-y-0"
                data-leave-to="mt-5 invisible opacity-0 translate-y-1"
                className="search-result absolute right-0 z-10 hidden invisible opacity-0 translate-y-1"
                data-state="leave"
                style={{display: "none"}}
              >
                <div className="box w-[450px] p-5">
                  <div className="mb-2 font-medium">Pages</div>
                  <div className="mb-5">
                    <a className="flex items-center" href="">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success dark:bg-success/10">
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
                          data-lucide="inbox"
                          className="lucide lucide-inbox stroke-1.5 h-4 w-4"
                        >
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
                          <path
                            d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                        </svg>
                      </div>
                      <div className="ml-3">Mail Settings</div>
                    </a>
                    <a className="mt-2 flex items-center" href="">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-pending/10 text-pending">
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
                          data-lucide="users"
                          className="lucide lucide-users stroke-1.5 h-4 w-4"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx={9} cy={7} r={4}/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                      </div>
                      <div className="ml-3">Users &amp; Permissions</div>
                    </a>
                    <a className="mt-2 flex items-center" href="">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary/80 dark:bg-primary/20">
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
                          data-lucide="credit-card"
                          className="lucide lucide-credit-card stroke-1.5 h-4 w-4"
                        >
                          <rect width={20} height={14} x={2} y={5} rx={2}/>
                          <line x1={2} x2={22} y1={10} y2={10}/>
                        </svg>
                      </div>
                      <div className="ml-3">Transactions Report</div>
                    </a>
                  </div>
                  <div className="mb-2 font-medium">Users</div>
                  <div className="mb-2 font-medium">Products</div>
                </div>
              </div>
            </div>
            {/* END: Search */}
            {/* BEGIN: Notifications */}
            <div
              data-tw-placement="bottom-end"
              className="dropdown relative intro-x mr-4 sm:mr-6"
            >
              <div
                data-tw-toggle="dropdown"
                aria-expanded="false"
                className="cursor-pointer relative block text-white/70 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"
              >
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
                  data-lucide="bell"
                  className="lucide lucide-bell stroke-1.5 w-5 h-5 dark:text-slate-500"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                </svg>
              </div>
              <div
                data-transition=""
                data-selector=".show"
                data-enter="transition-all ease-linear duration-150"
                data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                data-leave="transition-all ease-linear duration-150"
                data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1"
                data-state="leave"
                style={{display: "none"}}
              >
                <div
                  className="dropdown-content rounded-md border-transparent bg-white shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-2 w-[280px] p-5 sm:w-[350px]">
                  <div className="mb-5 font-medium">Notifications</div>
                </div>
              </div>
            </div>
            {/* END: Notifications */}
            {/* BEGIN: Account Menu */}
            <div data-tw-placement="bottom-end" className="dropdown relative">
              <button
                data-tw-toggle="dropdown"
                aria-expanded="false"
                className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 scale-110 overflow-hidden rounded-full shadow-lg"
              >
                  ---
              </button>
              <div
                data-transition=""
                data-selector=".show"
                data-enter="transition-all ease-linear duration-150"
                data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                data-leave="transition-all ease-linear duration-150"
                data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                className="dropdown-menu z-[9999] hidden absolute invisible opacity-0 translate-y-1"
                data-state="leave"
                id="_elm7yp1fw"
                style={{display: "none"}}
              >
                <div
                  className="dropdown-content rounded-md border-transparent p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 relative mt-px w-56 bg-theme-1/80 text-white before:absolute before:inset-0 before:z-[-1] before:block before:rounded-md before:bg-black">
                  <div className="p-2 font-medium font-normal">
                    <div className="font-medium">Tom Cruise</div>
                    <div className="mt-0.5 text-xs text-white/70 dark:text-slate-500">
                        Frontend Engineer
                    </div>
                  </div>
                  <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]"></div>
                  <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
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
                      data-lucide="user"
                      className="lucide lucide-user stroke-1.5 mr-2 h-4 w-4"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx={12} cy={7} r={4}/>
                    </svg>
                      Profile
                  </a>
                  <a
                    className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
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
                      data-lucide="edit"
                      className="lucide lucide-edit stroke-1.5 mr-2 h-4 w-4"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>
                    </svg>
                      Add Account
                  </a>
                  <a
                    className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
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
                      data-lucide="lock"
                      className="lucide lucide-lock stroke-1.5 mr-2 h-4 w-4"
                    >
                      <rect width={18} height={11} x={3} y={11} rx={2} ry={2}/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                      Reset Password
                  </a>
                  <a
                    className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
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
                      data-lucide="help-circle"
                      className="lucide lucide-help-circle stroke-1.5 mr-2 h-4 w-4"
                    >
                      <circle cx={12} cy={12} r={10}/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <path d="M12 17h.01"/>
                    </svg>
                      Help
                  </a>
                  <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]"></div>
                  <a
                    className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item hover:bg-white/5">
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
                      data-lucide="toggle-right"
                      className="lucide lucide-toggle-right stroke-1.5 mr-2 h-4 w-4"
                    >
                      <rect width={20} height={12} x={2} y={6} rx={6} ry={6}/>
                      <circle cx={16} cy={12} r={2}/>
                    </svg>
                      Logout
                  </a>
                </div>
              </div>
            </div>
            {/* END: Account Menu */}
          </div>
        </div>
        {/* END: Top Bar */}
        <div
          className="wrapper relative before:content-[''] before:z-[-1] before:translate-y-[35px] before:opacity-0 before:w-[95%] before:rounded-[1.3rem] before:bg-white/10 before:h-full before:-mt-4 before:absolute before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/50">
          <div
            className="wrapper-box bg-gradient-to-b from-theme-1 to-theme-2 flex rounded-[1.3rem] -mt-[7px] md:mt-0 dark:from-darkmode-400 dark:to-darkmode-400 translate-y-[35px] before:block before:absolute before:inset-0 before:bg-black/[0.15] before:rounded-[1.3rem] before:z-[-1]">
            {/* BEGIN: Side Menu */}
            <nav className="side-nav hidden w-[100px] overflow-x-hidden px-5 pb-16 pt-8 md:block xl:w-[250px]">
              <ul>
                <li>
                  <a href="icewall-side-menu-post-page.html" className="side-menu">
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
                        data-lucide="file-text"
                        className="lucide lucide-file-text stroke-1.5 w-5 h-5"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1={16} x2={8} y1={13} y2={13}/>
                        <line x1={16} x2={8} y1={17} y2={17}/>
                        <line x1={10} x2={8} y1={9} y2={9}/>
                      </svg>
                    </div>
                    <div className="side-menu__title">Главная</div>
                  </a>
                </li>
                <li className="side-nav__divider my-6"/>
                <li>
                  <a href="#1" className="side-menu side-menu--active">
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
                        data-lucide="edit"
                        className="lucide lucide-edit stroke-1.5 w-5 h-5"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>
                      </svg>
                    </div>
                    <div className="side-menu__title">
                        Добавить
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
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                  <ul className="side-menu__sub-open">
                    <li>
                      <a
                        href="icewall-side-menu-crud-data-list-page.html"
                        className="side-menu"
                      >
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
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                          </svg>
                        </div>
                        <div className="side-menu__title">Список</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="icewall-side-menu-crud-form-page.html"
                        className="side-menu side-menu--active"
                      >
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
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                          </svg>
                        </div>
                        <div className="side-menu__title">Связи</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* END: Side Menu */}
            {/* BEGIN: Content */}
            <div
              className="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[1.3rem] bg-slate-100 px-4 pb-10 shadow-sm before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]">
              <div className="intro-y mt-8 flex items-center">
                <h2 className="mr-auto text-lg font-medium">Добавить человека</h2>
              </div>
              <div className="mt-5 grid grid-cols-12 gap-6">
                <div className="intro-y col-span-12 lg:col-span-6">
                  <AddPersonForm />
                </div>
              </div>
            </div>
            {/* END: Content */}
          </div>
        </div>
      </div>


      <div id="result" className="result">{resultText}</div>

      <div id="input" className="input-box">
        <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
        <button className="btn" onClick={greet}>Greet</button>
      </div>
    </div>
  );
}

export default App;
