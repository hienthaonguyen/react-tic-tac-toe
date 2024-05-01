import React, {useState} from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combination'
import GameOver from './components/GameOver'

const initialBoard = [[null, null, null], [null, null, null], [null, null, null]];

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

  let gameBoard = [...initialBoard.map(innerArray => [...innerArray])];

  // derive state from props
  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    // check if all squares are filled and have the same value
    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = firstSquare;
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurn)=>{
      const currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurn]
      return updatedTurns;
    })
  }

  const handRematch = () => {
    setGameTurns([]);
  }

  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="Player 1" symbol="X" isActive={ activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={ activePlayer === 'O'}/>
        </ol>
        {(!!winner || isDraw) && <GameOver winner={winner} rematch={handRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard = {gameBoard}/>
      </div>
      <Log gameTurns={gameTurns}/>
    </main>
  )
}

export default App
