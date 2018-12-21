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
            <div class="container"> 
                <p class="second">seconde(s) restantes : {timer}</p> 
            <p class="score">&nbsp;&nbsp;&nbsp; score : {score}</p>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<button class="reset" onClick={() => window.location.reload()}>restart</button>
            </div>
        )
    }
}
GameStats.propTypes = {
    timer: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
}

export default GameStats