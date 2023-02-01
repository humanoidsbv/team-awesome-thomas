import styled from "styled-components";

const headerHeight = "70px";

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 1fr;
  height: ${headerHeight};
  padding: 0 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.backgroundPrimary};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: ${({ theme }) => theme.fontSizeDefault};
  white-space: nowrap;
  margin-right: 30px;
`;

export const RightMenu = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.tablet}) {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
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
    margin-left: 15px;
  }

  & img {
    border-radius: 18px;
    height: 36px;
    width: 36px;
  }
`;

export const Menu = styled.nav<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: ${(props) => (props.isOpen ? `calc(100vh - ${headerHeight})` : `0`)};
  left: 0;
  margin-top: ${headerHeight};
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: height 0.8s;
  width: 100vw;

  @media screen and (${({ theme }) => theme.tablet}) {
    height: ${headerHeight};
    margin-top: 0;
    overflow-x: hidden;
    position: relative;
    transition: none;
    width: 100%;
  }
`;

export const MenuList = styled.ul<{ isOpen: boolean }>`
  display: ${(props) => !props.isOpen && `none;`};
  list-style: none;
  margin-top: calc(100px - ${headerHeight});

  @media screen and (${({ theme }) => theme.tablet}) {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-template-rows: 1fr;
    margin-top: 0;
  }
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.backgroundPrimary};
  font-size: ${({ theme }) => theme.fontSizeDefault};
  font-weight: ${({ theme }) => theme.fontWeightDefault};
  margin: 10px;
  padding: 13px 20px 9px;
  text-align: center;
  white-space: nowrap;

  @media screen and (${({ theme }) => theme.tablet}) {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizeMedium};
    margin: 0;
    padding: 28px 20px;
  }
`;

export const ListLink = styled.a`
  cursor: pointer;

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
