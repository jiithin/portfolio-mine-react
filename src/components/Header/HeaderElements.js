import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
position: fixed;
  top: 0;
  left:0;
  right:0;
  background:transparent;
 
  backdrop-filter: blur(4px);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
 
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;
export const Logo = styled('div')`
  img {
    margin-left: 20px;
    width: 90px;
    height: 30px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #87ceeb;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
color: rgb(119, 119, 121);
font-size: 1.1rem;

  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
