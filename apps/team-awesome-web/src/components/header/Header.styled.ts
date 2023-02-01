import styled from "styled-components";

const headerHeight = "70px";

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  height: ${headerHeight};
  justify-content: space-between;
  padding: 0 30px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.backgroundPrimary};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: ${({ theme }) => theme.fontSizeDefault};
  margin-right: 30px;
  white-space: nowrap;
  width: 136px;
`;

export const RightMenu = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.tablet}) {
    display: flex;
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
  display: flex;
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
    overflow: visible;
    position: relative;
    transition: none;
    width: 100%;
  }
`;

export const MenuList = styled.ul<{ isOpen: boolean }>`
  display: ${(props) => !props.isOpen && `none;`};
  list-style: none;
  margin-top: 8rem;
  overflow: hidden;

  @media screen and (${({ theme }) => theme.tablet}) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
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

  @media screen and (${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.fontSizeMedium};
  }
`;

export const DrawerIcon = styled.button`
  --size: 18px;
  --stroke: 2px;
  --margin: 4px;
  box-sizing: content-box;
  color: ${({ theme }) => theme.backgroundPrimary};
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
