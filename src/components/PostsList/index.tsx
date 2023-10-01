import React, { useEffect } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from 'store/posts/actions';
import { selectPosts } from 'store/posts/selectors';

import PostItem from './components/PostItem';
import Heading from 'components/Heading';

import { IPosts } from 'types/IPosts';


const PostsList = () => {

  const dispatch: any = useDispatch()
  const posts: IPosts[] = useSelector(selectPosts)
  
  useEffect(() => {
    dispatch(loadPosts())
  }, [])
  
  return (
    <div className='postslist'>
      <Heading 
        heading='You are at posts page'
      />
      {posts.length > 0 && posts.slice(0,10).map((post: IPosts) => {
        return (
          <PostItem
            key={post.id}
            post={post}
          />
        )
      })}
    </div>
  )
}

export default PostsList