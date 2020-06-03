import React, { Component } from 'react'
import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'
import './App.css'
import shuffle from 'lodash.shuffle'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 1250


class App extends Component {

  state = {
    cards : this.generateCards(),
    PaireEnCours : [],
    guesses : 0,
    IndicesCartesTrouves : [],
  }

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
  
  handleCardClick = (index) => {
    const { PaireEnCours } = this.state

    if(PaireEnCours.length === 2)
    {
      return
    }
    if(PaireEnCours.length === 0){
      this.setState({PaireEnCours : [index]})
      return
    }
    this.handleNouvellePaire(index)
  }

  handleNouvellePaire(index) {
    const { cards, PaireEnCours, guesses, IndicesCartesTrouves } = this.state

    const newPair = [PaireEnCours[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ PaireEnCours: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ IndicesCartesTrouves: IndicesCartesTrouves.concat(newPair) })
    }
    
    setTimeout(() => this.setState({ PaireEnCours: [] }), VISUAL_PAUSE_MSECS)
  }

  getEtatCard(index){
    const {PaireEnCours, IndicesCartesTrouves} = this.state
    const indexMatched = IndicesCartesTrouves.includes(index)

    if(PaireEnCours.length === 2){
      return index === PaireEnCours[0] || index === PaireEnCours[1] ? "visible" : "hidden"
    }
    if(PaireEnCours.length === 1){
      if(PaireEnCours.includes(index)){
        return indexMatched || index === PaireEnCours[0] ? "visible" : "hidden"
      }
    }
    return indexMatched ? "visible" : "hidden"
  }

  render() {
    const {cards, guesses, IndicesCartesTrouves} = this.state
    const victoire = IndicesCartesTrouves.length === cards.length

    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card, index) => (
        <Card
          card={card}
          feedback={this.getEtatCard(index)}
          index = {index}
          key={index}
          onClick={this.handleCardClick}
        />))}
        {victoire && <HallOfFame entries={FAKE_HOF} />}
      </div>
    )
  }
}

export default App