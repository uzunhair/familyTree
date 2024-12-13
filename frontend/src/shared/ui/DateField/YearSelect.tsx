import { useMemo } from "react";
import styles from "./DateField.module.scss";
import { ValueSelect } from "./ValueSelect";

type TProps = {
  fullYear: number;
  onChange: (value: number) => void;
};

const generateYears = (count: number) => {
  const date = new Date();
  const startYear = date.getFullYear();
  return Array.from({ length: count }, (_, i) => startYear - i);
};

export const YearSelect = ({ fullYear, onChange }: TProps) => {
  const initialYears = useMemo(() => generateYears(20), []);

  const handleValueChange = (newValue: string | number) => {
    onChange(Number(newValue));
  };

  return (
    <ValueSelect
      initialValue={fullYear}
      options={initialYears}
      generateOptions={generateYears}
      onValueChange={handleValueChange}
      className={styles.year}
    />
  );
};
