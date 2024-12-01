import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { TextInput, TTextInput } from "src/shared/ui/TextInput";
import { TPersonId } from "src/shared/ui/TextInputSearch/TextInputSearch";
import styles from "../TextInputSearch/TextInputSearch.module.scss";

type TTextInputSelect = Omit<TTextInput, "onChange" | "value"> & {
  data: TPersonId[];
  value: TPersonId | TPersonId[];
  onChange: (value: TPersonId | TPersonId[]) => void;
  multiple?: boolean;
};

export const TextInputSelect = ({ data, value, multiple = false, ...props }: TTextInputSelect) => {
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
    const eventValue = event.target.value;
    let searchValue = eventValue;
    
    if(multiple) {
      const eventItems = eventValue.split(", ");
      searchValue = (eventItems.at(-1) || "").trim();

      if(Array.isArray(value)) {
        const hintValueFio = value.map((item) => item.fio);

        function findUniqueValues(arr1: string[], arr2: string[]) {
          const uniqueInArr1 = arr1.filter(value => !arr2.includes(value));
          const uniqueInArr2 = arr2.filter(value => !arr1.includes(value));

          return [...uniqueInArr1, ...uniqueInArr2];
        }

        const uniqueValues = findUniqueValues(hintValueFio, eventItems);
      }
    }

    setSearchTerm(searchValue);
    if (!multiple && props.onChange) {
      const person = {
        id: "",
        fio: eventValue,
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
    if (multiple) {
      const selectedValues = Array.isArray(value) ? [...value] : [];
      const index = selectedValues.findIndex(item => item.id === person.id);
      if (index > -1) {
        selectedValues.splice(index, 1);
      } else {
        selectedValues.push(person);
      }
      props.onChange(selectedValues);
    } else {
      setSearchTerm(person.fio);
      if (props.onChange) {
        props.onChange(person);
      }
    }
  };

  const displayValue = multiple
    ? Array.isArray(value)
      ? value.map(v => v.fio).join(", ")
      : ""
    : (value as TPersonId).fio;

  return (
    <div className={styles.layout}>
      <TextInput
        {...props}
        value={displayValue}
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
              const isSelected = multiple && Array.isArray(value) && value.some(v => v.id === person.id);
              return (
                <div
                  key={person.id}
                  role="button"
                  tabIndex={0}
                  className={`${styles.item} ${isSelected ? styles.selected : ""}`}
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