import { Users } from "./types"

export const selectUsers = (state: { usersReducer : Users }) => state.usersReducer.users