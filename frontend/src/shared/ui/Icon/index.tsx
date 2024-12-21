import classNames from "classnames";

type TProps = {
  className?: string;
};

export const ActivityIcon = ({ className }: TProps) => (
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
    data-lucide="activity"
    className={classNames("icon-activity stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

export const AirplayIcon = ({ className }: TProps) => (
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
    data-lucide="airplay"
    className={classNames("icon-airplay stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
    <polygon points="12 15 17 21 7 21 12 15"></polygon>
  </svg>
);

export const AlertCircleIcon = ({ className }: TProps) => (
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
    data-lucide="alert-circle"
    className={classNames("icon-alert-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" x2="12" y1="8" y2="12"></line>
    <line x1="12" x2="12.01" y1="16" y2="16"></line>
  </svg>
);

export const AlertOctagonIcon = ({ className }: TProps) => (
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
    data-lucide="alert-octagon"
    className={classNames("icon-alert-octagon stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
    <line x1="12" x2="12" y1="8" y2="12"></line>
    <line x1="12" x2="12.01" y1="16" y2="16"></line>
  </svg>
);

export const AlertTriangleIcon = ({ className }: TProps) => (
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
    data-lucide="alert-triangle"
    className={classNames("icon-alert-triangle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <path d="M12 9v4"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

export const AlignCenterIcon = ({ className }: TProps) => (
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
    data-lucide="align-center"
    className={classNames("icon-align-center stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="21" x2="3" y1="6" y2="6"></line>
    <line x1="17" x2="7" y1="12" y2="12"></line>
    <line x1="19" x2="5" y1="18" y2="18"></line>
  </svg>
);

export const AlignJustifyIcon = ({ className }: TProps) => (
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
    data-lucide="align-justify"
    className={classNames("icon-align-justify stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="3" x2="21" y1="6" y2="6"></line>
    <line x1="3" x2="21" y1="12" y2="12"></line>
    <line x1="3" x2="21" y1="18" y2="18"></line>
  </svg>
);

export const AlignLeftIcon = ({ className }: TProps) => (
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
    data-lucide="align-left"
    className={classNames("icon-align-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="21" x2="3" y1="6" y2="6"></line>
    <line x1="15" x2="3" y1="12" y2="12"></line>
    <line x1="17" x2="3" y1="18" y2="18"></line>
  </svg>
);

export const AlignRightIcon = ({ className }: TProps) => (
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
    data-lucide="align-right"
    className={classNames("icon-align-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="21" x2="3" y1="6" y2="6"></line>
    <line x1="21" x2="9" y1="12" y2="12"></line>
    <line x1="21" x2="7" y1="18" y2="18"></line>
  </svg>
);

export const AnchorIcon = ({ className }: TProps) => (
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
    data-lucide="anchor"
    className={classNames("icon-anchor stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="5" r="3"></circle>
    <line x1="12" x2="12" y1="22" y2="8"></line>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
  </svg>
);

export const ApertureIcon = ({ className }: TProps) => (
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
    data-lucide="aperture"
    className={classNames("icon-aperture stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="14.31" x2="20.05" y1="8" y2="17.94"></line>
    <line x1="9.69" x2="21.17" y1="8" y2="8"></line>
    <line x1="7.38" x2="13.12" y1="12" y2="2.06"></line>
    <line x1="9.69" x2="3.95" y1="16" y2="6.06"></line>
    <line x1="14.31" x2="2.83" y1="16" y2="16"></line>
    <line x1="16.62" x2="10.88" y1="12" y2="21.94"></line>
  </svg>
);

export const ArchiveIcon = ({ className }: TProps) => (
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
    data-lucide="archive"
    className={classNames("icon-archive stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="5" x="2" y="3" rx="1"></rect>
    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
    <path d="M10 12h4"></path>
  </svg>
);

export const ArrowDownCircleIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-down-circle"
    className={classNames("icon-arrow-down-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 8v8"></path>
    <path d="m8 12 4 4 4-4"></path>
  </svg>
);

export const ArrowDownLeftIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-down-left"
    className={classNames("icon-arrow-down-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M17 7 7 17"></path>
    <path d="M17 17H7V7"></path>
  </svg>
);

export const ArrowDownRightIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-down-right"
    className={classNames("icon-arrow-down-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m7 7 10 10"></path>
    <path d="M17 7v10H7"></path>
  </svg>
);

export const ArrowDownIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-down"
    className={classNames("icon-arrow-down stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 5v14"></path>
    <path d="m19 12-7 7-7-7"></path>
  </svg>
);

export const ArrowLeftCircleIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-left-circle"
    className={classNames("icon-arrow-left-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M16 12H8"></path>
    <path d="m12 8-4 4 4 4"></path>
  </svg>
);

export const ArrowLeftIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-left"
    className={classNames("icon-arrow-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m12 19-7-7 7-7"></path>
    <path d="M19 12H5"></path>
  </svg>
);

export const ArrowRightCircleIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-right-circle"
    className={classNames("icon-arrow-right-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 12h8"></path>
    <path d="m12 16 4-4-4-4"></path>
  </svg>
);

export const ArrowRightIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-right"
    className={classNames("icon-arrow-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export const ArrowUpCircleIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-up-circle"
    className={classNames("icon-arrow-up-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m16 12-4-4-4 4"></path>
    <path d="M12 16V8"></path>
  </svg>
);

export const ArrowUpLeftIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-up-left"
    className={classNames("icon-arrow-up-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M7 17V7h10"></path>
    <path d="M17 17 7 7"></path>
  </svg>
);

export const ArrowUpRightIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-up-right"
    className={classNames("icon-arrow-up-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M7 7h10v10"></path>
    <path d="M7 17 17 7"></path>
  </svg>
);

export const ArrowUpIcon = ({ className }: TProps) => (
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
    data-lucide="arrow-up"
    className={classNames("icon-arrow-up stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m5 12 7-7 7 7"></path>
    <path d="M12 19V5"></path>
  </svg>
);

export const AtSignIcon = ({ className }: TProps) => (
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
    data-lucide="at-sign"
    className={classNames("icon-at-sign stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
  </svg>
);

export const AwardIcon = ({ className }: TProps) => (
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
    data-lucide="award"
    className={classNames("icon-award stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
);

export const BarChart2Icon = ({ className }: TProps) => (
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
    data-lucide="bar-chart2"
    className={classNames("icon-bar-chart2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="18" x2="18" y1="20" y2="10"></line>
    <line x1="12" x2="12" y1="20" y2="4"></line>
    <line x1="6" x2="6" y1="20" y2="14"></line>
  </svg>
);

export const BarChartIcon = ({ className }: TProps) => (
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
    data-lucide="bar-chart"
    className={classNames("icon-bar-chart stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="12" x2="12" y1="20" y2="10"></line>
    <line x1="18" x2="18" y1="20" y2="4"></line>
    <line x1="6" x2="6" y1="20" y2="16"></line>
  </svg>
);

export const BatteryChargingIcon = ({ className }: TProps) => (
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
    data-lucide="battery-charging"
    className={classNames("icon-battery-charging stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path>
    <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path>
    <path d="m11 7-3 5h4l-3 5"></path>
    <line x1="22" x2="22" y1="11" y2="13"></line>
  </svg>
);

export const BatteryIcon = ({ className }: TProps) => (
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
    data-lucide="battery"
    className={classNames("icon-battery stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
    <line x1="22" x2="22" y1="11" y2="13"></line>
  </svg>
);

export const BellOffIcon = ({ className }: TProps) => (
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
    data-lucide="bell-off"
    className={classNames("icon-bell-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"></path>
    <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
    <path d="m2 2 20 20"></path>
  </svg>
);

export const BellIcon = ({ className }: TProps) => (
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
    data-lucide="bell"
    className={classNames("icon-bell stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

export const BluetoothIcon = ({ className }: TProps) => (
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
    data-lucide="bluetooth"
    className={classNames("icon-bluetooth stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m7 7 10 10-5 5V2l5 5L7 17"></path>
  </svg>
);

export const BoldIcon = ({ className }: TProps) => (
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
    data-lucide="bold"
    className={classNames("icon-bold stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
    <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
  </svg>
);

export const BookOpenIcon = ({ className }: TProps) => (
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
    data-lucide="book-open"
    className={classNames("icon-book-open stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export const BookIcon = ({ className }: TProps) => (
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
    data-lucide="book"
    className={classNames("icon-book stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
  </svg>
);

export const BookmarkIcon = ({ className }: TProps) => (
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
    data-lucide="bookmark"
    className={classNames("icon-bookmark stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
  </svg>
);

export const BoxIcon = ({ className }: TProps) => (
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
    data-lucide="box"
    className={classNames("icon-box stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
    <path d="m3.3 7 8.7 5 8.7-5"></path>
    <path d="M12 22V12"></path>
  </svg>
);

export const BriefcaseIcon = ({ className }: TProps) => (
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
    data-lucide="briefcase"
    className={classNames("icon-briefcase stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export const CalendarIcon = ({ className }: TProps) => (
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
    data-lucide="calendar"
    className={classNames("icon-calendar stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

export const CameraOffIcon = ({ className }: TProps) => (
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
    data-lucide="camera-off"
    className={classNames("icon-camera-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="2" x2="22" y1="2" y2="22"></line>
    <path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"></path>
    <path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"></path>
    <path d="M14.121 15.121A3 3 0 1 1 9.88 10.88"></path>
  </svg>
);

export const CameraIcon = ({ className }: TProps) => (
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
    data-lucide="camera"
    className={classNames("icon-camera stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
    <circle cx="12" cy="13" r="3"></circle>
  </svg>
);

export const CastIcon = ({ className }: TProps) => (
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
    data-lucide="cast"
    className={classNames("icon-cast stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
    <path d="M2 12a9 9 0 0 1 8 8"></path>
    <path d="M2 16a5 5 0 0 1 4 4"></path>
    <line x1="2" x2="2.01" y1="20" y2="20"></line>
  </svg>
);

export const CheckCircleIcon = ({ className }: TProps) => (
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
    data-lucide="check-circle"
    className={classNames("icon-check-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export const CheckSquareIcon = ({ className }: TProps) => (
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
    data-lucide="check-square"
    className={classNames("icon-check-square stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="9 11 12 14 22 4"></polyline>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
);

export const CheckIcon = ({ className }: TProps) => (
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
    data-lucide="check"
    className={classNames("icon-check stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const ChevronDownIcon = ({ className }: TProps) => (
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
    data-lucide="chevron-down"
    className={classNames("icon-chevron-down stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

export const ChevronLeftIcon = ({ className }: TProps) => (
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
    data-lucide="chevron-left"
    className={classNames("icon-chevron-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m15 18-6-6 6-6"></path>
  </svg>
);

export const ChevronRightIcon = ({ className }: TProps) => (
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
    data-lucide="chevron-right"
    className={classNames("icon-chevron-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>
);

export const ChevronUpIcon = ({ className }: TProps) => (
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
    data-lucide="chevron-up"
    className={classNames("icon-chevron-up stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m18 15-6-6-6 6"></path>
  </svg>
);

export const ChevronsDownIcon = ({ className }: TProps) => (
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
    data-lucide="chevrons-down"
    className={classNames("icon-chevrons-down stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m7 6 5 5 5-5"></path>
    <path d="m7 13 5 5 5-5"></path>
  </svg>
);

export const ChevronsLeftIcon = ({ className }: TProps) => (
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
    data-lucide="chevrons-left"
    className={classNames("icon-chevrons-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m11 17-5-5 5-5"></path>
    <path d="m18 17-5-5 5-5"></path>
  </svg>
);

export const ChevronsRightIcon = ({ className }: TProps) => (
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
    data-lucide="chevrons-right"
    className={classNames("icon-chevrons-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m6 17 5-5-5-5"></path>
    <path d="m13 17 5-5-5-5"></path>
  </svg>
);

export const ChevronsUpIcon = ({ className }: TProps) => (
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
    data-lucide="chevrons-up"
    className={classNames("icon-chevrons-up stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m17 11-5-5-5 5"></path>
    <path d="m17 18-5-5-5 5"></path>
  </svg>
);

export const ChromeIcon = ({ className }: TProps) => (
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
    data-lucide="chrome"
    className={classNames("icon-chrome stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="21.17" x2="12" y1="8" y2="8"></line>
    <line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
    <line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
  </svg>
);

export const CircleIcon = ({ className }: TProps) => (
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
    data-lucide="circle"
    className={classNames("icon-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

export const ClipboardIcon = ({ className }: TProps) => (
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
    data-lucide="clipboard"
    className={classNames("icon-clipboard stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
);

export const ClockIcon = ({ className }: TProps) => (
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
    data-lucide="clock"
    className={classNames("icon-clock stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const CloudDrizzleIcon = ({ className }: TProps) => (
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
    data-lucide="cloud-drizzle"
    className={classNames("icon-cloud-drizzle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="M8 19v1"></path>
    <path d="M8 14v1"></path>
    <path d="M16 19v1"></path>
    <path d="M16 14v1"></path>
    <path d="M12 21v1"></path>
    <path d="M12 16v1"></path>
  </svg>
);

export const CloudLightningIcon = ({ className }: TProps) => (
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
    data-lucide="cloud-lightning"
    className={classNames("icon-cloud-lightning stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path>
    <path d="m13 12-3 5h4l-3 5"></path>
  </svg>
);

export const CloudOffIcon = ({ className }: TProps) => (
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
    data-lucide="cloud-off"
    className={classNames("icon-cloud-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m2 2 20 20"></path>
    <path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"></path>
    <path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"></path>
  </svg>
);

export const CloudRainIcon = ({ className }: TProps) => (
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
    data-lucide="cloud-rain"
    className={classNames("icon-cloud-rain stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="M16 14v6"></path>
    <path d="M8 14v6"></path>
    <path d="M12 16v6"></path>
  </svg>
);

export const CloudSnowIcon = ({ className }: TProps) => (
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
    data-lucide="cloud-snow"
    className={classNames("icon-cloud-snow stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="M8 15h.01"></path>
    <path d="M8 19h.01"></path>
    <path d="M12 17h.01"></path>
    <path d="M12 21h.01"></path>
    <path d="M16 15h.01"></path>
    <path d="M16 19h.01"></path>
  </svg>
);

export const CloudIcon = ({ className }: TProps) => (
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
    data-lucide="cloud"
    className={classNames("icon-cloud stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

export const CodeIcon = ({ className }: TProps) => (
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
    data-lucide="code"
    className={classNames("icon-code stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const CodepenIcon = ({ className }: TProps) => (
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
    data-lucide="codepen"
    className={classNames("icon-codepen stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
    <line x1="12" x2="12" y1="22" y2="15.5"></line>
    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
    <line x1="12" x2="12" y1="2" y2="8.5"></line>
  </svg>
);

export const CodesandboxIcon = ({ className }: TProps) => (
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
    data-lucide="codesandbox"
    className={classNames("icon-codesandbox stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" x2="12" y1="22.08" y2="12"></line>
  </svg>
);

export const CoffeeIcon = ({ className }: TProps) => (
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
    data-lucide="coffee"
    className={classNames("icon-coffee stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
    <line x1="6" x2="6" y1="2" y2="4"></line>
    <line x1="10" x2="10" y1="2" y2="4"></line>
    <line x1="14" x2="14" y1="2" y2="4"></line>
  </svg>
);

export const ColumnsIcon = ({ className }: TProps) => (
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
    data-lucide="columns"
    className={classNames("icon-columns stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <line x1="12" x2="12" y1="3" y2="21"></line>
  </svg>
);

export const CommandIcon = ({ className }: TProps) => (
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
    data-lucide="command"
    className={classNames("icon-command stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
  </svg>
);

export const CompassIcon = ({ className }: TProps) => (
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
    data-lucide="compass"
    className={classNames("icon-compass stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

export const CopyIcon = ({ className }: TProps) => (
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
    data-lucide="copy"
    className={classNames("icon-copy stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
  </svg>
);

export const CornerDownLeftIcon = ({ className }: TProps) => (
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
    data-lucide="corner-down-left"
    className={classNames("icon-corner-down-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="9 10 4 15 9 20"></polyline>
    <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
  </svg>
);

export const CornerDownRightIcon = ({ className }: TProps) => (
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
    data-lucide="corner-down-right"
    className={classNames("icon-corner-down-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="15 10 20 15 15 20"></polyline>
    <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
  </svg>
);

export const CornerLeftDownIcon = ({ className }: TProps) => (
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
    data-lucide="corner-left-down"
    className={classNames("icon-corner-left-down stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="14 15 9 20 4 15"></polyline>
    <path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>
  </svg>
);

export const CornerLeftUpIcon = ({ className }: TProps) => (
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
    data-lucide="corner-left-up"
    className={classNames("icon-corner-left-up stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="14 9 9 4 4 9"></polyline>
    <path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
  </svg>
);

export const CornerRightDownIcon = ({ className }: TProps) => (
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
    data-lucide="corner-right-down"
    className={classNames("icon-corner-right-down stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="10 15 15 20 20 15"></polyline>
    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
  </svg>
);

export const CornerRightUpIcon = ({ className }: TProps) => (
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
    data-lucide="corner-right-up"
    className={classNames("icon-corner-right-up stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="10 9 15 4 20 9"></polyline>
    <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
  </svg>
);

export const CornerUpLeftIcon = ({ className }: TProps) => (
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
    data-lucide="corner-up-left"
    className={classNames("icon-corner-up-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="9 14 4 9 9 4"></polyline>
    <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
  </svg>
);

export const CornerUpRightIcon = ({ className }: TProps) => (
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
    data-lucide="corner-up-right"
    className={classNames("icon-corner-up-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="15 14 20 9 15 4"></polyline>
    <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
  </svg>
);

export const CpuIcon = ({ className }: TProps) => (
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
    data-lucide="cpu"
    className={classNames("icon-cpu stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <path d="M15 2v2"></path>
    <path d="M15 20v2"></path>
    <path d="M2 15h2"></path>
    <path d="M2 9h2"></path>
    <path d="M20 15h2"></path>
    <path d="M20 9h2"></path>
    <path d="M9 2v2"></path>
    <path d="M9 20v2"></path>
  </svg>
);

export const CreditCardIcon = ({ className }: TProps) => (
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
    data-lucide="credit-card"
    className={classNames("icon-credit-card stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
    <line x1="2" x2="22" y1="10" y2="10"></line>
  </svg>
);

export const CropIcon = ({ className }: TProps) => (
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
    data-lucide="crop"
    className={classNames("icon-crop stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M6 2v14a2 2 0 0 0 2 2h14"></path>
    <path d="M18 22V8a2 2 0 0 0-2-2H2"></path>
  </svg>
);

export const CrosshairIcon = ({ className }: TProps) => (
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
    data-lucide="crosshair"
    className={classNames("icon-crosshair stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="22" x2="18" y1="12" y2="12"></line>
    <line x1="6" x2="2" y1="12" y2="12"></line>
    <line x1="12" x2="12" y1="6" y2="2"></line>
    <line x1="12" x2="12" y1="22" y2="18"></line>
  </svg>
);

export const DatabaseIcon = ({ className }: TProps) => (
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
    data-lucide="database"
    className={classNames("icon-database stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
    <path d="M3 12A9 3 0 0 0 21 12"></path>
  </svg>
);

export const DeleteIcon = ({ className }: TProps) => (
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
    data-lucide="delete"
    className={classNames("icon-delete stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
    <line x1="18" x2="12" y1="9" y2="15"></line>
    <line x1="12" x2="18" y1="9" y2="15"></line>
  </svg>
);

export const DiscIcon = ({ className }: TProps) => (
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
    data-lucide="disc"
    className={classNames("icon-disc stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

export const DivideCircleIcon = ({ className }: TProps) => (
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
    data-lucide="divide-circle"
    className={classNames("icon-divide-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="8" x2="16" y1="12" y2="12"></line>
    <line x1="12" x2="12" y1="16" y2="16"></line>
    <line x1="12" x2="12" y1="8" y2="8"></line>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

export const DivideSquareIcon = ({ className }: TProps) => (
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
    data-lucide="divide-square"
    className={classNames("icon-divide-square stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <line x1="8" x2="16" y1="12" y2="12"></line>
    <line x1="12" x2="12" y1="16" y2="16"></line>
    <line x1="12" x2="12" y1="8" y2="8"></line>
  </svg>
);

export const DivideIcon = ({ className }: TProps) => (
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
    data-lucide="divide"
    className={classNames("icon-divide stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="6" r="1"></circle>
    <line x1="5" x2="19" y1="12" y2="12"></line>
    <circle cx="12" cy="18" r="1"></circle>
  </svg>
);

export const DollarSignIcon = ({ className }: TProps) => (
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
    data-lucide="dollar-sign"
    className={classNames("icon-dollar-sign stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="12" x2="12" y1="2" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export const DownloadCloudIcon = ({ className }: TProps) => (
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
    data-lucide="download-cloud"
    className={classNames("icon-download-cloud stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="M12 12v9"></path>
    <path d="m8 17 4 4 4-4"></path>
  </svg>
);

export const DownloadIcon = ({ className }: TProps) => (
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
    data-lucide="download"
    className={classNames("icon-download stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" x2="12" y1="15" y2="3"></line>
  </svg>
);

export const DribbbleIcon = ({ className }: TProps) => (
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
    data-lucide="dribbble"
    className={classNames("icon-dribbble stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
  </svg>
);

export const DropletIcon = ({ className }: TProps) => (
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
    data-lucide="droplet"
    className={classNames("icon-droplet stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
  </svg>
);

export const Edit2Icon = ({ className }: TProps) => (
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
    data-lucide="edit2"
    className={classNames("icon-edit2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
  </svg>
);

export const Edit3Icon = ({ className }: TProps) => (
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
    data-lucide="edit3"
    className={classNames("icon-edit3 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
  </svg>
);

export const EditIcon = ({ className }: TProps) => (
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
    data-lucide="edit"
    className={classNames("icon-edit stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path>
  </svg>
);

export const ExternalLinkIcon = ({ className }: TProps) => (
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
    data-lucide="external-link"
    className={classNames("icon-external-link stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" x2="21" y1="14" y2="3"></line>
  </svg>
);

export const EyeOffIcon = ({ className }: TProps) => (
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
    data-lucide="eye-off"
    className={classNames("icon-eye-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
    <line x1="2" x2="22" y1="2" y2="22"></line>
  </svg>
);

export const EyeIcon = ({ className }: TProps) => (
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
    data-lucide="eye"
    className={classNames("icon-eye stroke-1.5 mr-2 h-4 w-4")}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export const FacebookIcon = ({ className }: TProps) => (
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
    data-lucide="facebook"
    className={classNames("icon-facebook stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export const FastForwardIcon = ({ className }: TProps) => (
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
    data-lucide="fast-forward"
    className={classNames("icon-fast-forward stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="13 19 22 12 13 5 13 19"></polygon>
    <polygon points="2 19 11 12 2 5 2 19"></polygon>
  </svg>
);

export const FigmaIcon = ({ className }: TProps) => (
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
    data-lucide="figma"
    className={classNames("icon-figma stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
  </svg>
);

export const FileMinusIcon = ({ className }: TProps) => (
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
    data-lucide="file-minus"
    className={classNames("icon-file-minus stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="9" x2="15" y1="15" y2="15"></line>
  </svg>
);

export const FilePlusIcon = ({ className }: TProps) => (
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
    data-lucide="file-plus"
    className={classNames("icon-file-plus stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="12" x2="12" y1="18" y2="12"></line>
    <line x1="9" x2="15" y1="15" y2="15"></line>
  </svg>
);

export const FileTextIcon = ({ className }: TProps) => (
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
    data-lucide="file-text"
    className={classNames("icon-file-text stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" x2="8" y1="13" y2="13"></line>
    <line x1="16" x2="8" y1="17" y2="17"></line>
    <line x1="10" x2="8" y1="9" y2="9"></line>
  </svg>
);

export const FileIcon = ({ className }: TProps) => (
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
    data-lucide="file"
    className={classNames("icon-file stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);

export const FilmIcon = ({ className }: TProps) => (
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
    data-lucide="film"
    className={classNames("icon-film stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    <path d="M7 3v18"></path>
    <path d="M3 7.5h4"></path>
    <path d="M3 12h18"></path>
    <path d="M3 16.5h4"></path>
    <path d="M17 3v18"></path>
    <path d="M17 7.5h4"></path>
    <path d="M17 16.5h4"></path>
  </svg>
);

export const FilterIcon = ({ className }: TProps) => (
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
    data-lucide="filter"
    className={classNames("icon-filter stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

export const FlagIcon = ({ className }: TProps) => (
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
    data-lucide="flag"
    className={classNames("icon-flag stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
    <line x1="4" x2="4" y1="22" y2="15"></line>
  </svg>
);

export const FolderMinusIcon = ({ className }: TProps) => (
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
    data-lucide="folder-minus"
    className={classNames("icon-folder-minus stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M9 13h6"></path>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
  </svg>
);

export const FolderPlusIcon = ({ className }: TProps) => (
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
    data-lucide="folder-plus"
    className={classNames("icon-folder-plus stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 10v6"></path>
    <path d="M9 13h6"></path>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
  </svg>
);

export const FolderIcon = ({ className }: TProps) => (
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
    data-lucide="folder"
    className={classNames("icon-folder stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
  </svg>
);

export const FramerIcon = ({ className }: TProps) => (
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
    data-lucide="framer"
    className={classNames("icon-framer stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path>
  </svg>
);

export const FrownIcon = ({ className }: TProps) => (
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
    data-lucide="frown"
    className={classNames("icon-frown stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
    <line x1="9" x2="9.01" y1="9" y2="9"></line>
    <line x1="15" x2="15.01" y1="9" y2="9"></line>
  </svg>
);

export const GiftIcon = ({ className }: TProps) => (
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
    data-lucide="gift"
    className={classNames("icon-gift stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect x="3" y="8" width="18" height="4" rx="1"></rect>
    <path d="M12 8v13"></path>
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
  </svg>
);

export const GitBranchIcon = ({ className }: TProps) => (
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
    data-lucide="git-branch"
    className={classNames("icon-git-branch stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="6" x2="6" y1="3" y2="15"></line>
    <circle cx="18" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>
);

export const GitCommitIcon = ({ className }: TProps) => (
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
    data-lucide="git-commit"
    className={classNames("icon-git-commit stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="3" x2="9" y1="12" y2="12"></line>
    <line x1="15" x2="21" y1="12" y2="12"></line>
  </svg>
);

export const GitMergeIcon = ({ className }: TProps) => (
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
    data-lucide="git-merge"
    className={classNames("icon-git-merge stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="18" cy="18" r="3"></circle>
    <circle cx="6" cy="6" r="3"></circle>
    <path d="M6 21V9a9 9 0 0 0 9 9"></path>
  </svg>
);

export const GitPullRequestIcon = ({ className }: TProps) => (
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
    data-lucide="git-pull-request"
    className={classNames("icon-git-pull-request stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="18" cy="18" r="3"></circle>
    <circle cx="6" cy="6" r="3"></circle>
    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
    <line x1="6" x2="6" y1="9" y2="21"></line>
  </svg>
);

export const GithubIcon = ({ className }: TProps) => (
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
    data-lucide="github"
    className={classNames("icon-github stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export const GitlabIcon = ({ className }: TProps) => (
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
    data-lucide="gitlab"
    className={classNames("icon-gitlab stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"></path>
  </svg>
);

export const GlobeIcon = ({ className }: TProps) => (
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
    data-lucide="globe"
    className={classNames("icon-globe stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
    <path d="M2 12h20"></path>
  </svg>
);

export const GridIcon = ({ className }: TProps) => (
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
    data-lucide="grid"
    className={classNames("icon-grid stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    <path d="M3 9h18"></path>
    <path d="M3 15h18"></path>
    <path d="M9 3v18"></path>
    <path d="M15 3v18"></path>
  </svg>
);

export const HardDriveIcon = ({ className }: TProps) => (
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
    data-lucide="hard-drive"
    className={classNames("icon-hard-drive stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="22" x2="2" y1="12" y2="12"></line>
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
    <line x1="6" x2="6.01" y1="16" y2="16"></line>
    <line x1="10" x2="10.01" y1="16" y2="16"></line>
  </svg>
);

export const HashIcon = ({ className }: TProps) => (
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
    data-lucide="hash"
    className={classNames("icon-hash stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="4" x2="20" y1="9" y2="9"></line>
    <line x1="4" x2="20" y1="15" y2="15"></line>
    <line x1="10" x2="8" y1="3" y2="21"></line>
    <line x1="16" x2="14" y1="3" y2="21"></line>
  </svg>
);

export const HeadphonesIcon = ({ className }: TProps) => (
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
    data-lucide="headphones"
    className={classNames("icon-headphones stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
  </svg>
);

export const HeartIcon = ({ className }: TProps) => (
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
    data-lucide="heart"
    className={classNames("icon-heart stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

export const HelpCircleIcon = ({ className }: TProps) => (
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
    data-lucide="help-circle"
    className={classNames("icon-help-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

export const HexagonIcon = ({ className }: TProps) => (
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
    data-lucide="hexagon"
    className={classNames("icon-hexagon stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
  </svg>
);

export const HomeIcon = ({ className }: TProps) => (
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
    data-lucide="home"
    className={classNames("icon-home stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

export const ImageIcon = ({ className }: TProps) => (
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
    data-lucide="image"
    className={classNames("icon-image stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <circle cx="9" cy="9" r="2"></circle>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
  </svg>
);

export const InboxIcon = ({ className }: TProps) => (
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
    data-lucide="inbox"
    className={classNames("icon-inbox stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
  </svg>
);

export const InfoIcon = ({ className }: TProps) => (
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
    data-lucide="info"
    className={classNames("icon-info stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4"></path>
    <path d="M12 8h.01"></path>
  </svg>
);

export const InstagramIcon = ({ className }: TProps) => (
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
    data-lucide="instagram"
    className={classNames("icon-instagram stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export const ItalicIcon = ({ className }: TProps) => (
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
    data-lucide="italic"
    className={classNames("icon-italic stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="19" x2="10" y1="4" y2="4"></line>
    <line x1="14" x2="5" y1="20" y2="20"></line>
    <line x1="15" x2="9" y1="4" y2="20"></line>
  </svg>
);

export const KeyIcon = ({ className }: TProps) => (
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
    data-lucide="key"
    className={classNames("icon-key stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="7.5" cy="15.5" r="5.5"></circle>
    <path d="m21 2-9.6 9.6"></path>
    <path d="m15.5 7.5 3 3L22 7l-3-3"></path>
  </svg>
);

export const LayersIcon = ({ className }: TProps) => (
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
    data-lucide="layers"
    className={classNames("icon-layers stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
  </svg>
);

export const LayoutIcon = ({ className }: TProps) => (
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
    data-lucide="layout"
    className={classNames("icon-layout stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <line x1="3" x2="21" y1="9" y2="9"></line>
    <line x1="9" x2="9" y1="21" y2="9"></line>
  </svg>
);

export const LifeBuoyIcon = ({ className }: TProps) => (
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
    data-lucide="life-buoy"
    className={classNames("icon-life-buoy stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m4.93 4.93 4.24 4.24"></path>
    <path d="m14.83 9.17 4.24-4.24"></path>
    <path d="m14.83 14.83 4.24 4.24"></path>
    <path d="m9.17 14.83-4.24 4.24"></path>
    <circle cx="12" cy="12" r="4"></circle>
  </svg>
);

export const Link2Icon = ({ className }: TProps) => (
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
    data-lucide="link2"
    className={classNames("icon-link2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
    <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
    <line x1="8" x2="16" y1="12" y2="12"></line>
  </svg>
);

export const LinkIcon = ({ className }: TProps) => (
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
    data-lucide="link"
    className={classNames("icon-link stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

export const LinkedinIcon = ({ className }: TProps) => (
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
    data-lucide="linkedin"
    className={classNames("icon-linkedin stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const ListIcon = ({ className }: TProps) => (
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
    data-lucide="list"
    className={classNames("icon-list stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="8" x2="21" y1="6" y2="6"></line>
    <line x1="8" x2="21" y1="12" y2="12"></line>
    <line x1="8" x2="21" y1="18" y2="18"></line>
    <line x1="3" x2="3.01" y1="6" y2="6"></line>
    <line x1="3" x2="3.01" y1="12" y2="12"></line>
    <line x1="3" x2="3.01" y1="18" y2="18"></line>
  </svg>
);

export const LoaderIcon = ({ className }: TProps) => (
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
    data-lucide="loader"
    className={classNames("icon-loader stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="12" x2="12" y1="2" y2="6"></line>
    <line x1="12" x2="12" y1="18" y2="22"></line>
    <line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line>
    <line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line>
    <line x1="2" x2="6" y1="12" y2="12"></line>
    <line x1="18" x2="22" y1="12" y2="12"></line>
    <line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line>
    <line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line>
  </svg>
);

export const LockIcon = ({ className }: TProps) => (
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
    data-lucide="lock"
    className={classNames("icon-lock stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

export const LogInIcon = ({ className }: TProps) => (
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
    data-lucide="log-in"
    className={classNames("icon-log-in stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <polyline points="10 17 15 12 10 7"></polyline>
    <line x1="15" x2="3" y1="12" y2="12"></line>
  </svg>
);

export const LogOutIcon = ({ className }: TProps) => (
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
    data-lucide="log-out"
    className={classNames("icon-log-out stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" x2="9" y1="12" y2="12"></line>
  </svg>
);

export const MailIcon = ({ className }: TProps) => (
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
    data-lucide="mail"
    className={classNames("icon-mail stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

export const MapPinIcon = ({ className }: TProps) => (
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
    data-lucide="map-pin"
    className={classNames("icon-map-pin stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const MapIcon = ({ className }: TProps) => (
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
    data-lucide="map"
    className={classNames("icon-map stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
    <line x1="9" x2="9" y1="3" y2="18"></line>
    <line x1="15" x2="15" y1="6" y2="21"></line>
  </svg>
);

export const Maximize2Icon = ({ className }: TProps) => (
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
    data-lucide="maximize2"
    className={classNames("icon-maximize2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" x2="14" y1="3" y2="10"></line>
    <line x1="3" x2="10" y1="21" y2="14"></line>
  </svg>
);

export const MaximizeIcon = ({ className }: TProps) => (
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
    data-lucide="maximize"
    className={classNames("icon-maximize stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
    <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
    <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
    <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
  </svg>
);

export const MehIcon = ({ className }: TProps) => (
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
    data-lucide="meh"
    className={classNames("icon-meh stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="8" x2="16" y1="15" y2="15"></line>
    <line x1="9" x2="9.01" y1="9" y2="9"></line>
    <line x1="15" x2="15.01" y1="9" y2="9"></line>
  </svg>
);

export const MenuIcon = ({ className }: TProps) => (
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
    data-lucide="menu"
    className={classNames("icon-menu stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
);

export const MessageCircleIcon = ({ className }: TProps) => (
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
    data-lucide="message-circle"
    className={classNames("icon-message-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
  </svg>
);

export const MessageSquareIcon = ({ className }: TProps) => (
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
    data-lucide="message-square"
    className={classNames("icon-message-square stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export const MicOffIcon = ({ className }: TProps) => (
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
    data-lucide="mic-off"
    className={classNames("icon-mic-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="2" x2="22" y1="2" y2="22"></line>
    <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"></path>
    <path d="M5 10v2a7 7 0 0 0 12 5"></path>
    <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path>
    <path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path>
    <line x1="12" x2="12" y1="19" y2="22"></line>
  </svg>
);

export const MicIcon = ({ className }: TProps) => (
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
    data-lucide="mic"
    className={classNames("icon-mic stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" x2="12" y1="19" y2="22"></line>
  </svg>
);

export const Minimize2Icon = ({ className }: TProps) => (
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
    data-lucide="minimize2"
    className={classNames("icon-minimize2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="4 14 10 14 10 20"></polyline>
    <polyline points="20 10 14 10 14 4"></polyline>
    <line x1="14" x2="21" y1="10" y2="3"></line>
    <line x1="3" x2="10" y1="21" y2="14"></line>
  </svg>
);

export const MinimizeIcon = ({ className }: TProps) => (
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
    data-lucide="minimize"
    className={classNames("icon-minimize stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
    <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
    <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
    <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
  </svg>
);

export const MinusCircleIcon = ({ className }: TProps) => (
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
    data-lucide="minus-circle"
    className={classNames("icon-minus-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 12h8"></path>
  </svg>
);

export const MinusSquareIcon = ({ className }: TProps) => (
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
    data-lucide="minus-square"
    className={classNames("icon-minus-square stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    <path d="M8 12h8"></path>
  </svg>
);

export const MinusIcon = ({ className }: TProps) => (
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
    data-lucide="minus"
    className={classNames("icon-minus stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M5 12h14"></path>
  </svg>
);

export const MonitorIcon = ({ className }: TProps) => (
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
    data-lucide="monitor"
    className={classNames("icon-monitor stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
    <line x1="8" x2="16" y1="21" y2="21"></line>
    <line x1="12" x2="12" y1="17" y2="21"></line>
  </svg>
);

export const MoonIcon = ({ className }: TProps) => (
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
    data-lucide="moon"
    className={classNames("icon-moon stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);

export const MoreHorizontalIcon = ({ className }: TProps) => (
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
    data-lucide="more-horizontal"
    className={classNames("icon-more-horizontal stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
);

export const MoreVerticalIcon = ({ className }: TProps) => (
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
    data-lucide="more-vertical"
    className={classNames("icon-more-vertical stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

export const MousePointerIcon = ({ className }: TProps) => (
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
    data-lucide="mouse-pointer"
    className={classNames("icon-mouse-pointer stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
    <path d="m13 13 6 6"></path>
  </svg>
);

export const MoveIcon = ({ className }: TProps) => (
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
    data-lucide="move"
    className={classNames("icon-move stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="5 9 2 12 5 15"></polyline>
    <polyline points="9 5 12 2 15 5"></polyline>
    <polyline points="15 19 12 22 9 19"></polyline>
    <polyline points="19 9 22 12 19 15"></polyline>
    <line x1="2" x2="22" y1="12" y2="12"></line>
    <line x1="12" x2="12" y1="2" y2="22"></line>
  </svg>
);

export const MusicIcon = ({ className }: TProps) => (
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
    data-lucide="music"
    className={classNames("icon-music stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

export const Navigation2Icon = ({ className }: TProps) => (
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
    data-lucide="navigation2"
    className={classNames("icon-navigation2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
  </svg>
);

export const NavigationIcon = ({ className }: TProps) => (
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
    data-lucide="navigation"
    className={classNames("icon-navigation stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
  </svg>
);

export const OctagonIcon = ({ className }: TProps) => (
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
    data-lucide="octagon"
    className={classNames("icon-octagon stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
  </svg>
);

export const PackageIcon = ({ className }: TProps) => (
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
    data-lucide="package"
    className={classNames("icon-package stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m7.5 4.27 9 5.15"></path>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
    <path d="m3.3 7 8.7 5 8.7-5"></path>
    <path d="M12 22V12"></path>
  </svg>
);

export const PaperclipIcon = ({ className }: TProps) => (
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
    data-lucide="paperclip"
    className={classNames("icon-paperclip stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

export const PauseCircleIcon = ({ className }: TProps) => (
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
    data-lucide="pause-circle"
    className={classNames("icon-pause-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="10" x2="10" y1="15" y2="9"></line>
    <line x1="14" x2="14" y1="15" y2="9"></line>
  </svg>
);

export const PauseIcon = ({ className }: TProps) => (
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
    data-lucide="pause"
    className={classNames("icon-pause stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="4" height="16" x="6" y="4"></rect>
    <rect width="4" height="16" x="14" y="4"></rect>
  </svg>
);

export const PenToolIcon = ({ className }: TProps) => (
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
    data-lucide="pen-tool"
    className={classNames("icon-pen-tool stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m12 19 7-7 3 3-7 7-3-3z"></path>
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    <path d="m2 2 7.586 7.586"></path>
    <circle cx="11" cy="11" r="2"></circle>
  </svg>
);

export const PercentIcon = ({ className }: TProps) => (
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
    data-lucide="percent"
    className={classNames("icon-percent stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="19" x2="5" y1="5" y2="19"></line>
    <circle cx="6.5" cy="6.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>
);

export const PhoneCallIcon = ({ className }: TProps) => (
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
    data-lucide="phone-call"
    className={classNames("icon-phone-call stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
  </svg>
);

export const PhoneForwardedIcon = ({ className }: TProps) => (
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
    data-lucide="phone-forwarded"
    className={classNames("icon-phone-forwarded stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="18 2 22 6 18 10"></polyline>
    <line x1="14" x2="22" y1="6" y2="6"></line>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PhoneIncomingIcon = ({ className }: TProps) => (
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
    data-lucide="phone-incoming"
    className={classNames("icon-phone-incoming stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="16 2 16 8 22 8"></polyline>
    <line x1="22" x2="16" y1="2" y2="8"></line>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PhoneMissedIcon = ({ className }: TProps) => (
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
    data-lucide="phone-missed"
    className={classNames("icon-phone-missed stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="22" x2="16" y1="2" y2="8"></line>
    <line x1="16" x2="22" y1="2" y2="8"></line>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PhoneOffIcon = ({ className }: TProps) => (
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
    data-lucide="phone-off"
    className={classNames("icon-phone-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
    <line x1="22" x2="2" y1="2" y2="22"></line>
  </svg>
);

export const PhoneOutgoingIcon = ({ className }: TProps) => (
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
    data-lucide="phone-outgoing"
    className={classNames("icon-phone-outgoing stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="22 8 22 2 16 2"></polyline>
    <line x1="16" x2="22" y1="8" y2="2"></line>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PhoneIcon = ({ className }: TProps) => (
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
    data-lucide="phone"
    className={classNames("icon-phone stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const PieChartIcon = ({ className }: TProps) => (
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
    data-lucide="pie-chart"
    className={classNames("icon-pie-chart stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);

export const PlayCircleIcon = ({ className }: TProps) => (
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
    data-lucide="play-circle"
    className={classNames("icon-play-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);

export const PlayIcon = ({ className }: TProps) => (
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
    data-lucide="play"
    className={classNames("icon-play stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

export const PlusCircleIcon = ({ className }: TProps) => (
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
    data-lucide="plus-circle"
    className={classNames("icon-plus-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 12h8"></path>
    <path d="M12 8v8"></path>
  </svg>
);

export const PlusSquareIcon = ({ className }: TProps) => (
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
    data-lucide="plus-square"
    className={classNames("icon-plus-square stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    <path d="M8 12h8"></path>
    <path d="M12 8v8"></path>
  </svg>
);

export const PlusIcon = ({ className }: TProps) => (
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
    data-lucide="plus"
    className={classNames("icon-plus stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M5 12h14"></path>
    <path d="M12 5v14"></path>
  </svg>
);

export const PocketIcon = ({ className }: TProps) => (
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
    data-lucide="pocket"
    className={classNames("icon-pocket stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
    <polyline points="8 10 12 14 16 10"></polyline>
  </svg>
);

export const PowerIcon = ({ className }: TProps) => (
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
    data-lucide="power"
    className={classNames("icon-power stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 2v10"></path>
    <path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path>
  </svg>
);

export const PrinterIcon = ({ className }: TProps) => (
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
    data-lucide="printer"
    className={classNames("icon-printer stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="6 9 6 2 18 2 18 9"></polyline>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
    <rect width="12" height="8" x="6" y="14"></rect>
  </svg>
);

export const RadioIcon = ({ className }: TProps) => (
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
    data-lucide="radio"
    className={classNames("icon-radio stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
  </svg>
);

export const RefreshCcwIcon = ({ className }: TProps) => (
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
    data-lucide="refresh-ccw"
    className={classNames("icon-refresh-ccw stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
    <path d="M3 3v5h5"></path>
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
    <path d="M16 16h5v5"></path>
  </svg>
);

export const RefreshCwIcon = ({ className }: TProps) => (
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
    data-lucide="refresh-cw"
    className={classNames("icon-refresh-cw stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
    <path d="M21 3v5h-5"></path>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
    <path d="M8 16H3v5"></path>
  </svg>
);

export const RepeatIcon = ({ className }: TProps) => (
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
    data-lucide="repeat"
    className={classNames("icon-repeat stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m17 2 4 4-4 4"></path>
    <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
    <path d="m7 22-4-4 4-4"></path>
    <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
  </svg>
);

export const RewindIcon = ({ className }: TProps) => (
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
    data-lucide="rewind"
    className={classNames("icon-rewind stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="11 19 2 12 11 5 11 19"></polygon>
    <polygon points="22 19 13 12 22 5 22 19"></polygon>
  </svg>
);

export const RotateCcwIcon = ({ className }: TProps) => (
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
    data-lucide="rotate-ccw"
    className={classNames("icon-rotate-ccw stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
    <path d="M3 3v5h5"></path>
  </svg>
);

export const RotateCwIcon = ({ className }: TProps) => (
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
    data-lucide="rotate-cw"
    className={classNames("icon-rotate-cw stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
    <path d="M21 3v5h-5"></path>
  </svg>
);

export const RssIcon = ({ className }: TProps) => (
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
    data-lucide="rss"
    className={classNames("icon-rss stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 11a9 9 0 0 1 9 9"></path>
    <path d="M4 4a16 16 0 0 1 16 16"></path>
    <circle cx="5" cy="19" r="1"></circle>
  </svg>
);

export const SaveIcon = ({ className }: TProps) => (
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
    data-lucide="save"
    className={classNames("icon-save stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
    <polyline points="17 21 17 13 7 13 7 21"></polyline>
    <polyline points="7 3 7 8 15 8"></polyline>
  </svg>
);

export const ScissorsIcon = ({ className }: TProps) => (
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
    data-lucide="scissors"
    className={classNames("icon-scissors stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="6" cy="6" r="3"></circle>
    <path d="M8.12 8.12 12 12"></path>
    <path d="M20 4 8.12 15.88"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M14.8 14.8 20 20"></path>
  </svg>
);

export const SearchIcon = ({ className }: TProps) => (
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
    data-lucide="search"
    className={classNames("icon-search stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

export const SendIcon = ({ className }: TProps) => (
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
    data-lucide="send"
    className={classNames("icon-send stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m22 2-7 20-4-9-9-4Z"></path>
    <path d="M22 2 11 13"></path>
  </svg>
);

export const ServerIcon = ({ className }: TProps) => (
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
    data-lucide="server"
    className={classNames("icon-server stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
    <line x1="6" x2="6.01" y1="6" y2="6"></line>
    <line x1="6" x2="6.01" y1="18" y2="18"></line>
  </svg>
);

export const SettingsIcon = ({ className }: TProps) => (
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
    className={classNames("icon-settings stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export const Share2Icon = ({ className }: TProps) => (
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
    data-lucide="share2"
    className={classNames("icon-share2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
  </svg>
);

export const ShareIcon = ({ className }: TProps) => (
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
    data-lucide="share"
    className={classNames("icon-share stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
    <polyline points="16 6 12 2 8 6"></polyline>
    <line x1="12" x2="12" y1="2" y2="15"></line>
  </svg>
);

export const ShieldOffIcon = ({ className }: TProps) => (
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
    data-lucide="shield-off"
    className={classNames("icon-shield-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"></path>
    <path d="m2 2 20 20"></path>
    <path d="M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"></path>
  </svg>
);

export const ShieldIcon = ({ className }: TProps) => (
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
    data-lucide="shield"
    className={classNames("icon-shield stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
  </svg>
);

export const ShoppingBagIcon = ({ className }: TProps) => (
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
    data-lucide="shopping-bag"
    className={classNames("icon-shopping-bag stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
    <path d="M3 6h18"></path>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

export const ShoppingCartIcon = ({ className }: TProps) => (
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
    data-lucide="shopping-cart"
    className={classNames("icon-shopping-cart stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>
);

export const ShuffleIcon = ({ className }: TProps) => (
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
    data-lucide="shuffle"
    className={classNames("icon-shuffle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"></path>
    <path d="m18 2 4 4-4 4"></path>
    <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"></path>
    <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"></path>
    <path d="m18 14 4 4-4 4"></path>
  </svg>
);

export const SidebarIcon = ({ className }: TProps) => (
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
    data-lucide="sidebar"
    className={classNames("icon-sidebar stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <line x1="9" x2="9" y1="3" y2="21"></line>
  </svg>
);

export const SkipBackIcon = ({ className }: TProps) => (
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
    data-lucide="skip-back"
    className={classNames("icon-skip-back stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="19 20 9 12 19 4 19 20"></polygon>
    <line x1="5" x2="5" y1="19" y2="5"></line>
  </svg>
);

export const SkipForwardIcon = ({ className }: TProps) => (
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
    data-lucide="skip-forward"
    className={classNames("icon-skip-forward stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="5 4 15 12 5 20 5 4"></polygon>
    <line x1="19" x2="19" y1="5" y2="19"></line>
  </svg>
);

export const SlackIcon = ({ className }: TProps) => (
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
    data-lucide="slack"
    className={classNames("icon-slack stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="3" height="8" x="13" y="2" rx="1.5"></rect>
    <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
    <rect width="3" height="8" x="8" y="14" rx="1.5"></rect>
    <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
    <rect width="8" height="3" x="14" y="13" rx="1.5"></rect>
    <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
    <rect width="8" height="3" x="2" y="8" rx="1.5"></rect>
    <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
  </svg>
);

export const SlashIcon = ({ className }: TProps) => (
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
    data-lucide="slash"
    className={classNames("icon-slash stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M22 2 2 22"></path>
  </svg>
);

export const SlidersIcon = ({ className }: TProps) => (
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
    data-lucide="sliders"
    className={classNames("icon-sliders stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="4" x2="4" y1="21" y2="14"></line>
    <line x1="4" x2="4" y1="10" y2="3"></line>
    <line x1="12" x2="12" y1="21" y2="12"></line>
    <line x1="12" x2="12" y1="8" y2="3"></line>
    <line x1="20" x2="20" y1="21" y2="16"></line>
    <line x1="20" x2="20" y1="12" y2="3"></line>
    <line x1="2" x2="6" y1="14" y2="14"></line>
    <line x1="10" x2="14" y1="8" y2="8"></line>
    <line x1="18" x2="22" y1="16" y2="16"></line>
  </svg>
);

export const SmartphoneIcon = ({ className }: TProps) => (
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
    data-lucide="smartphone"
    className={classNames("icon-smartphone stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
    <path d="M12 18h.01"></path>
  </svg>
);

export const SmileIcon = ({ className }: TProps) => (
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
    data-lucide="smile"
    className={classNames("icon-smile stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" x2="9.01" y1="9" y2="9"></line>
    <line x1="15" x2="15.01" y1="9" y2="9"></line>
  </svg>
);

export const SpeakerIcon = ({ className }: TProps) => (
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
    data-lucide="speaker"
    className={classNames("icon-speaker stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
    <circle cx="12" cy="14" r="4"></circle>
    <line x1="12" x2="12.01" y1="6" y2="6"></line>
  </svg>
);

export const SquareIcon = ({ className }: TProps) => (
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
    data-lucide="square"
    className={classNames("icon-square stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
  </svg>
);

export const StarIcon = ({ className }: TProps) => (
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
    data-lucide="star"
    className={classNames("icon-star stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export const StopCircleIcon = ({ className }: TProps) => (
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
    data-lucide="stop-circle"
    className={classNames("icon-stop-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <rect width="6" height="6" x="9" y="9"></rect>
  </svg>
);

export const SunIcon = ({ className }: TProps) => (
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
    data-lucide="sun"
    className={classNames("icon-sun stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
);

export const SunriseIcon = ({ className }: TProps) => (
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
    data-lucide="sunrise"
    className={classNames("icon-sunrise stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 2v8"></path>
    <path d="m4.93 10.93 1.41 1.41"></path>
    <path d="M2 18h2"></path>
    <path d="M20 18h2"></path>
    <path d="m19.07 10.93-1.41 1.41"></path>
    <path d="M22 22H2"></path>
    <path d="m8 6 4-4 4 4"></path>
    <path d="M16 18a4 4 0 0 0-8 0"></path>
  </svg>
);

export const SunsetIcon = ({ className }: TProps) => (
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
    data-lucide="sunset"
    className={classNames("icon-sunset stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 10V2"></path>
    <path d="m4.93 10.93 1.41 1.41"></path>
    <path d="M2 18h2"></path>
    <path d="M20 18h2"></path>
    <path d="m19.07 10.93-1.41 1.41"></path>
    <path d="M22 22H2"></path>
    <path d="m16 6-4 4-4-4"></path>
    <path d="M16 18a4 4 0 0 0-8 0"></path>
  </svg>
);

export const TabletIcon = ({ className }: TProps) => (
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
    data-lucide="tablet"
    className={classNames("icon-tablet stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
    <line x1="12" x2="12.01" y1="18" y2="18"></line>
  </svg>
);

export const TagIcon = ({ className }: TProps) => (
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
    data-lucide="tag"
    className={classNames("icon-tag stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
    <path d="M7 7h.01"></path>
  </svg>
);

export const TargetIcon = ({ className }: TProps) => (
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
    data-lucide="target"
    className={classNames("icon-target stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

export const TerminalIcon = ({ className }: TProps) => (
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
    data-lucide="terminal"
    className={classNames("icon-terminal stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" x2="20" y1="19" y2="19"></line>
  </svg>
);

export const ThermometerIcon = ({ className }: TProps) => (
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
    data-lucide="thermometer"
    className={classNames("icon-thermometer stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
  </svg>
);

export const ThumbsDownIcon = ({ className }: TProps) => (
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
    data-lucide="thumbs-down"
    className={classNames("icon-thumbs-down stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M17 14V2"></path>
    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
  </svg>
);

export const ThumbsUpIcon = ({ className }: TProps) => (
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
    data-lucide="thumbs-up"
    className={classNames("icon-thumbs-up stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M7 10v12"></path>
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
  </svg>
);

export const ToggleLeftIcon = ({ className }: TProps) => (
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
    data-lucide="toggle-left"
    className={classNames("icon-toggle-left stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="12" x="2" y="6" rx="6" ry="6"></rect>
    <circle cx="8" cy="12" r="2"></circle>
  </svg>
);

export const ToggleRightIcon = ({ className }: TProps) => (
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
    data-lucide="toggle-right"
    className={classNames("icon-toggle-right stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="12" x="2" y="6" rx="6" ry="6"></rect>
    <circle cx="16" cy="12" r="2"></circle>
  </svg>
);

export const Trash2Icon = ({ className }: TProps) => (
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
    data-lucide="trash2"
    className={classNames("icon-trash2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    <line x1="10" x2="10" y1="11" y2="17"></line>
    <line x1="14" x2="14" y1="11" y2="17"></line>
  </svg>
);

export const TrashIcon = ({ className }: TProps) => (
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
    data-lucide="trash"
    className={classNames("icon-trash stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
);

export const TrelloIcon = ({ className }: TProps) => (
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
    data-lucide="trello"
    className={classNames("icon-trello stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <rect width="3" height="9" x="7" y="7"></rect>
    <rect width="3" height="5" x="14" y="7"></rect>
  </svg>
);

export const TrendingDownIcon = ({ className }: TProps) => (
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
    data-lucide="trending-down"
    className={classNames("icon-trending-down stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
    <polyline points="16 17 22 17 22 11"></polyline>
  </svg>
);

export const TrendingUpIcon = ({ className }: TProps) => (
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
    data-lucide="trending-up"
    className={classNames("icon-trending-up stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

export const TriangleIcon = ({ className }: TProps) => (
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
    data-lucide="triangle"
    className={classNames("icon-triangle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
  </svg>
);

export const TruckIcon = ({ className }: TProps) => (
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
    data-lucide="truck"
    className={classNames("icon-truck stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"></path>
    <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"></path>
    <circle cx="7" cy="18" r="2"></circle>
    <path d="M15 18H9"></path>
    <circle cx="17" cy="18" r="2"></circle>
  </svg>
);

export const TvIcon = ({ className }: TProps) => (
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
    data-lucide="tv"
    className={classNames("icon-tv stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
    <polyline points="17 2 12 7 7 2"></polyline>
  </svg>
);

export const TwitchIcon = ({ className }: TProps) => (
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
    data-lucide="twitch"
    className={classNames("icon-twitch stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
  </svg>
);

export const TwitterIcon = ({ className }: TProps) => (
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
    data-lucide="twitter"
    className={classNames("icon-twitter stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export const TypeIcon = ({ className }: TProps) => (
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
    data-lucide="type"
    className={classNames("icon-type stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="4 7 4 4 20 4 20 7"></polyline>
    <line x1="9" x2="15" y1="20" y2="20"></line>
    <line x1="12" x2="12" y1="4" y2="20"></line>
  </svg>
);

export const UmbrellaIcon = ({ className }: TProps) => (
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
    data-lucide="umbrella"
    className={classNames("icon-umbrella stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
    <path d="M12 12v8a2 2 0 0 0 4 0"></path>
    <path d="M12 2v1"></path>
  </svg>
);

export const UnderlineIcon = ({ className }: TProps) => (
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
    data-lucide="underline"
    className={classNames("icon-underline stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
    <line x1="4" x2="20" y1="20" y2="20"></line>
  </svg>
);

export const UnlockIcon = ({ className }: TProps) => (
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
    data-lucide="unlock"
    className={classNames("icon-unlock stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
  </svg>
);

export const UploadCloudIcon = ({ className }: TProps) => (
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
    data-lucide="upload-cloud"
    className={classNames("icon-upload-cloud stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="M12 12v9"></path>
    <path d="m16 16-4-4-4 4"></path>
  </svg>
);

export const UploadIcon = ({ className }: TProps) => (
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
    data-lucide="upload"
    className={classNames("icon-upload stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" x2="12" y1="3" y2="15"></line>
  </svg>
);

export const UserCheckIcon = ({ className }: TProps) => (
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
    className={classNames("icon-user-check stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <polyline points="16 11 18 13 22 9"></polyline>
  </svg>
);

export const UserMinusIcon = ({ className }: TProps) => (
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
    data-lucide="user-minus"
    className={classNames("icon-user-minus stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="22" x2="16" y1="11" y2="11"></line>
  </svg>
);

export const UserPlusIcon = ({ className }: TProps) => (
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
    className={classNames("icon-user-plus stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="19" x2="19" y1="8" y2="14"></line>
    <line x1="22" x2="16" y1="11" y2="11"></line>
  </svg>
);

export const UserXIcon = ({ className }: TProps) => (
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
    data-lucide="user-x"
    className={classNames("icon-user-x stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="17" x2="22" y1="8" y2="13"></line>
    <line x1="22" x2="17" y1="8" y2="13"></line>
  </svg>
);

export const UserIcon = ({ className }: TProps) => (
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
    data-lucide="user"
    className={classNames("icon-user stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export const UsersIcon = ({ className }: TProps) => (
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
    className={classNames("icon-users stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export const VideoOffIcon = ({ className }: TProps) => (
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
    data-lucide="video-off"
    className={classNames("icon-video-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"></path>
    <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"></path>
    <line x1="2" x2="22" y1="2" y2="22"></line>
  </svg>
);

export const VideoIcon = ({ className }: TProps) => (
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
    data-lucide="video"
    className={classNames("icon-video stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="m22 8-6 4 6 4V8Z"></path>
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
  </svg>
);

export const VoicemailIcon = ({ className }: TProps) => (
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
    data-lucide="voicemail"
    className={classNames("icon-voicemail stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="6" cy="12" r="4"></circle>
    <circle cx="18" cy="12" r="4"></circle>
    <line x1="6" x2="18" y1="16" y2="16"></line>
  </svg>
);

export const Volume1Icon = ({ className }: TProps) => (
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
    data-lucide="volume1"
    className={classNames("icon-volume1 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

export const Volume2Icon = ({ className }: TProps) => (
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
    data-lucide="volume2"
    className={classNames("icon-volume2 stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
  </svg>
);

export const VolumeXIcon = ({ className }: TProps) => (
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
    data-lucide="volume-x"
    className={classNames("icon-volume-x stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="22" x2="16" y1="9" y2="15"></line>
    <line x1="16" x2="22" y1="9" y2="15"></line>
  </svg>
);

export const VolumeIcon = ({ className }: TProps) => (
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
    data-lucide="volume"
    className={classNames("icon-volume stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
  </svg>
);

export const WatchIcon = ({ className }: TProps) => (
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
    data-lucide="watch"
    className={classNames("icon-watch stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="6"></circle>
    <polyline points="12 10 12 12 13 13"></polyline>
    <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"></path>
    <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"></path>
  </svg>
);

export const WifiOffIcon = ({ className }: TProps) => (
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
    data-lucide="wifi-off"
    className={classNames("icon-wifi-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <line x1="2" x2="22" y1="2" y2="22"></line>
    <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
    <path d="M2 8.82a15 15 0 0 1 4.17-2.65"></path>
    <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"></path>
    <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"></path>
    <path d="M5 13a10 10 0 0 1 5.24-2.76"></path>
    <line x1="12" x2="12.01" y1="20" y2="20"></line>
  </svg>
);

export const WifiIcon = ({ className }: TProps) => (
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
    data-lucide="wifi"
    className={classNames("icon-wifi stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M5 13a10 10 0 0 1 14 0"></path>
    <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
    <path d="M2 8.82a15 15 0 0 1 20 0"></path>
    <line x1="12" x2="12.01" y1="20" y2="20"></line>
  </svg>
);

export const WindIcon = ({ className }: TProps) => (
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
    data-lucide="wind"
    className={classNames("icon-wind stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
  </svg>
);

export const XCircleIcon = ({ className }: TProps) => (
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
    data-lucide="x-circle"
    className={classNames("icon-x-circle stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6"></path>
    <path d="m9 9 6 6"></path>
  </svg>
);

export const XOctagonIcon = ({ className }: TProps) => (
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
    data-lucide="x-octagon"
    className={classNames("icon-x-octagon stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
    <path d="m15 9-6 6"></path>
    <path d="m9 9 6 6"></path>
  </svg>
);

export const XSquareIcon = ({ className }: TProps) => (
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
    data-lucide="x-square"
    className={classNames("icon-x-square stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <path d="m15 9-6 6"></path>
    <path d="m9 9 6 6"></path>
  </svg>
);

export const XIcon = ({ className }: TProps) => (
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
    data-lucide="x"
    className={classNames("icon-x stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

export const YoutubeIcon = ({ className }: TProps) => (
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
    data-lucide="youtube"
    className={classNames("icon-youtube stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
    <path d="m10 15 5-3-5-3z"></path>
  </svg>
);

export const ZapOffIcon = ({ className }: TProps) => (
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
    data-lucide="zap-off"
    className={classNames("icon-zap-off stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polyline points="12.41 6.75 13 2 10.57 4.92"></polyline>
    <polyline points="18.57 12.91 21 10 15.66 10"></polyline>
    <polyline points="8 8 3 14 12 14 11 22 16 16"></polyline>
    <line x1="2" x2="22" y1="2" y2="22"></line>
  </svg>
);

export const ZapIcon = ({ className }: TProps) => (
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
    data-lucide="zap"
    className={classNames("icon-zap stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

export const ZoomInIcon = ({ className }: TProps) => (
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
    data-lucide="zoom-in"
    className={classNames("icon-zoom-in stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
    <line x1="11" x2="11" y1="8" y2="14"></line>
    <line x1="8" x2="14" y1="11" y2="11"></line>
  </svg>
);

export const ZoomOutIcon = ({ className }: TProps) => (
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
    data-lucide="zoom-out"
    className={classNames("icon-zoom-out stroke-1.5", {
      [`${className}`]: !!className,
      ["w-5 h-5 mx-auto"]: !className,
    })}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
    <line x1="8" x2="14" y1="11" y2="11"></line>
  </svg>
);
