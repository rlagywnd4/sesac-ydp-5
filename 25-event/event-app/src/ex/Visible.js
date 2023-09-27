import { Component } from 'react';

class Visible extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 1,
      content: '안녕하세요',
    };
  }
  Invisible = () => {
    console.log('hi');
    if (this.state.visible) {
      this.setState({ visible: 0, content: '' });
    } else {
      this.setState({ visible: 1, content: '안녕하세요' });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.Invisible}>사라져라</button>
        <h1>{this.state.content}</h1>
      </div>
    );
  }
}

export default Visible;
