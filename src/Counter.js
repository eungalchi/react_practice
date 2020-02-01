import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  }
  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 }, () => {
              console.log('방금 setState가 호출');
              console.log(this.state);
            });

            // this.setState(prevState => {
            //   return { number: prevState.number + 1 };
            // });
          }}
        >
          +1해줄게
        </button>
      </div>
    );
  }
}

export default Counter;
