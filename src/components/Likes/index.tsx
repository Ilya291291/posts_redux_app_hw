import React, { useMemo } from 'react';
import './index.css';
import { BiLike, BiDislike } from "react-icons/bi";
import { getRandomNumbers } from 'utils/getRandomNumbers';

const Likes = () => {

  const randomLikeOne = useMemo(() => getRandomNumbers(), [])
  const randomLikeTwo = useMemo(() => getRandomNumbers(), [])
  
  return (
    <div className="likes">
      <BiLike size={20}/>
      <span>{randomLikeOne}</span>
      <BiDislike size={20}/>
      <span>{randomLikeTwo}</span>
    </div>
  )
}

export default Likes