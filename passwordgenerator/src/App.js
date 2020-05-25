import React, { Component } from 'react';
import { GenratePassword } from './utils/GeneratePassword';
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
    let pwd = new GenratePassword()
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
        <div>
        <div className="container" style={{ marginTop: 20 }}>
          <section>
            <header>
              <div className="row">
                <div className="col">
                  <h1 className="main-header">
                    Generate a secure password
                  </h1>
                </div>
              </div>
            </header>
            <div className="input-container">
              <input
                id="input"
                name="password"
                type="text"
                readOnly
                value={this.state.pwd}
              />
            </div>
          </section>
          {/* <hr /> */}
          <section>
            <header>
              <h3>Customize your password</h3>
            </header>
            {/* <fieldset> */}
              <div className="row">
                <div className="col">
                  <div className="form-group">
                  <div className="checkbox-container1">
                    <label className="checkbox-container switch">
                      Uppercase
                      <input
                        type="checkbox"
                        checked={this.state.upperCase}
                        name="upperCase"
                        onChange={e => this.handleCheckbox(e)}
                      />
                      <span className="slider round" />
                    </label>
                  </div>
                    <div className="checkbox-container1">
                    <label className="checkbox-container switch">
                      Lowercase
                      <input
                        type="checkbox"
                        checked={this.state.lowerCase}
                        name="lowerCase"
                        onChange={e => this.handleCheckbox(e)}
                      />
                      <span className="slider round" />
                    </label>
                    </div>
                    <div className="checkbox-container1">
                    <label className="checkbox-container switch">
                      Numeric
                      <input
                        type="checkbox"
                        checked={this.state.numeric}
                        name="numeric"
                        onChange={e => this.handleCheckbox(e)}
                      />
                      <span className="slider round" />
                    </label>
                    </div>
                    </div>
                    <div className="checkbox-container1">
                    <label className="checkbox-container switch">
                      Symbols
                      <input
                        type="checkbox"
                        checked={this.state.symbol}
                        name="symbol"
                        onChange={e => this.handleCheckbox(e)}
                      />
                      <span className="slider round" />
                    </label>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <div className="row length-input">
                      <div className="col">
                        <label htmlFor="email">Password Length:</label>
                        &nbsp;&nbsp;
                      </div>
                      <div className="col lngh">
                        <input
                          type="number"
                          min="8"
                          max="40"
                          style={{ width: 65 }}
                          value={this.state.length}
                          onChange={e => this.handleLenghtChange(e)}
                        />
                      </div>
                    </div>
                    &nbsp;
                    <div className="slider-container">
                      <input
                        className="hi"
                        type="range"
                        min="8"
                        max="40"
                        value={this.state.length}
                        onChange={e => this.handleLenghtChange(e)}
                      />
                    </div>
                  </div>
                </div>
            {/* </fieldset> */}
            <br />
            <div>
              <div className="row">
                <div className="col">
                  <button
                    className="btn  btn-primary"
                    onClick={() => {
                      this.generatePwd();
                    }}
                  >
                    Generate
                  </button>
                </div>
              </div>

              <br />
              <br />
            </div>
          </section>
        </div>
      </div>
      </div>
    );
  }
  
}

export default App;
