import React from 'react';
function Input(props) {
  const onTyping = (e) => {
    props.setContent(e.target.value);
  };
  return (
    <>
      내용 :
      <input type="text" onChange={onTyping} placeholder="내용을 입력하세요." />
    </>
  );
}

export default Input;
