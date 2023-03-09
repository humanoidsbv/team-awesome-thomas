import { ButtonHTMLAttributes, ReactNode } from "react";
import * as Styled from "./Button.styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: ButtonProps) => (
  <Styled.Button onClick={onClick} variant={variant} type={type} disabled={disabled}>
    {children}
  </Styled.Button>
);
