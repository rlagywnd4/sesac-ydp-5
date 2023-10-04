import React, { useRef, useState } from 'react';

export default function RefSample2() {
  const id = useRef(7);
  const [num, setNum] = useState(10);
  console.log(id);

  const pluseIdRef = () => {
    id.current += 1;
    console.log(id.current);
  };

  const pluseNumState = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시 id값을 1씩 증가</p>
      <h2>{id.current}</h2>
      <button onClick={pluseIdRef}>Plus</button>

      <p>비교. state 변경시 ref와 다르게 리렌더링 되는 것을 확인</p>
      <h2>{num}</h2>
      <button onClick={pluseNumState}>Plus</button>
    </div>
  );
}
