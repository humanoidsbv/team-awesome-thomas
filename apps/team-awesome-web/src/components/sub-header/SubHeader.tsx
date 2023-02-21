import { ReactNode } from "react";
import * as Styled from "./SubHeader.styled";

interface SubHeaderProps {
  children?: ReactNode;
  count: string;
  title: string;
}

export const SubHeader = ({ children, count, title }: SubHeaderProps) => (
  <Styled.SubHeader>
    <Styled.ContextMenu>
      <Styled.ContextHeading>{title}</Styled.ContextHeading>
      <Styled.ContextCount>{count}</Styled.ContextCount>
    </Styled.ContextMenu>
    {children}
  </Styled.SubHeader>
);
