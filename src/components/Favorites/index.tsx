import React from 'react';
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteAction } from 'store/posts/actions';

interface FavoritesParams {
  id: number,
  isFavorite?: boolean
}

const Favorites: React.FC<FavoritesParams> = ({id, isFavorite}) => {

  const dispatch = useDispatch()

  const handleFavorite = () => {
    dispatch(toggleFavoriteAction(id))
  }

  return (
    <div className='favorite'>
      {isFavorite ? 
        <MdOutlineFavorite 
          size={30}
          onClick={handleFavorite}
        /> :
        <MdFavoriteBorder 
          size={30}
          onClick={handleFavorite}
      />}
    </div>
  )
}

export default Favorites