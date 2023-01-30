import { useState } from "react";
import * as Styled from "./DrawerIcon.styled.js";

import { isOpen } from "../drawer-icon/";

export const DrawerIcon = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <Styled.Header>
        <Styled.Logo>
            team awesome
        </Styled.Logo>
        <Styled.DrawerIcon onClick={handleToggle}>
        </Styled.DrawerIcon>
        <Styled.Menu isOpen={isOpen} >
        {isOpen && (
            <Styled.MenuList>
                <Styled.ListItem><a href="#">Timesheets</a></Styled.ListItem>
                <Styled.ListItem><a href="#">Team members</a></Styled.ListItem>
                <Styled.ListItem><a href="#">Projects</a></Styled.ListItem>
                <Styled.ListItem><a href="#">Clients</a></Styled.ListItem>
                <Styled.ListItem><a href="#">Documents</a></Styled.ListItem>
            </Styled.MenuList>
            )}
        </Styled.Menu>
        <div className="right-menu">
            <div className="profile">
                <HumanoidsLogo />
                <img className="profile-pic" src="img/profile.jpg" alt="Avatar image" />
            </div>
            <button className="right-menu-icon">
                <ArrowDown className="chrevron" />
            </button>
        </div>
    </Styled.Header>
  );
}
