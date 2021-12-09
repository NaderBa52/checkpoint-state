import React, { Component } from 'react'
import Profile from './components/Profile';

export class App extends Component {
  state ={
    isshow:false
  }
  handleclick=()=>{this.setState({isshow: ! this.state.isshow });}
  render() {
    return (
      <div style={{ marginTop:"100px",textAlign:"center"}}> 
        <button onClick={this.handleclick}> Show</button>
       {this.state.isshow===true ? <Profile/>:null } 
      </div>
    )
  }
}

export default App

