import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../logo.png';
import { ButtonContainer } from './Button';

const Navbar = () => {
  return (
    <NavWraped className="navbar navbar-expand-sm navbar-dark px-sm-5">
      {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
      <Link to="/">
        {/* <img className="navbar-brand" alt="store" src={logo} /> */}
        <span style={{ color: '#FF5666', fontSize: '1.8rem' }}>
          <i className="fab fa-atlassian" />
        </span>
      </Link>
      <ul className="navbar-nav align-item-center">
        <li className="nav-item ml-2">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWraped>
  );
};

const NavWraped = styled.nav`
  background: #2e5339;
  .nav-link {
    font-size: 1.9rem;
    color: #ffccc9 !important;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0;
  }
`;

export default Navbar;
