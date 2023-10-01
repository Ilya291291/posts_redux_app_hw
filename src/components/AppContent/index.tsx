import React from "react";
import { Routes, Route } from "react-router";

import "./index.css";

import Header from "components/Header";
import Footer from "components/Footer";

import PostsPage from "pages/PostsPage";
import UsersPage from "pages/UsersPage";

import { postsPageRoute } from "pages/PostsPage/postsPageRoute";
import { usersPageRoute } from "pages/UsersPage/usersPageRoute";

const AppContent = () => {
  return (
    <div className="appcontent">
      <Header />
      <Routes>
        <Route path={postsPageRoute()} element={<PostsPage/>}></Route>
        <Route path={usersPageRoute()} element={<UsersPage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default AppContent;