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

export default connect()(Drinks);
