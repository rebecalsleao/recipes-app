import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';

function FavoriteRecipes({ dispatch }) {
  useEffect(() => {
    dispatch(changeTile('Favorite Recipes'));
  }, []);

  return (
    <div>
      favorite
    </div>
  );
}

export default connect()(FavoriteRecipes);
