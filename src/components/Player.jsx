import React,  { useState }  from 'react';

const Player = ({name, symbol}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handleClick = () => {
        // toggle isEditing
        setIsEditing((editing) => !editing);
    }
    return (
        <li>
            <span className="player">
                {
                    isEditing ? <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)}/> : 
                        <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>  
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save ' : 'Edit'}</button>
        </li>
    );
};

export default Player;