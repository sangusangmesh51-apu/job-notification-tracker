import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const PrimaryButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="ds-button ds-button--primary" {...rest}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="ds-button ds-button--secondary" {...rest}>
      {children}
    </button>
  );
};

