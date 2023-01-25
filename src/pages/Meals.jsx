import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';

function Meals({ dispatch }) {
  useEffect(() => {
    dispatch(changeTile('Meals'));
  }, []);
  return (
    <div>
      Meals
    </div>
  );
}

export default connect()(Meals);
