import { ReactNode } from "react";
import * as Styled from "./SubHeader.styled";

interface SubHeaderProps {
  children?: ReactNode;
}

export const SubHeader = ({ children }: SubHeaderProps) => (
  <Styled.SubHeader>{children}</Styled.SubHeader>
);
