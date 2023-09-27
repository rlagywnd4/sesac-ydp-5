import { useState } from 'react';

// 실습2
const FunctionState = () => {
  const [number, setNumber] = useState(0);
  const increase = () => setNumber(number + 1);
  const decrease = () => setNumber(number - 2);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
};

export default FunctionState;
