import Input from './Input';
import Result from './Result';
import Select from './Select';
import React, { useState } from 'react';

function App() {
  // 상태
  // 리더님 방법 - 객체로 하나의 state생성
  const [data, setData] = useState({
    fruit: 'apple',
    bgColor: 'black',
    color: 'white',
    content: 'text',
  });

  // 내 방법 - 하나하나 state생성
  // const [content, setContent] = useState('사과');
  // const [fruit, setFruit] = useState('apple');
  // const [bgColor, setBgColor] = useState('black');
  // const [color, setColor] = useState('white');
  if (data.content.trim() === '') {
    // 입력후 다 지웠을때 비어있어서 'text'라고 지정함
    // 스페이스만 넣었을때 비어있어서 trim()을 사용해 공백(스페이스바)을 지움
    setData((data) => {
      return { ...data, content: 'text' };
    });
  }

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select
          setData={setData}
          // setFruit={setFruit}
          // setBgColor={setBgColor}
          // setColor={setColor}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input
          // content={content} setContent={setContent}
          data={data}
          setData={setData}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result
          // content={content}
          // fruit={fruit}
          // bgColor={bgColor}
          // color={color}
          data={data}
        />
      </div>
    </>
  );
}

export default App;
