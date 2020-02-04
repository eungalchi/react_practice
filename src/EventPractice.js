import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  };

  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     //함수가 호출될 때 this는 호출부에 따라 결정되므로,
  //     //클래스의 임의 메서드가 특정 html요소의 이벤트로 등록되는 과정에서
  //     //메서드와 this의 관계가 끊어져 버림, bind작업 필요
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
    //e객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
    console.log(e); //이벤트가 끝나면 초기화되어 정보 참조 불가
    console.log(e.target.value); //참조할 일 있다면 e.persist()함수 호출해줘야함
  };

  handleClick = e => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인하였음</button>
      </div>
    );
  }
}

export default EventPractice;
