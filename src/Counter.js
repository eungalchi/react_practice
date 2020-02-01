import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초깃값 설정
    this.state = {
      number: 0
    };
  }
  render() {
    const { number } = this.state; //state를 조회할 때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
          }}
        >
          +1해줄게
        </button>
      </div>
    );
  }
}

export default Counter;
