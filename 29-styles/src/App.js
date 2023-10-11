import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import Larva from './prac/Larva';
import MoveBall from './prac/MoveBall';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponents />

      <h2>SassComponent</h2>
      <SassComponent />

      <h2>styled-components</h2>
      <StyledComponent />

      <h2>Larva</h2>
      <Larva />

      <h2>MoveBall</h2>
      <MoveBall />
    </div>
  );
}

export default App;
