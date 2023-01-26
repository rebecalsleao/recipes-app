import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';
import Footer from '../components/Footer';

function Meals({ dispatch }) {
  useEffect(() => {
    dispatch(changeTile('Meals'));
  }, []);
  return (
    <div>
      Meals
      <Footer />
    </div>
  );
}

Meals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Meals);
