import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
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

export default connect()(Profile);
