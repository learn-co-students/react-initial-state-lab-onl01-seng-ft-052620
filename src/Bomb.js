// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props){
        super() //this is required in React components if we are to use this in the constructor
        this.state = {
            secondsLeft: props.initialCount //should set the `secondsLeft` to the value of the `initialCount` prop
        }
    }
    render() {

        const something = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

        return(
            <p>{something}</p>
        )
    }
}