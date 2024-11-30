import {ChangeEvent, useEffect, useState} from "react";
import {TextInput, TTextInput} from "src/shared/ui/TextInput";
import styles from "./TextInputSearch.module.scss";

export type TPersons = {
  id: string;
  fio: string;
}

type TTextInputSearch = TTextInput & {
  data: TPersons[];
}

export const TextInputSearch = ({data, ...props}:TTextInputSearch) => {
  const [filteredData, setFilteredData] = useState<TPersons[]>([]);
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
      props.onChange(event);
    }
  };
  
  useEffect(() => {
    const filtered = data.filter(item =>
      item.fio.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);
  
  return (
    <div className={styles.layout}>
      <TextInput 
        {...props}
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
                <div key={person.id} className={styles.item}>
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