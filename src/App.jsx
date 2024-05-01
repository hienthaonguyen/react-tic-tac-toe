import React, {useState} from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

// create helper function for currentPlayer
const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurn)=>{
      const currentPlayer = deriveActivePlayer(prevTurn);

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
