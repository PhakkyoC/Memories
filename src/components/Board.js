import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class Board extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const {loadDeck} = this.props;
        loadDeck(0)
    }
    render() {
        const { cards, onCardClick } = this.props;
        return(
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}
            >{cards.map((card) => (
                <Card key={card.id} {...card} onClick={() => onCardClick(card.id,card.value)} />
            ))}
            </div>
        )
    }
}
Board.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired,
            code : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onCardClick: PropTypes.func.isRequired,
}

export default Board