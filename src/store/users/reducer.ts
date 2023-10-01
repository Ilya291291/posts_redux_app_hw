import { Users } from "./types";
import { AnyAction } from "redux";

const initialState = {
  users: []
}
  
  
const usersReducer = (state: Users = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'users/setUsers':
      return {
          ...state, users: [...action.payload]
    }
    case 'toggleFavorite':
      const userId = action.payload
      return {
        ...state,
        users: state.users.map(user => user.id === userId ?
        {...user, isFavorite: !user.isFavorite} :
        user
        )
      }
      default:
        return state
    }
  }

export default usersReducer