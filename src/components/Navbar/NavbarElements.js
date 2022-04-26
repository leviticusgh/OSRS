import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  align-items: center;
  display: flex;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
  `;
  
  export const NavLink = styled(Link)`
  color: #fff;
  background: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: -120px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

