import React, { Component } from 'react'

export class Profile extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             memory:null
        }
    }
componentDidMount(){
   this.setState({ memory: setInterval(() => {
    this.increment()
}, 1000) });
}
componentWillUnmount(){

    clearInterval(this.state.memory)
}
    
    increment=()=>{this.setState({ count: this.state.count +1 });}
    render() {
        return (
            <div>
                <p>
                    {this.state.count}
                </p>
        <h2>
            Name: benamor nader
        </h2>
        <h3>
            Profession :web developper
        </h3>
        <h4>
            Welcome every one
        </h4>
    <img src="/user.jpg" alt="user" width="450px" height="300"/>
            </div>
        )
    }
}

export default Profile
