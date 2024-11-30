import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import {setPersonId} from "src/shared/lib/helpers/setPersonId";
import { TextInput, TTextInput } from "src/shared/ui/TextInput";
import {TPersonId} from "src/shared/ui/TextInputSearch/TextInputSearch";
import styles from "../TextInputSearch/TextInputSearch.module.scss";

type TTextInputSelect = Omit<TTextInput, "onChange" | "value"> & {
  data: TPersonId[];
  value: TPersonId;
  onChange: (value:TPersonId) => void;
}

export const TextInputSelect = ({ data, value, ...props }: TTextInputSelect) => {
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
    const value = event.target.value;
    setSearchTerm(value);
    if (props.onChange) {
      const person = {
        id: setPersonId(value),
        fio: value,
      };
      props.onChange(person);
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
      props.onChange(person);
    }
  };

  return (
    <div className={styles.layout}>
      <TextInput
        {...props}
        value={value.fio}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
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
    </div>
  );
};
