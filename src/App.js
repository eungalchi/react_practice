//import logo from './logo.svg';
import ScrollBox from './ScrollBox';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBotton()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
