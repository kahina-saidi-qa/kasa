import React from 'react';
import { NavLink } from 'react-router-dom';
import logoHeader from '../../components/Header/logoHeader/logo-header.png';
import './header.scss';

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="logo" className="logo-header" />
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
