import { FocusEvent, InputHTMLAttributes, useState } from "react";
import * as Styled from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  column?: string;
  errorMessage?: string;
  label?: string;
  rows?: number;
}

export const Input = ({
  column,
  errorMessage,
  label,
  maxLength,
  minLength,
  name,
  onChange,
  pattern,
  placeholder,
  required,
  rows,
  type,
}: InputProps) => {
  const [isValid, setIsValid] = useState(true);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsValid(() => event.target.checkValidity());
  };

  return (
    <Styled.InputWrapper width={column}>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      {!(type === "textarea") ? (
        <Styled.Input
          isValid={isValid}
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          onChange={onChange}
          onBlur={handleBlur}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      ) : (
        <Styled.Input
          name={name}
          rows={rows}
          isValid={isValid}
          maxLength={maxLength}
          minLength={minLength}
          onBlur={handleBlur}
          onChange={onChange}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          type={type}
          as="textarea"
        />
      )}
      {!isValid && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
    </Styled.InputWrapper>
  );
};
