type TPros = {
  date: Date;
  monthIndex: number;
};

export const getMonthName = ({ monthIndex, date }: TPros) => {
  date.setMonth(monthIndex);
  const monthName = date.toLocaleString("ru-RU", { month: "long" });
  return monthName.charAt(0).toUpperCase() + monthName.slice(1);
};
