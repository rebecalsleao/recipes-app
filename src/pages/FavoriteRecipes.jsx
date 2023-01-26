import PropTypes from 'prop-types';
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

FavoriteRecipes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(FavoriteRecipes);
