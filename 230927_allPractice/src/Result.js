import React, { useState } from 'react';
function Result(props) {
  const { content, fruit, bgColor, color } = props;
  const fruitSrc = `${fruit}.png`;
  console.log('fruitSrc>>>>>>>>', fruitSrc);
  return (
    <div style={{ display: 'block' }}>
      <img src={fruitSrc} width={100} height={100} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: bgColor,
          color: color,
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Result;
