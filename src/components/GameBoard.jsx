import React from 'react';

const initialBoard = [[null, null, null], [null, null, null], [null, null, null]];
const GameBoard = ({ onSelectSquare, gameTurns }) => {
    // Your component logic goes here

    // create array based on gameTurns
    let gameBoard = initialBoard

    // derive 
    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }


    // const [board, setBoard] = useState(initialBoard);
    // const handleClick = (rowIndex, colIndex) => {
    //     setBoard((preBoard) => {
    //         // create a new array from the previous board, copied nested arrays
    //         const updatedBoard = [...preBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activeSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return( 
                    <li key={rowIndex} className="row">
                        <ol>
                            {row.map((playerSymbol, colIndex) => {
                                return (
                                    <li key={colIndex}>
                                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={!!playerSymbol}>
                                            {playerSymbol}
                                        </button>
                                    </li>
                                )
                            })}
                        </ol>
                </li>)
            })}
        </ol>
    );
};

export default GameBoard;