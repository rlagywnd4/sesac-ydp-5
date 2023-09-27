import { Component } from 'react';
import './ChangeColor.css';

class ChangeColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '검정색 글씨',
      color: 'black',
    };
  }
  ChangeC = (content, color) => {
    this.setState({ content: content, color: color });
    console.log('state : ', this.state);
  };
  render() {
    return (
      <div className={this.state.color}>
        <h1>{this.state.content}</h1>
        <button onClick={() => this.ChangeC('검정색 글씨', 'black')}>
          검정색
        </button>
        <button onClick={() => this.ChangeC('빨강색 글씨', 'red')}>
          검정색
        </button>
        <button onClick={() => this.ChangeC('파랑색 글씨', 'blue')}>
          검정색
        </button>
      </div>
    );
  }
}

export default ChangeColor;
