import React, { useEffect } from "react";
import "./index.css";

import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "store/users/actions";
import { selectUsers } from "store/users/selectors";

import UserItem from "./components/UserItem";
import Heading from "components/Heading";

import { IUsers } from "types/IUsers";

const UsersList = () => {

  const dispatch: any = useDispatch()
  const users: IUsers[] = useSelector(selectUsers)

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  return (
    <div className='userlist'>
      <Heading 
        heading='You are at users page'
      />
      {users.length > 0 && users.map((user: IUsers) => {
        return (
          <UserItem 
            key={user.id}
            user={user}
          />
        )
      })}
    </div>
  )
}

export default UsersList