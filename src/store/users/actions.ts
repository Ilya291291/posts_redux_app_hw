import getUsers from "services/getUsers";
import { Users } from "./types";
import { Dispatch } from "redux";

export const setUsersAction = (users: Users['users']) => {
  return {
    type: 'users/setUsers',
    payload: users
  }
}

export const toggleFavoriteAction = (id: string|number) => {
  return {
    type: 'toggleFavorite',
    payload: id
  }
}

export const loadUsers = () => async (dispatch: Dispatch) => {
  try {
    const users = await getUsers()
    const usersWithFavoriteFlag = users.map((user) => ({...user, isFavorite: false}))
    dispatch(setUsersAction(usersWithFavoriteFlag))
  } catch (error) {
    console.log(error)
  }
}
