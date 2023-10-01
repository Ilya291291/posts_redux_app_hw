import './index.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'assets/img/logo.png';

import { postsPageRoute } from 'pages/PostsPage/postsPageRoute';
import { usersPageRoute } from 'pages/UsersPage/usersPageRoute';

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt={Logo} />
      <nav>
        <NavLink to={postsPageRoute()}>Posts</NavLink>
        <NavLink to={usersPageRoute()}>Users</NavLink>
      </nav>
    </header>
  )
}

export default Header