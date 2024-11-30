import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, forwardRef, useId, useState, useEffect } from "react";

export type TTextInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error?: any;
}

export const TextInput = forwardRef<HTMLInputElement, TTextInput>(({ 
  label, 
  placeholder = label, 
  className, 
  onChange, 
  error, 
  value: propValue,
  ...props
}, ref) => {
  const id = useId();

  const [value, setValue] = useState(propValue || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    setValue(propValue || "");
  }, [propValue]);

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={`textField${id}`}
          className="inline-block mb-2"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        id={`textField${id}`}
        type="text"
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={handleChange}
        className="
          transition duration-200
          ease-in-out
          w-full
          text-sm
          border-slate-200
          shadow-sm
          rounded-md
          placeholder:text-slate-400/90
          focus:ring-4
          focus:ring-primary
          focus:ring-opacity-20
          focus:border-primary
          focus:border-opacity-40
        "
      />
      {error && (<div className="mt-2 text-danger">{error.message}</div>)}
    </div>
  );
});

TextInput.displayName = "TextInput";
