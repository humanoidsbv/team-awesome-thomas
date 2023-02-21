import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <Link href="/" passHref legacyBehavior>
        <Styled.Logo>team awesome</Styled.Logo>
      </Link>
      <Styled.DrawerIcon onClick={handleToggle} />
      <Styled.Menu isOpen={isOpen}>
        <Styled.MenuList isOpen={isOpen}>
          <Styled.ListItem>
            <Link href="/timesheets" passHref legacyBehavior>
              <Styled.ListLink>Timesheets</Styled.ListLink>
            </Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Link href="/team-members" passHref legacyBehavior>
              <Styled.ListLink>Team members</Styled.ListLink>
            </Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink>Projects</Styled.ListLink>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink>Clients</Styled.ListLink>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink>Documents</Styled.ListLink>
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
