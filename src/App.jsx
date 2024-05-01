import React, {useState} from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((cur) => cur === 'X' ? 'O' : 'X')
    setGameTurns((prevTurn)=>{
      let currentPlayer = 'X';

      if (prevTurn.length > 0 && prevTurn[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurn]
      return updatedTurns;
    })
  }

  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="Player 1" symbol="X" isActive={ activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={ activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} gameTurns = {gameTurns}/>
      </div>
      <Log gameTurns={gameTurns}/>
    </main>
  )
}

export default App
