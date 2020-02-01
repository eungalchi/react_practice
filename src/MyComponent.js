import React, { Component } from 'react';
import PropTypes from 'prop-types';
//defaultProps와 propTypes는 협업 시 어떤 props가 필요한지 쉽게 알 수 있게함

class MyComponent extends Component {
  static defaultProps = {
    //기본값 설정
    name: '김정은'
  };
  static propTypes = {
    //props 검증, 타입 지정
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다.
        <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

//rsc :  항수형 컴포넌트
//rcc : 클래스형 컴포넌트

export default MyComponent; //모듈 내보내기(export)

// import React from 'react';
// import propTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   //   const { name, children } = props; //객체에서 값을 추출 : 비구조화 할당
//   return (
//     <div>
//       안녕하세요. 제 이름은 {name}입니다.
//       <br />
//       children 값은 {children} 입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   //기본값 설정
//   name: '김정은'
// };

// MyComponent.propTypes = {
//   //props 검증, 타입 지정
//   name: propTypes.string,
//   favoriteNumber: propTypes.number.isRequired
// };

// //rsc :  항수형 컴포넌트
// //rcc : 클래스형 컴포넌트

// export default MyComponent; //모듈 내보내기(export)
