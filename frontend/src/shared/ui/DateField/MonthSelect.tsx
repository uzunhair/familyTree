import { useMemo } from "react";
import { getMonthName } from "src/shared/ui/DateField/lib/helpers/getMonthName";
import { ValueSelect } from "./ValueSelect";

type TProps = {
  value: number;
  onChange: (value: number) => void;
};

export const MonthSelect = ({ value: initValue, onChange }: TProps) => {
  const date = new Date();
  const months = useMemo(
    () => Array.from({ length: 12 }, (_, i) => getMonthName({ monthIndex: i, date })),
    [date]
  );

  const handleValueChange = (newValue: string | number) => {
    const monthIndex = months.indexOf(newValue as string);
    onChange(monthIndex);
  };

  return (
    <ValueSelect
      initialValue={getMonthName({ monthIndex: initValue, date })}
      options={months}
      onValueChange={handleValueChange}
      classNameBtn="w-28"
    />
  );
};
