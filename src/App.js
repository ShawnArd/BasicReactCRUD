import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: 'App title'
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: 'New App Title'
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}> Click here!</div>
        <MyComponent
        title="this is comp title"
        name="michael"
        onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
