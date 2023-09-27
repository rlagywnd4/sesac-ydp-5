import Input from './Input';
import Result from './Result';
import Select from './Select';
import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState('사과');
  const [fruit, setFruit] = useState('apple');
  const [bgColor, setBgColor] = useState('black');
  const [color, setColor] = useState('white');

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select
          setFruit={setFruit}
          setBgColor={setBgColor}
          setColor={setColor}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input content={content} setContent={setContent} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result
          content={content}
          fruit={fruit}
          bgColor={bgColor}
          color={color}
        />
      </div>
    </>
  );
}

export default App;
