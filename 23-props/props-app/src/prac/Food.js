import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Food extends Component {
  render() {
    const { name, color } = this.props;
    console.log('props', this.props);
    return (
      <div style={{ color: color }}>제가 좋아하는 음식은 {name}입니다.</div>
    );
  }
}

Food.defaultProps = {
  name: '갈비',
  color: 'red',
};

export default Food;
