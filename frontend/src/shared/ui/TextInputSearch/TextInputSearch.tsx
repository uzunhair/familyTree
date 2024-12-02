import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { TextInput, TTextInput } from "src/shared/ui/TextInput";
import styles from "./TextInputSearch.module.scss";

export type TPersonId = {
  id: string;
  fio: string;
}

type TTextInputSearch = TTextInput & {
  data: TPersonId[];
  onChange: (value:string) => void;
}

export const TextInputSearch = ({ data, ...props }: TTextInputSearch) => {
  const [filteredData, setFilteredData] = useState<TPersonId[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  useEffect(() => {
    const filtered = data.filter(item =>
      item.fio.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleItemClick = (event: MouseEvent, person: TPersonId) => {
    event.preventDefault();
    setSearchTerm(person.fio);
    if (props.onChange) {
      props.onChange(person.fio);
    }
  };

  return (
    <div className={styles.layout}>
      <TextInput
        {...props}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        classNameInputContainer={styles.layout}
      >
        {!!filteredData.length && searchTerm && isFocused && (
          <div className={styles.dropdown}>
            <div className="p-2 px-3 font-medium">
              {filteredData.length} совпадений
            </div>
            <div className="h-px bg-slate-200/60 dark:bg-darkmode-400" />
            <div className={styles.scroll}>
              {filteredData.map(person => {
                return (
                  <div
                    key={person.id}
                    role="button"
                    tabIndex={0}
                    className={styles.item}
                    onMouseDown={(event) => handleItemClick(event, person)}
                  >
                    {person.fio}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </TextInput>
    </div>
  );
};
