import React, { useState } from 'react';

export default function Event_ex() {
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [user, setUser] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      name: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ]);

  const addUser = () => {
    if (inputEmail.trim() !== '' && inputName.trim() !== '') {
      const newUser = user.concat({
        id: user.length + 1,
        name: inputName,
        email: inputEmail,
      });
      setUser(newUser);
      console.log(user);
      setInputEmail('');
      setInputName('');
    } else if (inputName.trim() !== '') {
      alert('이메일을 입력해주세요');
    } else if (inputEmail.trim() !== '') {
      alert('이름을 입력해주세요');
    } else {
      alert('이름과 이메일을 입력해주세요');
    }
  };
  const deleteUser = (targetId) => {
    // targetId: 삭제될 요소의 id
    console.log(targetId);

    const newUser = user.filter((user) => user.id !== targetId);
    setUser(newUser);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addUser();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <input
        type="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addUser}>등록</button>
      <ul>
        {user.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteUser(value.id)}>
              <h2>
                {value.name}: {value.email}
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
