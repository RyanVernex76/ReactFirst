import React from 'react'
import Proptype from 'prop-types'
import './GuessCount.css'


const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.propTypes = {
    guesses : Proptype.number.isRequired
}

export default GuessCount