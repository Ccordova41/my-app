import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              <Header/>
          </div>
        </div>
      <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              <Home name={"Matt Smith"} InitialAge={27}/>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
