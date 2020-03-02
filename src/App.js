import React, {Component} from 'react';
import Content from './Components/Content'
import Buttons from './Components/Buttons'
// import data from './Components/data'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <div class='app'>
        <div class='nav-bar'><h2>HOME</h2></div>
        {/* <Data /> */}
        {/* <Content /> */}
        <Buttons />

      </div>
    )
  }
}

export default App;
