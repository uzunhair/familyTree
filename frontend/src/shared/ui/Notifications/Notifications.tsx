import { BellIcon } from "src/shared/ui/Icon";

export const Notifications = () => {
  return (
    <div data-tw-placement="bottom-end" className="dropdown relative intro-x">
      <div
        data-tw-toggle="dropdown"
        aria-expanded="false"
        title="Уведомления"
        className="cursor-pointer relative block text-white/70 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"
      >
        <BellIcon />
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
        style={{ display: "none" }}
      >
        <div className="dropdown-content rounded-md border-transparent bg-white shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-2 w-[280px] p-5 sm:w-[350px]">
          <div className="mb-5 font-medium">Уведомления</div>
        </div>
      </div>
    </div>
  );
};
