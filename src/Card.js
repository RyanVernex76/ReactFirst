import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

function handleCardClick(card) {
  console.log(card, 'clicked')
}

const Card = ({ card, feedback }) => (
    <div className={`card ${feedback}`} onClick={() => handleCardClick(card)}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )

export default Card