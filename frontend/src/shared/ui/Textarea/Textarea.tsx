import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useId,
  useState,
  useEffect,
} from "react";

export type TTextInput = InputHTMLAttributes<HTMLTextAreaElement> & {
  value?: string;
  label?: string;
  rows?: number;
  placeholder?: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  error?: any;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TTextInput>(
  ({ label, placeholder = label, className, onChange, error, value: propValue, ...props }, ref) => {
    const id = useId();
    const [value, setValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
          <label htmlFor={`textField${id}`} className="inline-block mb-2">
            {label}
          </label>
        )}
        <textarea
          {...props}
          id={`textField${id}`}
          placeholder={placeholder}
          ref={ref}
          value={value}
          onChange={handleChange}
          autoComplete="off"
          className="
         [&[readonly]]:bg-slate-100
         [&[readonly]]:cursor-not-allowed
         border-slate-200
         disabled:bg-slate-100
         disabled:cursor-not-allowed
         duration-200
         ease-in-out
         focus:border-opacity-40
         focus:border-primary
         focus:ring-4
         focus:ring-opacity-20
         focus:ring-primary
         form-control
         group-[.form-inline]:flex-1
         group-[.input-group]:[&:not(:first-child)]:border-l-transparent
         group-[.input-group]:first:rounded-l
         group-[.input-group]:last:rounded-r
         group-[.input-group]:rounded-none
         group-[.input-group]:z-10
         placeholder:text-slate-400/90
         rounded-md
         shadow-sm
         text-sm
         transition
         w-full
        "
        />
        {error && <div className="mt-2 text-danger">{error.message}</div>}
      </div>
    );
  }
);

Textarea.displayName = "TextInput";
