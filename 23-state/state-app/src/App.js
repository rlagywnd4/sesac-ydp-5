import './App.css';
import Counter from './inClass/Counter';
import SayFunction from './inClass/SayFunction';
import CounterFunction from './inClass/CounterFunction';
import StatePrac from './prac/ClassState';
import FunctionState from './prac/FunctionState';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunction value={'Plus 1'} />
      <hr />

      <StatePrac />
      <hr />

      <FunctionState />
    </div>
  );
}

export default App;
