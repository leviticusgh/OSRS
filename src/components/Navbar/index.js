import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/register' activeStyle>
            Register
          </NavLink>
        </NavMenu>
          <h2>ONLINE STUDENT REGISTRATION SYSTEM</h2>
      </Nav>
    </>
  );
};

export default Navbar;