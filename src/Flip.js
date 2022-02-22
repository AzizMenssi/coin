import React, { Component } from "react";
import Coin from "./Coin";
export default class Flip extends Component {
    state={
        head:0,
        tail:0,
        try:0,
    }
  random = () => {
    let rand=Math.floor(Math.random()*2)+1
    if(rand===1){
        this.setState({src:"./head.png"})
        this.setState(st=>({head :st.head+1}))
    }
    else {
        this.setState({src:"./tail.png"})
        this.setState(st=>({tail :st.tail+1}))

    }
    this.setState(st=>({try :st.try+1}))
  };
  handleClick=()=>{
      this.random()
  }
 
  render() {
    return (
      <div>
        <Coin src={this.state.src} />
        <button onClick={this.handleClick}>Flip</button>
        <h3>
          {this.state.try} flips : {this.state.head} heads ,{" "}
          {this.state.tail} tails
        </h3>
      </div>
    );
  }
}
