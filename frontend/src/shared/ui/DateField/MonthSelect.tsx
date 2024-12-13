import {useEffect, useState} from "react";
import {getMonthName} from "src/shared/ui/DateField/lib/helpers/getMonthName";
import { ValueSelect } from "./ValueSelect";

type TProps = {
  value: number;
  date: Date;
  onChange: (value:number) => void;
}

export const MonthSelect = ({ date, value: initValue, onChange }: TProps) => {
  const [value, setValue] = useState(getMonthName({monthIndex: initValue, date}));
  const months = Array.from({ length: 12 }, (_, i) => getMonthName({monthIndex: i, date}));

  const handleValueChange = (newValue: string | number) => {
    const monthIndex = months.indexOf(newValue as string);
    onChange(monthIndex);
  };

  useEffect(() => {
    setValue(getMonthName({monthIndex: initValue, date}));
  }, [initValue]);

  return (
    <ValueSelect
      initialValue={value}
      options={months}
      onValueChange={handleValueChange}
      classNameBtn="w-28"
    />
  );
};
