import React, { ChangeEvent, UIEvent, useEffect, useRef, useState } from "react";
import styles from "./DateField.module.scss";

interface ValueSelectProps {
  initialValue: string | number;
  options: (string | number)[];
  generateOptions?: (start: number, count: number) => (string | number)[];
  onValueChange: (value: number|string) => void;
  className?: string;
  classNameBtn?: string;
}

export const ValueSelect = ({
  initialValue,
  options,
  generateOptions,
  onValueChange,
  className = "",
  classNameBtn = ""
}: ValueSelectProps) => {
  const [value, setValue] = useState(initialValue);
  const [show, setShow] = useState(false);
  const [allOptions, setAllOptions] = useState(options);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const handleScroll = (event: UIEvent<HTMLSelectElement>) => {
    const { currentTarget } = event;
    const bottom = currentTarget.scrollHeight - Math.ceil(currentTarget.scrollTop) === currentTarget.clientHeight;
    if (bottom && generateOptions) {
      const lastOption = allOptions[allOptions.length - 1] as number;
      const newOptions = generateOptions(lastOption - 1, 100);
      setAllOptions((prevOptions) => [...prevOptions, ...newOptions]);
    }
  };

  const handleInputFocus = () => {
    setShow((prevShow) => !prevShow);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onValueChange(newValue);
    setShow(false);
  };

  const handleSelectBlur = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show && selectRef.current) {
      selectRef.current.focus();
    }
  }, [show]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div className={`${styles.selectLayout} ${className}`}>
      <button
        onClick={handleInputFocus}
        className={`${styles.selectBtn} ${show ? "pointer-events-none" : "pointer-events-auto"} ${classNameBtn}`}
        type="button"
      >
        {value}
      </button>
      {show && (
        <select
          size={10}
          ref={selectRef}
          onScroll={handleScroll}
          onBlur={handleSelectBlur}
          onChange={handleSelectChange}
          value={value}
          className={`${styles.selectForm} disabled:bg-slate-100 disabled:cursor-not-allowed [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md p-0 focus:ring-0 focus:ring-primary focus:ring-opacity-20 focus:border-gray-300 focus:border-opacity-20`}
        >
          {allOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
