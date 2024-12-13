import {useEffect, useState} from "react";
import styles from "./DateField.module.scss";
import { ValueSelect } from "./ValueSelect";

type TProps = {
  fullYear: number;
  onChange: (value:number) => void;
}

const generateYears = (startYear: number, count: number) => {
  return Array.from({ length: count }, (_, i) => startYear - i);
};

export const YearSelect = ({fullYear, onChange}:TProps) => {
  const [value, setValue] = useState(fullYear);
  const initialYears = generateYears(fullYear, 20);

  const handleValueChange = (newValue: string | number) => {
    onChange(Number(newValue));
  };

  useEffect(() => {
    setValue(fullYear);
  }, [fullYear]);

  return (
    <ValueSelect
      initialValue={value}
      options={initialYears}
      generateOptions={generateYears}
      onValueChange={handleValueChange}
      className={styles.year}
    />
  );
};
