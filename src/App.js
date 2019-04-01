import React, { Component } from 'react';
import './App.less';
import { Button } from "antd";

class App extends Component {
  constructor(){
    super();
    this.state={
      name:'lirukjai'
    }
  }
  render() {
    return (
      <div className="App">
        <Button type="primary">test</Button>
        <Button type="danger">test</Button>
        {this.state.name}
        {/* {this.setState({ name: 'lirujia' })} */}
      </div>
    );
  }
}

export default App;
