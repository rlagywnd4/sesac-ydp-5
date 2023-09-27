import './App.css';
import ClassBind from './inClass/ClassBind';
import SynthticEvent from './inClass/SyntheticEvent';
import Counter from './inClass/Counter';
import HandlerEx from './ex/Handler_ex';
import ChangeColor from './ex/ChangeColor';
import Visible from './ex/Visible';

function App() {
  return (
    <div className="App">
      <SynthticEvent />

      <hr />
      <ClassBind />
      <hr />
      <Counter />

      <hr />
      <HandlerEx />

      <hr />
      <ChangeColor />
      <hr />
      <Visible />
    </div>
  );
}

export default App;
