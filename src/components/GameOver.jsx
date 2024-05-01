const GameOver = ({winner, rematch}) => {
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {!!winner ? <p>{winner} wins!</p> : <p>It's a draw!</p>}
            <button onClick={rematch}>Rematch!</button>
        </div>
    )
};

export default GameOver;