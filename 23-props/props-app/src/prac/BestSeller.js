import propTypes from 'prop-types';

// export default function FunctionComponent(props) {
export default function BestSeller({ name }) {
  return <div></div>;
}

BestSeller.defaultProps = {
  title: '기본 제목',
  author: '기본 작가',
  price: '기본 요금',
  type: '기본 카테고리',
};

BestSeller.propTypes = {
  name: propTypes.string,
};
