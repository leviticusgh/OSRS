import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from 'styled-components';
import {NavMenu, NavLink} from './NavbarElements';

export const Nav = styled.Nav;


const Header = () => {

    return(

  <Nav>
    <NavMenu>
      <NavLink to='/home' activestyle>
        Home
      </NavLink>

      <NavLink to='/register' activestyle>
        Register
      </NavLink>

    </NavMenu>

  </Nav>
    )
}

export default Header;