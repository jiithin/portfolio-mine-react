import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { BiSolidDownload } from "react-icons/bi";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
        <NavLink className="menu-item" to="home">
            Home
          </NavLink>

          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>

          <NavLink className="menu-item" to="education">
            Education
          </NavLink>
          
          <NavLink className="menu-item" to="contact">
            Contact Me
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn"
            href="https://github.com/jiithin"
            target="_blank"
            rel="noopener noreferrer"
          >
           Resume <BiSolidDownload color="grey"/>
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
