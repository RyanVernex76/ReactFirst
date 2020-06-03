import React from 'react'
import Proptype from 'prop-types'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, index,  onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )

  Card.Proptype = {
    card : Proptype.string.isRequired,
    feedback : Proptype.oneOf([
      'hidden',
      'justMatched',
      'justMismatched',
      'visible',
    ]).isRequired,
    index : Proptype.number.isRequired,
    onClick : Proptype.func.isRequired,
  }

export default Card