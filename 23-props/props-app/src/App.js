import './App.css';
import Button from './inClass/Button';
import ClassComponent from './inClass/ClassComponent';
import FunctionComponent from './inClass/FunctionComponent';
import Food from './prac/Food';
import Test from './prac/Test';
import Test2 from './prac/Test2';

function App() {
  return (
    <div className="App">
      <FunctionComponent name="새싹" />
      <FunctionComponent />

      <hr></hr>
      <ClassComponent name="rlagywnd"></ClassComponent>
      <ClassComponent></ClassComponent>

      <hr />
      <Button link="https://www.google.com">Google</Button>

      <hr />
      <Test />
      <Test2 />

      <hr />
      <Food></Food>
    </div>
  );
}

export default App;
