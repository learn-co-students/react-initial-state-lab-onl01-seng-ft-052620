import {Component} from "react"

class Bomb extends Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        let text
        if (this.state.secondsLeft === 0) {
            text = "Boom!"
        } else {
            text = `${this.state.secondsLeft} seconds left before I go boom!`
        }
        return text
    }
}

export default Bomb