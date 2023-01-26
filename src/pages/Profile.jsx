import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';

function Profile({ dispatch }) {
  useEffect(() => {
    console.log('a');
    dispatch(changeTile('Profile'));
  }, []);

  return (
    <div>
      outracoisa
    </div>
  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Profile);
