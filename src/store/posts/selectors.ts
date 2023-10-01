import { Posts } from "./types"

export const selectPosts = (state: { postsReducer: Posts }) => state.postsReducer.posts
