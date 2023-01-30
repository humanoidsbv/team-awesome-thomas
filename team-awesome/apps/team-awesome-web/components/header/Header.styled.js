import styled from "styled-components";

export const Header = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    display: flex;
    height: 70px;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;
    position: fixed;
`;

export const Logo = styled.a`
    color: ${({ theme }) => theme.backgroundPrimary};
    font-family: 'Bello';
    font-size: 26px;
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
    &:hover, &:focus {
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

export const Menu = styled.nav`
    background-color: ${({ theme }) => theme.backgroundSecondary};
    height: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: height 0.8s;
    width: 100vw;
    z-index: -1;
    ${(props) => props.isOpen && `
        height: 100vh;
    `};

    @media screen and (${({ theme }) => theme.tablet}) {
        height: 70px;
        overflow: visible;
        position: relative;
        transition-property: none;
        width: 100%;
        z-index: 1;
    }
`;

export const MenuList = styled.ul`
    list-style: none;
    margin-top: 8rem;
    overflow: hidden;
    ${(props) => !props.isOpen && `
        display: none;
    `};

    @media screen and (${({ theme }) => theme.tablet}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 0;
        height: 100%;
    }
`;

export const ListItem = styled.li`
    color: ${({ theme }) => theme.backgroundPrimary};
    font-size: 1.5rem;
    font-weight: 400;
    padding: 13px 20px 9px;
    margin: 10px;
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
        font-size: 0.875rem;
    }
`;


// Hamburgers

// Sizing definitions
export const DrawerIcon = styled.button`
    --size: 18px;
    --stroke: 2px;
    --margin: 4px;
    box-sizing: content-box;
    color: ${({ theme }) => theme.backgroundPrimary};
    vertical-align: middle;

    &::after, &, &::before {
        border-radius: calc(var(--stroke) / 2);
        border: solid calc(var(--stroke) / 2) currentColor;
        display: block;
        height: 0;
        position: relative;
        transition-duration: 0.6s;
        transition-property: transform opacity;
        width: calc(var(--size) - var(--stroke));
    }
  
    &::before, &::after {
        margin-left: calc(var(--stroke) / -2 );
        content: '';
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