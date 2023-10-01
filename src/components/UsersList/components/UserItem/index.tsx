import React from "react";
import "./index.css";

import Favorites from "components/Favorites";
import Likes from "components/Likes";

import { IUsers } from "types/IUsers";

interface UserItemParams {
  user: IUsers
}

const UserItem: React.FC<UserItemParams> = ({user}) => {

  return (
  <div className="user">
    <Favorites 
      id={user.id}
      isFavorite={user.isFavorite}
    />
    <h1>{user.name}</h1>
    <h4>{user.username}</h4>
    <h5>{user.email}</h5>
    <h5>{user.phone}</h5>
    <h5>{user.website}</h5>
    <Likes />
  </div>
  )
}

export default UserItem;