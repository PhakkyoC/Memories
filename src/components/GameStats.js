import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GameStats extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const {clockTimer} = this.props;
        this.countdown = setInterval(()=>{
            clockTimer(0);
        }, 1000);
    }
    render() {
        const { timer,score} = this.props;
        return(
            <div> seconde(s) restantes : {timer} &nbsp;&nbsp;&nbsp; score : {score}
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<button onClick={() => window.location.reload()}>restart</button>
            </div>
        )
    }
}
GameStats.propTypes = {
    timer: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
}

export default GameStats