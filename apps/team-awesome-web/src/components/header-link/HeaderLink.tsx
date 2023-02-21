import { ReactNode, MouseEventHandler } from "react";
import { useRouter } from "next/router";

import * as Styled from "./HeaderLink.styled";

interface HeaderLinkProps {
  children: ReactNode;
  href: string;
}

function HeaderLink({ children, href }: HeaderLinkProps) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  const handleClick = (e: MouseEventHandler<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Styled.HeaderLink href={href} onClick={handleClick} style={style}>
      {children}
    </Styled.HeaderLink>
  );
}

export default HeaderLink;
