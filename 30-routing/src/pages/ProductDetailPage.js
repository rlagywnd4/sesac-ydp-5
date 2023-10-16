import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
  //   const parameter = useParams(); // parameter가 들어오면 객체로 감싸져서 string으로 들어옴
  const { productId } = useParams(); // 이렇게 객체 구조분해할당 가능
  console.log(productId);

  const navigate = useNavigate();

  const targetProduct = productInfos[Number(productId) - 1];
  const { id, name, email, body } = targetProduct;
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로 이동하기
      </button>
      <ul>
        {/* 메소드 활용시: productInfos.find(item => item.id === productId) */}
        {/* productId는 string이지만 js는 유연한 언어이기 때문에 연산이 가능 -> 정확히 하고싶으면 Number()사용 */}
        {/* <li>상품번호: {productInfos[Number(productId) - 1].id}</li>
        <li>상품명: {productInfos[productId - 1].name}</li>
        <li>판매자: {productInfos[productId - 1].email}</li>
        <li>상세설명: {productInfos[productId - 1].body}</li> */}
        <li>상품번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상세설명: {body}</li>
      </ul>
    </div>
  );
}
