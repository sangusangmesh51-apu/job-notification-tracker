import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <section className="ds-card">{children}</section>;
};

