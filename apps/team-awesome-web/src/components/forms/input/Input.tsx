import * as Styled from "./Input.styled";
import { useState, ReactNode } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | ReactNode;
  type: string;
  value?: ReactNode | string;
  width?: string;
}

export const Input = ({ name, label, onChange, placeholder, type, value, width }: InputProps) => {
  return (
    <Styled.InputWrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Styled.InputWrapper>
  );
};
