import React, {useState} from 'react';

const initialBoard = [[null, null, null], [null, null, null], [null, null, null]];
const GameBoard = () => {
    const playerSymbol = 'X';
    // Your component logic goes here
    const [board, setBoard] = useState(initialBoard);
    const handleClick = (rowIndex, colIndex, symbol) => {
        setBoard((preBoard) => {
            // create a new array from the previous board, copied nested arrays
            const updatedBoard = [...preBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        })
    }
    console.log(initialBoard)
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => {
                return( 
                    <li key={rowIndex} className="row" onClick={() => {console.log(row)}}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => {
                                return (
                                    <li key={colIndex}><button onClick={()=> handleClick(rowIndex, colIndex, playerSymbol)}>{playerSymbol}</button></li>
                                )
                            })}
                        </ol>
                </li>)
            })}
        </ol>
    );
};

export default GameBoard;