import React, { ChangeEvent, MouseEvent, KeyboardEvent, useEffect, useState } from "react";
import { getDeclensionOfMatches } from "src/shared/lib/helpers/getDeclensionOfMatches";
import { setPersonId } from "src/shared/lib/helpers/setPersonId";
import { TextInput, TTextInput } from "src/shared/ui/TextInput";
import { TInputItem } from "src/shared/ui/TextInputSearch/TextInputSearch";
import styles from "../TextInputSearch/TextInputSearch.module.scss";

type TTextInputSelect = Omit<TTextInput, "onChange" | "value"> & {
  data: TInputItem[];
  value: TInputItem | TInputItem[];
  inputValue?: string;
  onChange: (value: TInputItem | TInputItem[] | null) => void;
  multiple?: boolean;
  onlySelect?: boolean;
};

export const TextInputSelect = ({
  data,
  value,
  className,
  onlySelect,
  multiple: multipleProp = false,
  inputValue: defaultInputValue = "",
  ...props
}: TTextInputSelect) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedFromData, setSelectedFromData] = useState<TInputItem[]>([]);
  const multiple = multipleProp && Array.isArray(value);
  const id = setPersonId(inputValue);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setInputValue(value);

    if (!multiple) {
      const newValue = value ? { id, title: value } : null;
      props.onChange(newValue);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (multiple) {
        const findItem = data.find((item) => item.title === inputValue);
        const isUnique = value.some((item) => item.title === inputValue);
        const outValue = findItem || { id, title: inputValue };
        if (!isUnique && outValue.title) {
          props.onChange([...value, outValue]);
          setInputValue("");
        }
      }
    }
  };

  const handleItemDelete = (person: TInputItem) => {
    const selectedValues = value as TInputItem[];
    const index = selectedValues.findIndex((item) => item.title === person.title);
    if (index > -1) {
      selectedValues.splice(index, 1);
    }
    props.onChange(selectedValues);
  };

  const handleItemClick = (event: MouseEvent, person: TInputItem) => {
    event.preventDefault();
    if (multiple) {
      const selectedValues = Array.isArray(value) ? [...value] : [];
      const index = selectedValues.findIndex((item) => item.title === person.title);
      if (index > -1) {
        selectedValues.splice(index, 1);
      } else {
        selectedValues.push(person);
      }
      props.onChange(selectedValues);
    } else {
      setInputValue(person.title);
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
    const filter = data.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    const result = onlySelect ? data : filter;
    setSelectedFromData(result);
  }, [inputValue, data]);

  useEffect(() => {
    setInputValue(defaultInputValue);
  }, [defaultInputValue]);

  return (
    <div className={`${styles.layout} ${className}`}>
      <TextInput
        {...props}
        type={onlySelect ? "button" : props.type}
        value={inputValue}
        onChange={handleChangeInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        {!!selectedFromData.length && isFocused && (
          <div className={styles.dropdown}>
            {!onlySelect && (
              <>
                <div className="p-2 px-3 font-medium">
                  {getDeclensionOfMatches(selectedFromData.length)}
                </div>
                <div className="h-px bg-slate-200/60 dark:bg-darkmode-400" />
              </>
            )}
            <div className={styles.scroll}>
              {selectedFromData.map((person) => {
                const isSelected =
                  multiple && Array.isArray(value) && value.some((v) => v.id === person.id);
                return (
                  <div
                    key={person.id}
                    role="button"
                    tabIndex={0}
                    className={`${styles.item} ${isSelected ? styles.selected : ""}`}
                    onMouseDown={(event) => handleItemClick(event, person)}
                  >
                    {person.title}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </TextInput>

      {multiple && !!value.length && (
        <div className="flex mt-1.5 gap-1 flex-wrap">
          {value.map((v) => {
            return (
              <button
                key={v.title + v.id}
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
            "
              >
                {v.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="x"
                  className="lucide lucide-x stroke-1.5 w-5 h-5 mx-auto block"
                >
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
