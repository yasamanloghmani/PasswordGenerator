import React, { Component } from 'react';
import GenratePassword from './utils/GeneratePassword';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      length: 8,
      newLength: 8,
      pwd: "",
      upperCase: true,
      lowerCase: true,
      numeric: true,
      symbol: false,
      typing: false,
      typingTimeout: 0
    }
  }

  componentDidMount() {
    this.generatePwd();
  }
  generatePwd() {
    const { upperCase, lowerCase, numeric, symbol, length } = this.state;
    let pwd = new RandomPassword()
      .setLength(length)
      .setLowerCase(lowerCase)
      .setUpperCase(upperCase)
      .setNumberCase(numeric)
      .setSymbol(symbol)
      .generate();
    this.setState({ pwd });
  }

  handleCheckbox(e) {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked
    });
    this.generatePwd();
  }

  handleLenghtChange({ target: { value } }) {
    if (value >= 40) {
      value = 40;
    }
    this.setState({ length: value }, () => this.generatePwd());
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
  
}

export default App;
