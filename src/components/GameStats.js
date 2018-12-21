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
            <div className="container"> 
                <p className="second">Seconde(s) restantes : {timer}</p> 
            <p className="score">Score : {score}</p>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<button className="reset" onClick={() => window.location.reload()}>restart</button>
            </div>
        )
    }
}
GameStats.propTypes = {
    timer: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
}

export default GameStats