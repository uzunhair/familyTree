import React, { ChangeEvent, MouseEvent, KeyboardEvent, useEffect, useState } from "react";
import { TextInput, TTextInput } from "src/shared/ui/TextInput";
import { TPersonId } from "src/shared/ui/TextInputSearch/TextInputSearch";
import styles from "../TextInputSearch/TextInputSearch.module.scss";

type TTextInputSelect = Omit<TTextInput, "onChange" | "value"> & {
  data: TPersonId[];
  value: TPersonId | TPersonId[];
  inputValue?: string;
  onChange: (value: TPersonId | TPersonId[]) => void;
  multiple?: boolean;
};

export const TextInputSelect = ({ 
  data, 
  value, 
  multiple: multipleProp = false, 
  inputValue: defaultInputValue = "",
  ...props 
}: TTextInputSelect) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedFromData, setSelectedFromData] = useState<TPersonId[]>([]);
  const multiple = multipleProp && Array.isArray(value);
  
  const handleChangeInput  = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setInputValue(value);

    if(!multiple) {
      props.onChange({ id: "", fio: value });
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if(multiple) {
        const findItem = data.find(item => item.fio === inputValue);
        const isUnique = value.some(item => item.fio === inputValue);
        const outValue = findItem || {id: "", fio: inputValue};
        if (!isUnique && outValue.fio) {
          props.onChange([...value, outValue]);
          setInputValue("");
        }
      }
    }
  };

  const handleItemDelete = (person: TPersonId) => {
    const selectedValues = value as TPersonId[];
    const index = selectedValues.findIndex(item => item.fio === person.fio);
    if (index > -1) {
      selectedValues.splice(index, 1);
    }
    props.onChange(selectedValues);
  };

  const handleItemClick = (event: MouseEvent, person: TPersonId) => {
    event.preventDefault();
    if (multiple) {
      const selectedValues = Array.isArray(value) ? [...value] : [];
      const index = selectedValues.findIndex(item => item.fio === person.fio);
      if (index > -1) {
        selectedValues.splice(index, 1);
      } else {
        selectedValues.push(person);
      }
      props.onChange(selectedValues);
    } else {
      setInputValue(person.fio);
      props.onChange(person);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const searchResults = data.filter(item => item.fio.toLowerCase().includes(inputValue.toLowerCase()));
    setSelectedFromData(searchResults);
  }, [inputValue, data]);

  useEffect(() => {
    setInputValue(defaultInputValue);
  }, [defaultInputValue]);

  return (
    <div className={styles.layout}>
      <TextInput
        {...props}
        value={inputValue}
        onChange={handleChangeInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        icon={
          <>
            {multiple ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="users"
                className="lucide lucide-users stroke-1.5 w-5 h-5 mx-auto block">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            ): (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                data-lucide="user" className="lucide lucide-user stroke-1.5 w-5 h-5 mx-auto block">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
          </>
        }
      >
        {!!selectedFromData.length && isFocused && (
          <div className={styles.dropdown}>
            <div className="p-2 px-3 font-medium">
              {selectedFromData.length} совпадений
            </div>
            <div className="h-px bg-slate-200/60 dark:bg-darkmode-400"/>
            <div className={styles.scroll}>
              {selectedFromData.map(person => {
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
      </TextInput>

      {multiple && !!value.length && (
        <div className="flex mt-1.5 gap-1 flex-wrap">
          {value.map(v => {
            return (
              <button
                key={v.fio + v.id}
                title={v.id ? `ID пользователя: ${v.id}` : "Пользователь еще не добавлен"}
                onClick={() => handleItemDelete(v)}
                className="
                  transition
                  [&:hover:not(:disabled)]:bg-opacity-90
                  [&:hover:not(:disabled)]:bg-slate-100
                  [&:hover:not(:disabled)]:border-opacity-90
                  [&:hover:not(:disabled)]:border-slate-100
                  [&:not(button)]:text-center
                  border
                  border-secondary/70
                  cursor-pointer
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  duration-200
                  focus
                  focus-visible:outline-none
                  inline-flex
                  items-center
                  p-1
                  pl-2
                  rounded-md
                  text-slate-500
            ">
                {v.fio}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  data-lucide="x" className="lucide lucide-x stroke-1.5 w-5 h-5 mx-auto block">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
