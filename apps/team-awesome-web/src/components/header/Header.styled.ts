import styled from "styled-components";

const headerHeight = "70px";

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 1fr;
  height: ${headerHeight};
  padding: 0 32px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (${({ theme }) => theme.tablet}) {
    position: relative;
  }
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.backgroundPrimary};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  margin-right: 32px;
  white-space: nowrap;
`;

export const RightMenu = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.tablet}) {
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
  }
`;

export const ChevronButton = styled.button`
  &:hover,
  &:focus {
    transform: rotate(0.5turn);
    transition: transform 0.2s ease-out;
  }
`;

export const Profile = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 20px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 2px;
  width: 148px;

  & svg {
    margin-left: 16px;
  }
`;

export const Avatar = styled.img`
  border-radius: 18px;
  height: 36px;
  width: 36px;
`;

export const Menu = styled.nav<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: ${(props) => (props.isOpen ? `calc(100vh - ${headerHeight})` : `0`)};
  overflow: hidden;
  position: absolute;
  top: ${headerHeight};
  transition: height 0.8s;
  width: 100%;

  @media screen and (${({ theme }) => theme.tablet}) {
    height: ${headerHeight};
    overflow-x: hidden;
    position: relative;
    top: unset;
    transition: none;
    width: 100%;
  }
`;

export const MenuList = styled.ul<{ isOpen: boolean }>`
  display: ${(props) => !props.isOpen && `none;`};
  list-style: none;

  @media screen and (${({ theme }) => theme.tablet}) {
    display: grid;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    margin-top: 0;
  }
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.backgroundPrimary};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.fontWeightDefault};
  margin: 10px;
  padding: 16px 20px 8px;
  text-align: center;
  white-space: nowrap;

  @media screen and (${({ theme }) => theme.tablet}) {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizeMedium};
    margin: 0;
    padding: 28px 20px;
  }
`;

export const ListLink = styled.a<{ isActive: boolean }>`
  cursor: pointer;
  ${(props) =>
    props.isActive === true &&
    `
    text-decoration: solid underline 2px;
    text-underline-offset: 0.4rem;
    `};

  &:hover {
    text-decoration: solid underline 2px;
    text-underline-offset: 0.4rem;
  }
`;

export const DrawerIcon = styled.button`
  --size: 18px;
  --stroke: 2px;
  --margin: 4px;
  box-sizing: content-box;
  color: ${({ theme }) => theme.backgroundPrimary};
  justify-self: right;
  vertical-align: middle;

  &::after,
  &,
  &::before {
    border-radius: calc(var(--stroke) / 2);
    border: solid calc(var(--stroke) / 2) currentColor;
    display: block;
    height: 0;
    position: relative;
    transition-duration: 0.6s;
    transition-property: transform opacity;
    width: calc(var(--size) - var(--stroke));
  }

  &::before,
  &::after {
    margin-left: calc(var(--stroke) / -2);
    content: "";
  }

  &::before {
    margin-top: calc(var(--stroke) / -1 - var(--margin));
  }

  &::after {
    margin-top: calc(var(--margin) * 2);
  }

  @media screen and (${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
