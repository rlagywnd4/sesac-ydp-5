import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPrac() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  const onvalid = (data) => {
    console.log('onvalid', data);
  };

  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onvalid)}>
        <input
          type="text"
          placeholder="username"
          {...register('username', {
            required: '이름은 필수 항목입니다.',
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="age"
          {...register('age', {
            required: '나이를 입력해주세요',
            validate: {
              useGmail: (v) => v >= 0 || '0이상의 숫자만 입력 가능합니다.',
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
