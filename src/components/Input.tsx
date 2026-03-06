import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

export const Input = ({ label, helperText, id, ...rest }: InputProps) => {
  const inputId = id ?? `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="ds-input">
      <label className="ds-input__label" htmlFor={inputId}>
        {label}
      </label>
      <input id={inputId} className="ds-input__field" {...rest} />
      {helperText ? <span className="ds-input__helper">{helperText}</span> : null}
    </div>
  );
};

