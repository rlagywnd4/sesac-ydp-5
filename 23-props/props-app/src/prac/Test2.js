import React, { Component } from 'react';
// 사진을 넣을때에는 import사용
import food from './food.png';

class Test extends Component {
  style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: '20',
  };
  render() {
    return (
      <div style={this.style}>
        <h2>안녕하세요</h2>
        {/* src={this.food} 이렇게 사용하면 class내에 있는 food를 지칭하게 됨 */}
        <img src={food} alt=""></img>
      </div>
    );
  }
}

export default Test;
