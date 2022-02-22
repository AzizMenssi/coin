import React, { Component } from 'react'

export default class Coin extends Component {
    static defaultProps={
        src:"./head.png"
    }
  render() {
 
    return (
      <div><img width="200px" heigh="200px" src={this.props.src} alt=""/></div>
    )
  }
}
