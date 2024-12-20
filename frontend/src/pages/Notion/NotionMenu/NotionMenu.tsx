export const NotionMenu = () => {
  return (
    <div className="intro-y box mt-6 bg-primary p-5">
      <button
        type="button"
        className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed mt-1 w-full bg-white text-slate-600 dark:border-darkmode-300 dark:bg-darkmode-300 dark:text-slate-300"
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
          data-lucide="edit"
          className="lucide lucide-edit stroke-1.5 mr-2 h-4 w-4"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
        </svg>
        Написать
      </button>
      <div className="mt-6 border-t border-white/10 pt-6 text-white dark:border-darkmode-400">
        <div className="flex items-center rounded-md bg-white/10 px-3 py-2 font-medium dark:bg-darkmode-700">
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
            data-lucide="mail"
            className="lucide lucide-mail stroke-1.5 mr-2 h-4 w-4"
          >
            <rect width={20} height={16} x={2} y={4} rx={2} />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Inbox
        </div>
        <div className="mt-2 flex items-center rounded-md px-3 py-2">
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
            data-lucide="star"
            className="lucide lucide-star stroke-1.5 mr-2 h-4 w-4"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Marked
        </div>
        <div className="mt-2 flex items-center rounded-md px-3 py-2">
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
            className="lucide lucide-inbox stroke-1.5 mr-2 h-4 w-4"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          </svg>
          Draft
        </div>
        <div className="mt-2 flex items-center rounded-md px-3 py-2">
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
            data-lucide="send"
            className="lucide lucide-send stroke-1.5 mr-2 h-4 w-4"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
          Sent
        </div>
        <div className="mt-2 flex items-center rounded-md px-3 py-2">
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
            data-lucide="trash"
            className="lucide lucide-trash stroke-1.5 mr-2 h-4 w-4"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
          Trash
        </div>
      </div>
      <div className="mt-4 border-t border-white/10 pt-4 text-white dark:border-darkmode-400">
        <div className="flex items-center truncate px-3 py-2">
          <div className="mr-3 h-2 w-2 rounded-full bg-pending" />
          Custom Work
        </div>
        <div className="mt-2 flex items-center truncate rounded-md px-3 py-2">
          <div className="mr-3 h-2 w-2 rounded-full bg-success" />
          Important Meetings
        </div>
        <div className="mt-2 flex items-center truncate rounded-md px-3 py-2">
          <div className="mr-3 h-2 w-2 rounded-full bg-warning" />
          Work
        </div>
        <div className="mt-2 flex items-center truncate rounded-md px-3 py-2">
          <div className="mr-3 h-2 w-2 rounded-full bg-pending" />
          Design
        </div>
        <div className="mt-2 flex items-center truncate rounded-md px-3 py-2">
          <div className="mr-3 h-2 w-2 rounded-full bg-danger" />
          Next Week
        </div>
        <div className="mt-2 flex items-center truncate rounded-md px-3 py-2">
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
            data-lucide="plus"
            className="lucide lucide-plus stroke-1.5 mr-2 h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add New Label
        </div>
      </div>
    </div>
  );
};
