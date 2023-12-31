import Ex1 from './Ex1';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';
import PostList from './prac/PostList';

function App() {
  return (
    <div className="App">
      {/* 함수형 컴포넌트; useRef()로 DOM요소에 직접 접근 */}
      {/* <RefSample1 />
      <hr /> */}

      {/* 함수형 컴포넌트; useRef() 로 로컬 변수 사용 */}
      {/* <RefSample2 />
      <hr /> */}

      {/* <RefSample3 />
      <hr /> */}

      {/* 클래스형 컴포넌트 */}
      {/* <RefSample4 />
      <hr />

      <Ex1 />
      <hr /> */}

      {/* <LifeCycleFunc /> */}
      {/* <LifeCycleClass /> */}
      <PostList />
    </div>
  );
}

export default App;
