import { connect } from 'react-redux'
import Board from '../components/Board'
import {
    getDeck,
    onCardClick
} from '../Actions';

const mapStateToProps = state => {

    return {
        cards: state.cards
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCardClick: (id,value) => {
            dispatch(onCardClick(id,value));
        },
        loadDeck: e =>{
            dispatch(getDeck(e))
        },
    }
}
const BoardGame = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardGame