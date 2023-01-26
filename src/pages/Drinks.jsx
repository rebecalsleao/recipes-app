import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';
import Footer from '../components/Footer';

function Drinks({ dispatch }) {
  useEffect(() => {
    dispatch(changeTile('Drinks'));
  }, []);

  return (
    <div>
      Drinks
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Drinks);
