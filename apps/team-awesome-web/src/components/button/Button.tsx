import { useState } from "react";
import * as Styled from "./Button.styled";
import { ReactComponent as PlusIcon } from "../../../public/icons/plus-icon.svg";
import { ReactComponent as CloseIcon } from "../../../public/icons/close.svg";

interface ButtonProps {
  children: string;
  icon?: "plus" | "close";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "outline";
}

export const Button = ({ children, icon, onClick, variant }: ButtonProps) => {
  const getIcon = () => {
    switch (icon) {
      case "plus":
        return <PlusIcon />;
        break;
      case "close":
        return <CloseIcon />;
        break;
      default:
        return;
    }
  };

  return (
    <Styled.ButtonBox onClick={onClick} variant={variant}>
      {getIcon()}
      {children}
    </Styled.ButtonBox>
  );
};
