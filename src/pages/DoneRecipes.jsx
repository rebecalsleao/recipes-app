import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';

function DoneRecipes({ dispatch }) {
  useEffect(() => {
    dispatch(changeTile('Done Recipes'));
  }, []);

  return (
    <div>
      DoneRecipes
    </div>
  );
}

DoneRecipes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(DoneRecipes);
