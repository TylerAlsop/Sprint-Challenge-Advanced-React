import React from 'react';

const PlayerCard = props => {

    return (
        // <div className="player-card">
        //     {props.playersInfo.map((player) => {
                
        //     })}

        // </div>
        
        <div className="player-card">
            {props.playersInfo.map(player => (
                <div key={player.id}>
                    <h2 className="player-name">{player.name}</h2>
                    <p>{player.name} is from {player.country} and has {player.searches} searches.</p>
                </div>
            ))}
            
        </div>
    );
};

export default PlayerCard
