import React from 'react';

const Log = ({gameTurns}) => {
    const playerName = (player) => { return player === 'X' ? 'Player 1' : 'Player 2'; }
    return (
        <ol id="log">
            {gameTurns.map((turn) => {
                return(
                    <li className={index ? "highlighted" : ""} key={`${turn.square.row}${turn.square.col+1}`}>
                        {playerName(turn.player)} played at row {turn.square.row + 1}, col {turn.square.col+1}
                    </li>
                )})
            }
        </ol>
    );
};

export default Log;