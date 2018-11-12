import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    joke:''
  }

  fetchJoke = () =>{

    fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json()).then((data) => {
      this.setState({joke: data.value});
    })
  }

  componentDidMount(){
    this.fetchJoke();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchJoke}>Chuck,Make Me Fun!</button>
        <h3>{this.state.joke}</h3>
      </div>
    );
  }
}

export default App;
