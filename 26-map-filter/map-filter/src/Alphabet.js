import React, { useState } from 'react';

export default function Alphabet() {
  //   const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlphabet] = useState('');
  const addAlpha = () => {
    // [퀴즈] input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
    // if(inputAlpha.trim().length === 0) => 리더님 답
    if (inputAlpha.trim() !== '') {
      const newAlpha = alphabet.concat({
        id: alphabet.length + 1,
        alpha: inputAlpha,
      });
      setAlphabet(newAlpha);
      setInputAlphabet('');
    } else {
      setInputAlphabet('');
    }
  };
  const deleteAlpha = (targetId) => {
    // targetId: 삭제될 요소의 id
    console.log(targetId);

    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };

  const handleKeyDown = (e) => {
    // console.log(e); // 누른 키에 대한 정보 출력됨

    // bug fix: IME 문제 해결  ==> onKeyPress사용시 발생하는 한글 버그 해결하기 위한 코드
    // link: https://velog.io/@euji42/solved-%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5%EC%8B%9C-2%EB%B2%88-%EC%9E%85%EB%A0%A5%EC%9D%B4-%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0
    if (e.nativeEvent.isComposing) return;

    // if (window.event.keyCode === 13) {
    // if (e.code === 'Enter') {
    if (e.keyCode === 13) {
      addAlpha();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlphabet(e.target.value);
        }}
        //[퀴즈] input에서 enter키 누르면 추가되도록!
        onKeyDown={handleKeyDown}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {/* {alphabet.map(value, idx) => {
          return <li key={idx}>{value}</li>; //key는 virtualDom을 위한 것,반복되는 태그중에 가장 부모에 있는 것에 넣으면 됨, 웹브라우저 개발자도구에서는 안보임, 안쓰면 Console창에 warnning발생
        })} */}
        {alphabet.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
              {value.alpha}
            </li>
          ); //key는 virtualDom을 위한 것,반복되는 태그중에 가장 부모에 있는 것에 넣으면 됨, 웹브라우저 개발자도구에서는 안보임, 안쓰면 Console창에 warnning발생
        })}
      </ol>
    </div>
  );
}
