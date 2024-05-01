import React, {useState} from 'react';

const initialBoard = [[null, null, null], [null, null, null], [null, null, null]];
const GameBoard = ({ onSelectSquare, activeSymbol }) => {
    // Your component logic goes here
    const [board, setBoard] = useState(initialBoard);
    const handleClick = (rowIndex, colIndex) => {
        setBoard((preBoard) => {
            // create a new array from the previous board, copied nested arrays
            const updatedBoard = [...preBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activeSymbol;
            return updatedBoard;
        })
        onSelectSquare();
    }
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => {
                return( 
                    <li key={rowIndex} className="row">
                        <ol>
                            {row.map((playerSymbol, colIndex) => {
                                return (
                                    <li key={colIndex}><button onClick={()=> handleClick(rowIndex, colIndex)}>{playerSymbol}</button></li>
                                )
                            })}
                        </ol>
                </li>)
            })}
        </ol>
    );
};

export default GameBoard;