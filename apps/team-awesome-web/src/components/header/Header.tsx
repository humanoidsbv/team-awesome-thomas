import { useState } from "react";
import Image from "next/image";
import * as Styled from "./Header.styled";
import { ReactComponent as ArrowDown } from "../../../public/icons/arrow-down.svg";
import { ReactComponent as HumanoidsLogo } from "../../../public/img/humanoids.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.Header>
      <Styled.Logo>team awesome</Styled.Logo>
      <Styled.DrawerIcon onClick={handleToggle} />
      <Styled.Menu isOpen={isOpen}>
        <Styled.MenuList isOpen={isOpen}>
          <Styled.ListItem>
            <Styled.ListLink href="#">Timesheets</Styled.ListLink>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink href="#">Team members</Styled.ListLink>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink href="#">Projects</Styled.ListLink>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink href="#">Clients</Styled.ListLink>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink href="#">Documents</Styled.ListLink>
          </Styled.ListItem>
        </Styled.MenuList>
      </Styled.Menu>
      <Styled.RightMenu>
        <Styled.Profile>
          <HumanoidsLogo />
          <Image src="/img/profile.jpg" alt="Avatar image" width={36} height={36} />
        </Styled.Profile>
        <Styled.ChevronButton>
          <ArrowDown />
        </Styled.ChevronButton>
      </Styled.RightMenu>
    </Styled.Header>
  );
};
