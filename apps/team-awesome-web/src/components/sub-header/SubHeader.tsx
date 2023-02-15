import * as Styled from "./SubHeader.styled";
import { ReactNode } from "react";

interface SubHeaderProps {
  children?: ReactNode;
}

export const SubHeader = ({ children }: SubHeaderProps) => (
  <Styled.SubHeader>{children}</Styled.SubHeader>
);
