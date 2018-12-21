import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ onClick, flipped, value, image }) => (
    <span
        style={{
            width : '100px',
            margin:" 6px 6px 6px 6px",
            height : "120px"
        }}
        onClick={onClick}>
        <img style={{
            maxWidth : '100px',
            maxHeight : "120px"
        }} src={flipped ? image: 'dos_de_carte.jpg'}/>
    </span>
)

Card.propTypes = {
    onClick: PropTypes.func.isRequired,
    flipped: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Card