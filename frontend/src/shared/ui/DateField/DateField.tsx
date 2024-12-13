import {useState} from "react";
import {MonthSelect} from "src/shared/ui/DateField/MonthSelect";
import {YearSelect} from "src/shared/ui/DateField/YearSelect";
import styles from "./DateField.module.scss";

type TProps = {
  label?: string;
  onDateChange?: (value: string) => void;
}

export const DateField = ({label, onDateChange}: TProps) => {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const [selectedDate, setSelectedDate] = useState({year: fullYear, month, day});
  const [inputValue, setInputValue] = useState(`${selectedDate.year}-${(selectedDate.month + 1).toString().padStart(2, "0")}-${selectedDate.day}`);

  const handleDateChange = (event: any) => {
    const newDate = event.target.value;
    const [year, month, day] = newDate.split("-");

    setInputValue(newDate);

    if(year) {
      setSelectedDate({year, month, day});
    }
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const numberDaysInMonth = (year: number, month: number) => {
    const createDate = new Date(year, month + 1, 0);
    return createDate.getDate();
  };

  const days = numberDaysInMonth(selectedDate.year, selectedDate.month);
  const skip = new Date(selectedDate.year, selectedDate.month, 1).getDay();

  const weekName = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const weekNumber = [6, 0, 1, 2, 3, 4, 5];
  const daysOfWeek = Array.from({length: weekNumber[skip]}, (_, i) => i + 1);

  const handleMonthChange = (month: number) => {
    setSelectedDate(prevState => ({...prevState, month}));
  };

  const handleYearChange = (year: number) => {
    setSelectedDate(prevState => ({...prevState, year}));
  };

  const handleDayChange = (day: number) => {
    setSelectedDate(prevState => ({...prevState, day}));
  };

  const handleDown = () => {
    const {month, year} = selectedDate;
    let newMonth = month - 1;
    let newYear = year;
    if (month < 1) {
      newMonth = 11;
      newYear = year - 1;
    }

    setSelectedDate(prevState => ({...prevState, year: newYear, month: newMonth}));
  };

  const handleUp = () => {
    const {month, year} = selectedDate;
    let newMonth = month + 1;
    let newYear = year;
    if (month === 11) {
      newMonth = 0;
      newYear = year + 1;
    }

    setSelectedDate(prevState => ({...prevState, year: newYear, month: newMonth}));
  };

  const list = [];
  for (let i = 1; i <= days; i++) {
    list.push(
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

  return (
    <div className={styles.layout}>
      {label && <label>{label}</label>}
      <input
        type="date"
        value={inputValue}
        onChange={handleDateChange}
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
        "/>
      <div className={styles.calendar}>
        <div className="flex gap-3 mb-2 items-center">
          <button type="button" onClick={handleDown} className={styles.upDownBtn}>
            <svg width="11" height="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fillRule="nonzero"></path>
            </svg>
          </button>
          <MonthSelect date={date} onChange={handleMonthChange} value={selectedDate.month}/>
          <YearSelect fullYear={selectedDate.year} onChange={handleYearChange}/>
          <button type="button" onClick={handleUp} className={styles.upDownBtn}>
            <svg width="11" height="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fillRule="nonzero"></path>
            </svg>
          </button>
        </div>
        <div className={styles.days}>
          {weekName.map(week => <div key={week} className={styles.week}>{week}</div>)}
          {daysOfWeek.map(item => <div key={item}/>)}
          {list}
        </div>
      </div>
    </div>
  );
};