// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
    constructor(props){
        console.log(props)
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render(){
        console.log(this.state.secondsLeft)
        if (this.state.secondsLeft > 0){
           return(<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
        }else{
            return <div>Boom!</div>
        }

        
    }
}
export default Bomb