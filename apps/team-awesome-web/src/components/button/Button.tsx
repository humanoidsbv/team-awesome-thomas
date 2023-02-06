import { useState, ReactNode } from "react";
import * as Styled from "./Button.styled";
import { ReactComponent as CloseIcon } from "../../../public/icons/close.svg";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
}

export const Button = ({ children, icon, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <Styled.ButtonBox onClick={onClick} variant={variant}>
      {icon}
      {children}
    </Styled.ButtonBox>
  );
};
