import React, { ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { Components, useInputContext } from "leva/plugin";
import { InputContainer, StyledInput } from "leva/src/components/ValueInput/StyledInput";
import { getDeclensionOfMatches } from "src/shared/lib/helpers/getDeclensionOfMatches";
import styles from "./LevaSearch.module.scss";
import { TextInputProps } from "../lib/helper/levaSearch";

const { Row, Label } = Components;

export function LevaSearch() {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const props = useInputContext<TextInputProps>();
  const { label, displayValue, onUpdate, onChange, settings, emitOnEditEnd, emitOnEditStart } =
    props;

  const update = useCallback(
    (fn: (value: string) => void) => (event: any) => {
      const _value = event.currentTarget.value;
      fn(_value);
    },
    []
  );

  const [filteredData, setFilteredData] = useState<string[]>([]);
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
    if (onChange) {
      onChange(event.target.value);
      update(onChange);
    }
  };

  const handleItemClick = (event: MouseEvent, person: string) => {
    event.preventDefault();
    setSearchTerm(person);
    if (onChange) {
      onChange(person);
    }
  };

  useEffect(() => {
    const filtered = settings.options.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, settings.options]);

  useEffect(() => {
    const ref = inputRef.current;
    const _onUpdate = update((value) => {
      onUpdate(value);
      emitOnEditEnd();
    });
    ref?.addEventListener("blur", _onUpdate);
    return () => ref?.removeEventListener("blur", _onUpdate);
  }, [update, onUpdate, emitOnEditEnd]);

  const onKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        update(onUpdate)(event);
      }
    },
    [update, onUpdate]
  );

  return (
    <Row input className={styles.row}>
      <Label>{label}</Label>
      <div className={styles.layout}>
        <InputContainer>
          <StyledInput
            // @ts-ignore
            ref={inputRef}
            value={displayValue}
            onKeyPress={onKeyPress}
            onFocus={() => {
              handleFocus();
              emitOnEditStart();
            }}
            autoComplete="off"
            spellCheck="false"
            // onKeyDown={onKeyDown}
            // disabled={disabled}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </InputContainer>
        {!!filteredData.length && searchTerm && isFocused && (
          <div className={styles.dropdown}>
            <div className="p-1 px-2">{getDeclensionOfMatches(filteredData.length)}</div>
            <div className="h-px bg-slate-200/60 dark:bg-darkmode-400" />
            <div className={styles.scroll}>
              {filteredData.map((person) => {
                return (
                  <div
                    key={person}
                    role="button"
                    tabIndex={0}
                    className={styles.item}
                    onMouseDown={(event) => handleItemClick(event, person)}
                  >
                    {person}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Row>
  );
}
