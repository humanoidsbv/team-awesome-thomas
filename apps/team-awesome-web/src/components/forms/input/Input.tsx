import * as Styled from "./Input.styled";
import { useState, ReactNode } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value?: ReactNode | string;
}

export const Input = ({ name, label, onChange, placeholder, type, value }: InputProps) => (
  <Styled.InputWrapper>
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
