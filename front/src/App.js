import React, { Component } from 'react';
import './App.css';
import Principal from "./components/principal";

class App extends Component {

 constructor(props){
        super(props);
        this.state = {
        }
    }

  render() {
    return (
      <div>
      <Principal/>
      </div>
    );
  }
}

export default App;
