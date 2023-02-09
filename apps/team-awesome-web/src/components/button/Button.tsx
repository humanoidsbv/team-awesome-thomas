import { useState, ReactNode } from "react";
import * as Styled from "./Button.styled";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
}

export const Button = ({
  children,
  icon,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) => (
  <Styled.Button onClick={onClick} variant={variant} type={type}>
    {icon}
    {children}
  </Styled.Button>
);
