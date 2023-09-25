import React, { Component } from 'react';

class Test extends Component {
  name = '김효중';
  my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12',
  };
  render() {
    return <div style={this.my_style}>{this.name}입니다.</div>;
  }
}

export default Test;
