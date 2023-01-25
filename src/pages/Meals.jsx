import React, { Component } from 'react';
import { connect } from 'react-redux';

class Meals extends Component {
  render() {
    return (
      <div>Meals</div>
    );
  }
}

export default connect()(Meals);
