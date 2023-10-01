import { Posts } from "./types"
import { AnyAction } from "redux"

const initialState = {
  posts: []
}
  
const postsReducer = (state: Posts = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'posts/setPosts':
      return {...state, posts: [...action.payload]}
    case 'toggleFavorite':
      const postId = action.payload
      return {
        ...state,
        posts: state.posts.map(post => post.id === postId ?
        {...post, isFavorite: !post.isFavorite} :
            post
        )
      }
    default :
      return state
  }
}

export default postsReducer