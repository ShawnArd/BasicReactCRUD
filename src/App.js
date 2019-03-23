import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: 'Initial title',
      name: 'Initial name'
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: 'New App Title',
      name:'New app name'
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}> Click here!</div>
        <MyComponent
        title={this.state.title}
        name={this.state.name}
        onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
