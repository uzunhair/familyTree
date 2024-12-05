export const Notifications = () => {
  return (
    <div
      data-tw-placement="bottom-end"
      className="dropdown relative intro-x"
    >
      <div
        data-tw-toggle="dropdown"
        aria-expanded="false"
        title="Уведомления"
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
          <div className="mb-5 font-medium">Уведомления</div>
        </div>
      </div>
    </div>
  );
};