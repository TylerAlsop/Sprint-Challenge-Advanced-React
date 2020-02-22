import React from 'react';

const PlayerCard = props => {

    return (
        <div className="player-card">
            {props.playersInfo.map(player => (
                <div key={player.id}>
                    <button className="player-card-button">
                        <h3 className="player-name">{player.name}</h3>
                        <p>{player.name} is from {player.country} and has {player.searches} searches.</p>
                    </button>
                </div>
            ))}
            
        </div>
    );
};

export default PlayerCard
