import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';

function Drinks({ dispatch }) {
  useEffect(() => {
    dispatch(changeTile('Drinks'));
  }, []);

  return (
    <div>
      Drinks
    </div>
  );
}

Drinks.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Drinks);
