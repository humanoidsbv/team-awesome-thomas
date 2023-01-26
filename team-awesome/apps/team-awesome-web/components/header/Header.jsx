import { ReactComponent as ArrowDown } from "../../public/icons/arrow-down.svg";
import { ReactComponent as HumanoidsLogo } from "../../public/img/humanoids.svg";
import { useState } from "react";

export const Header = () => {
    
    const [isOpen, toggleIsOpen] = useState(false);

    const handleToggle = () => {
        toggleIsOpen(!isOpen);
        console.log(isOpen);
    };

  return (
    <header className="header">
        <a className="header-logo" href="#">
            team awesome
        </a>
        <button className={`drawer-icon${!isOpen ? "" : " open"}`} onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav className={`nav-menu${!isOpen ? "" : " open"}`} >
            <ul>
                <li><a href="#">Timesheets</a></li>
                <li><a href="#">Team members</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Documents</a></li>
            </ul>
        </nav>
        <div className="right-menu">
            <div className="profile">
                <HumanoidsLogo />
                <img className="profile-pic" src="img/profile.jpg" alt="Avatar image" />
            </div>
            <button className="right-menu-icon">
                <ArrowDown className="chrevron" />
            </button>
        </div>
    </header>
  );
}
