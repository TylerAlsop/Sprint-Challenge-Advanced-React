import React from 'react';

const PlayerCard = props => {
    console.log("playersInfo in PlayerCard", props.playersInfo)

    console.log("favPlayer? in PlayerCard", props.favPlayerKey)    

    return (
        <div className="player-card">
            {props.playersInfo.map(player => (
                <div key={player.id}>
                    <button className="player-card-button">
                        <h3 className="player-name">{player.name}</h3>
                        <p>{player.name} is from {player.country} and has {player.searches} searches. Is a favPlayer? {player.favPlayer}</p>
                    </button>
                </div>
            ))}
            
        </div>
    );
};

export default PlayerCard
