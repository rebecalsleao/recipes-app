import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../redux/actions';

function Login({ dispatch }) {
  useEffect(() => {
    dispatch(changeTile('Login'));
  }, []);
  return (
    <div>
      Login
    </div>
  );
}

export default connect()(Login);
