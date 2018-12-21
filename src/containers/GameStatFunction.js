import { connect } from 'react-redux'
import GameStats from '../components/GameStats'
import {
    updateTimer
} from '../Actions';

const mapStateToProps = state => {
    return {
        timer : state.game.timer,
        score : state.game.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clockTimer: x => {
            dispatch(updateTimer())
        }
    }
}
const GameStatFunction = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameStats);

export default GameStatFunction