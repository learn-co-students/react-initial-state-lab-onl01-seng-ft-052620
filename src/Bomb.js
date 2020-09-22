import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  bombDisplay(){
    if (this.state.secondsLeft > 0){
      return(
        <span>{this.state.secondsLeft} seconds left before I go boom!</span>
      )
    } else {
      return <span>Boom!</span>
    }
  }

  render(){
    return(
      <div>
        {this.bombDisplay()}
      </div>
    )
  }
}

export default Bomb
