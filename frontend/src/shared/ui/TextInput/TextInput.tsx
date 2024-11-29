import {InputHTMLAttributes, ChangeEvent, useId, forwardRef, useState} from "react";

type TTextInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  className?: string;
  value?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TTextInput>(({ label, placeholder = label, className, ...props }, ref) => {
  const id = useId();

  const [value, setValue] = useState(props.value || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        id={id}
        type="text"
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={handleChange}
        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10"
      />
    </div>
  );
});

// Добавляем displayName для отладки
TextInput.displayName = "TextInput";