import React, { useState, useRef } from 'react';

export default function MapPrac() {
  const [inputName, setInputName] = useState(''); // 초기 설정을 ''로 한 이유:
  const [inputTitle, setInputTitle] = useState(''); // 안하면 trim 사용이 안됨(에러 발생)
  const [content, setContent] = useState([]);
  const [searchKey, setSearchKey] = useState('id'); // select문에 있는 조건
  const [searchWord, setSearchWord] = useState(); // 검색어
  const [searchResult, setSearchResult] = useState([]); //검색결과
  const inputNameRef = useRef(); //빈 값 포커스를 위한 ref(이름)
  const inputTitleRef = useRef(); //                     (제목)

  const addContent = () => {
    // content추가
    if (inputTitle.trim() !== '' && inputName.trim() !== '') {
      // 빈값이 없으면 처리
      const newContent = content.concat({
        id: content.length + 1,
        name: inputName,
        title: inputTitle,
      });
      setContent(newContent);
      setSearchResult(newContent);
      console.log(newContent);
      setInputTitle('');
      setInputName('');
    } else if (inputName.trim() === '') {
      // name이 빈값이면 name에 ref.focus
      inputNameRef.current.focus();
    } else if (inputTitle.trim() === '') {
      //title이 빈값이면 title에 ref.focus
      inputTitleRef.current.focus();
    }
  };

  const searchContent = () => {
    // 검색을 수행하는 함수
    // key를 기준으로 입력받은 검색어가 content에 있는지 확인
    console.log('searchKey', searchKey);
    const newContent = content.filter((content) =>
      content[searchKey].includes(searchWord.trim())
    );
    setSearchResult(newContent);
    setSearchWord('');
    console.log('newContent', newContent);
  };

  const handleInputKeyDown = (e) => {
    // 등록input에서 엔터 눌릴시 처리하는 함수
    if (e.keyCode === 13) {
      addContent();
    }
  };

  const handleSearchKeyDown = (e) => {
    // 검색input에서 엔터 눌릴시 처리하는 함수
    if (e.keyCode === 13) {
      searchContent();
    }
  };

  return (
    <div>
      <label htmlFor="name">작성자 : </label>
      <input
        type="text"
        placeholder="작성자"
        id="name"
        value={inputName}
        ref={inputNameRef}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        onKeyDown={handleInputKeyDown}
      />
      <label htmlFor="title">제목 : </label>
      <input
        type="text"
        id="title"
        value={inputTitle}
        ref={inputTitleRef}
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}
        onKeyDown={handleInputKeyDown}
      />
      <button onClick={addContent}>작성</button>
      {/* //////////////////////////////////////////////////////////////////////// */}
      <select
        onChange={(e) => {
          setSearchKey(e.target.value);
          console.log('searchKey=======', searchKey);
        }}
      >
        <option value="id">번호</option>
        <option value="name">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        onKeyDown={handleSearchKeyDown}
      />
      <button onClick={searchContent}>검색</button>

      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
