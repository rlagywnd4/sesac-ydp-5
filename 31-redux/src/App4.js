import { useSelector } from 'react-redux';
import './styles/Box.css';
import {
  Box1Container,
  Box2Container,
  Box3Container,
  Box4Container,
} from './containers/BoxesContainer';

function App() {
  const number = useSelector((state) => state.counter.number);

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number: {number}</h2>
      {/* <Box1 /> */}
      <Box1Container />
    </div>
  );
}

// Box는 원래 components폴더를 만들어서 분리했어야하지만 연습이라 왔다갔다 하기 불편해서 안함
export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      {/* <Box2 /> */}
      <Box2Container />
    </div>
  );
};
export const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      {/* <Box3 /> */}
      <Box3Container />
    </div>
  );
};
export const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      {/* <Box4 /> */}
      <Box4Container />
    </div>
  );
};
export const Box4 = (props) => {
  // const number = useSelector((state) => state.counter.number);
  // const isVisible = useSelector((state) => state.isVisible);
  // const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4: {props.number}</h2>
      <h2>isVisible 값은 {props.isVisible ? '참' : '거짓'} 이다.</h2>

      <button onClick={props.onPlus}>plus</button>
      <button onClick={props.onMinus}>minus</button>
      <button onClick={props.onChange}>CHANGE</button>
    </div>
  );
};

export default App;
