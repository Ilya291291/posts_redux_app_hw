import getPosts from "services/getPosts";

import { Action, Dispatch } from "redux";
import { Posts } from "./types";

import { ThunkAction } from "redux-thunk";
export const setPostsAction = (posts: Posts['posts']) => {
  return {
    type: 'posts/setPosts',
    payload: posts
  }
}

export const toggleFavoriteAction = (id: string|number) => {
  return {
    type: 'toggleFavorite',
    payload: id
  }
}

export const loadPosts = () => async (dispatch: Dispatch) => {
  try {
    const posts = await getPosts()
    const postsWithFavoriteFlag = posts.map(post => ({...post, isFavorite: false}))
    dispatch(setPostsAction(postsWithFavoriteFlag));
  } catch (error){
    console.log(error)
  }
}

  