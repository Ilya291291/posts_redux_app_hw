import React from 'react';
import './index.css';

import Likes from 'components/Likes';
import Favorites from 'components/Favorites';

import { IPosts } from 'types/IPosts';

interface PostItemParams {
  post: IPosts
}

const PostItem: React.FC<PostItemParams> = ({post}) => {

  return (
    <div className='post'>
      <Favorites 
        id={post.id}
        isFavorite={post.isFavorite}
      />
      <h1>{post.title}</h1>
      <h4>{post.body}</h4>
      <Likes />
    </div>
  )
}

export default PostItem