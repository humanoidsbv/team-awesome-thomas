import { useState } from "react";
import * as Styled from "./Button.styled";
import { ReactComponent as PlusIcon } from "../../../public/icons/plus-icon.svg";

interface ButtonProps {
  label: string;
  href: string;
}

export const Button = ({ label, href }: ButtonProps) => {
  return (
    <Styled.ButtonBox href={href}>
      <PlusIcon />
      <Styled.ButtonLabel>{label}</Styled.ButtonLabel>
    </Styled.ButtonBox>
  );
};
