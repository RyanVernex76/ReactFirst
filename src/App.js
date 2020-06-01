import React, { Component } from 'react'
import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import './App.css'
import shuffle from 'lodash.shuffle'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'


class App extends Component {

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  cards = this.generateCards()

  render() {
    const victoire = new Date().getSeconds() % 2 === 0

    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {this.cards.map((card, index) => (
        <Card
          card={card}
          feedback="visible"
          key={index}
          onClick={this.handleCardClick}
        />))}
        {victoire && <HallOfFame entries={FAKE_HOF} />}
      </div>
    )
  }
}

export default App