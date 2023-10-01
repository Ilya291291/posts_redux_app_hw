import './index.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'assets/img/logo_il.png'

import { postsPageRoute } from 'pages/PostsPage/postsPageRoute';
import { usersPageRoute } from 'pages/UsersPage/usersPageRoute';

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt={Logo} />
      <nav>
        <NavLink 
          to={postsPageRoute()}
          className={({ isActive }) => isActive ? 'active' : ''}
        >Posts
        </NavLink>
        <NavLink 
          to={usersPageRoute()}
          className={({ isActive }) => isActive ? 'active' : ''}
        >Users
        </NavLink>
      </nav>
    </header>
  )
}

export default Header