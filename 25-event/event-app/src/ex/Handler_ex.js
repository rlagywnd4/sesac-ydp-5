import { Component } from 'react';

class HandlerEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Hello World!',
    };
  }
  // 클래스형 컴포넌트에서 state변경방법
  ChangeMsg = (msg) => {
    this.setState({ name: msg });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.ChangeMsg('Goodbye World!')}>변경</button>
      </div>
    );
  }
}

export default HandlerEx;
