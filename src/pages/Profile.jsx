import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';
import Footer from '../components/Footer';

function Profile({ dispatch }) {
  useEffect(() => {
    console.log('a');
    dispatch(changeTile('Profile'));
  }, []);

  return (
    <div>
      Profile
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Profile);
