/* 함수형 컴포넌트 */

import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form, //기존의 form 내용을 이 자리에 복사!
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: ''
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        vlaue={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="입력하시오"
        vlaue={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인버튼</button>
    </div>
  );
};

export default EventPractice;

/* 클래스 컴포넌트
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
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
      [e.target.name]: e.target.value //key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용
    });
    //e객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
    console.log(e); //이벤트가 끝나면 초기화되어 정보 참조 불가
    console.log(e.target.value); //참조할 일 있다면 e.persist()함수 호출해줘야함
  };

  handleClick = e => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인하였음</button>
      </div>
    );
  }
}

export default EventPractice;
*/
