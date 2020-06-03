import React from 'react'
import Proptype from 'prop-types'
import './HallOfFame.css'


const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
        {entries.map(({ date, guesses, id, player }) => (
        <tr key={id}>
          <td className="date">{date}</td>
          <td className="guesses">{guesses}</td>
          <td className="player">{player}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

HallOfFame.propTypes = {
  entries : Proptype.arrayOf(
    Proptype.shape({
      date: Proptype.string.isRequired,
      guesses: Proptype.number.isRequired,
      id: Proptype.number.isRequired,
      player: Proptype.string.isRequired,
    })
  ).isRequired
}

export default HallOfFame

// == Internal helpers ==============================================

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '10/10/2017', player: 'Jane' },
  { id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin' },
  { id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa' },
  { id: 0, guesses: 48, date: '14/10/2017', player: 'Marc' },
]