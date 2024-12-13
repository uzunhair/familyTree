import React, { useEffect, useId, useRef, useState, useMemo } from "react";
import { MonthSelect } from "src/shared/ui/DateField/MonthSelect";
import { YearSelect } from "src/shared/ui/DateField/YearSelect";
import styles from "./DateField.module.scss";

type TProps = {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
};

export const DateField = ({ label, value, onChange }: TProps) => {
  const id = useId();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const [selectedDate, setSelectedDate] = useState(() => {
    if (value) {
      const [year, month, day] = value.split("-");
      return { year: parseInt(year, 10), month: parseInt(month, 10) - 1, day: parseInt(day, 10) };
    }
    return { year, month, day };
  });

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const [year, month, day] = value.split("-");
      setSelectedDate({ year: parseInt(year, 10), month: parseInt(month, 10) - 1, day: parseInt(day, 10) });
    }
  }, [value]);

  const handleInputChange = (event: any) => {
    const newDate = event.target.value;
    const [year, month, day] = newDate.split("-");

    if (year) {
      setSelectedDate({ year: parseInt(year, 10), month: parseInt(month, 10) - 1, day: parseInt(day, 10) });
    }
    if (onChange && year) {
      onChange(newDate);
    }
  };

  const numberDaysInMonth = (year: number, month: number) => {
    const createDate = new Date(year, month + 1, 0);
    return createDate.getDate();
  };

  const days = useMemo(() => numberDaysInMonth(selectedDate.year, selectedDate.month), [selectedDate.year, selectedDate.month]);
  const skip = useMemo(() => new Date(selectedDate.year, selectedDate.month, 1).getDay(), [selectedDate.year, selectedDate.month]);

  const weekName = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const weekNumber = [6, 0, 1, 2, 3, 4, 5];
  const daysOfWeek = useMemo(() => Array.from({ length: weekNumber[skip] }, (_, i) => i + 1), [skip]);

  const handleMonthChange = (month: number) => {
    setSelectedDate((prevState) => ({ ...prevState, month }));
  };

  const handleYearChange = (year: number) => {
    setSelectedDate((prevState) => ({ ...prevState, year }));
  };

  const handleDayChange = (day: number) => {
    setSelectedDate((prevState) => ({ ...prevState, day }));
    const dateString = `${selectedDate.year}-${(selectedDate.month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    setIsCalendarVisible(false);

    if (onChange) {
      onChange(dateString);
    }
  };

  const handleDown = () => {
    const { month, year } = selectedDate;
    let newMonth = month - 1;
    let newYear = year;
    if (month < 1) {
      newMonth = 11;
      newYear = year - 1;
    }

    setSelectedDate((prevState) => ({ ...prevState, year: newYear, month: newMonth }));
  };

  const handleUp = () => {
    const { month, year } = selectedDate;
    let newMonth = month + 1;
    let newYear = year;
    if (month === 11) {
      newMonth = 0;
      newYear = year + 1;
    }

    setSelectedDate((prevState) => ({ ...prevState, year: newYear, month: newMonth }));
  };

  const list = useMemo(() => {
    const daysList = [];
    for (let i = 1; i <= days; i++) {
      daysList.push(
        <div
          key={i}
          onClick={() => handleDayChange(i)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleDayChange(i);
            }
          }}
          className={styles.day}
          role="button"
          tabIndex={0}
        >
          {i}
        </div>
      );
    }
    return daysList;
  }, [days, handleDayChange]);

  const handleClickOutside = (event: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
      setIsCalendarVisible(false);
    }
  };

  useEffect(() => {
    if (isCalendarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarVisible]);

  const inputValue = `${selectedDate.year}-${(selectedDate.month + 1).toString().padStart(2, "0")}-${selectedDate.day.toString().padStart(2, "0")}`;

  return (
    <div className={styles.layout}>
      {label && <label className="inline-block mb-2 cursor-pointer" htmlFor={`textField${id}`}>{label}</label>}
      <input
        type="date"
        id={`textField${id}`}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsCalendarVisible(true)}
        className="
        transition duration-200
        ease-in-out
        w-full
        text-sm
        border-slate-200
        shadow-sm
        rounded-md
        placeholder:text-slate-400/90
        focus:ring-4
        focus:ring-primary
        focus:ring-opacity-20
        focus:border-primary
        focus:border-opacity-40
      "
      />
      {isCalendarVisible && (
        <div className={styles.calendar} ref={calendarRef}>
          <div className="flex gap-3 mb-2 items-center">
            <button type="button" onClick={handleDown} className={styles.upDownBtn}>
              <svg width="11" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fillRule="nonzero"></path>
              </svg>
            </button>
            <MonthSelect onChange={handleMonthChange} value={selectedDate.month} />
            <YearSelect fullYear={selectedDate.year} onChange={handleYearChange} />
            <button type="button" onClick={handleUp} className={styles.upDownBtn}>
              <svg width="11" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fillRule="nonzero"></path>
              </svg>
            </button>
          </div>
          <div className={styles.days}>
            {weekName.map((week) => (
              <div key={week} className={styles.week}>
                {week}
              </div>
            ))}
            {daysOfWeek.map((item) => (
              <div key={item} />
            ))}
            {list}
          </div>
        </div>
      )}
    </div>
  );
};
