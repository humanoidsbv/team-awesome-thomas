import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from "./Header.styled";
import { ReactComponent as ArrowDown } from "../../../public/icons/arrow-down.svg";
import { ReactComponent as HumanoidsLogo } from "../../../public/img/humanoids.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const checkActive = (slug: string) => {
    return slug === router.asPath;
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
              <Styled.ListLink isActive={checkActive("/timesheets")}>Timesheets</Styled.ListLink>
            </Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Link href="/team-members" passHref legacyBehavior>
              <Styled.ListLink isActive={checkActive("/team-members")}>
                Team members
              </Styled.ListLink>
            </Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink isActive={checkActive("/projects")}>Projects</Styled.ListLink>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink isActive={checkActive("/clients")}>Clients</Styled.ListLink>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListLink isActive={checkActive("/documents")}>Documents</Styled.ListLink>
          </Styled.ListItem>
        </Styled.MenuList>
      </Styled.Menu>
      <Styled.RightMenu>
        <Styled.Profile>
          <HumanoidsLogo />
          <Styled.Avatar src="img/avatars/profile.jpg" alt="Avatar image" />
        </Styled.Profile>
        <Styled.ChevronButton>
          <ArrowDown />
        </Styled.ChevronButton>
      </Styled.RightMenu>
    </Styled.Header>
  );
};
