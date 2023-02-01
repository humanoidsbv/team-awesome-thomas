import { useState } from "react";
import * as Styled from "./Button.styled";
import { ReactComponent as PlusIcon } from "../../../public/icons/plus-icon.svg";
import { ReactComponent as CloseIcon } from "../../../public/icons/close.svg";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "outline";
  icon?: "plus" | "close";
  href?: string;
}

export const Button = ({ label, variant, href, icon, onClick }: ButtonProps) => {
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
      {label}
    </Styled.ButtonBox>
  );
};
