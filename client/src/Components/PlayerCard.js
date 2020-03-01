import React, { useState } from 'react';
import makeFavPlayer from '../Hooks/index'

const PlayerCard = props => {  
    
    return (
        <div className="player-card-container">
            {props.playersInfo.map(player => (
                <button className="player-card-button" key={player.id} >
                    <h3 className="player-name">{player.name}</h3>
                    <p>{player.name} is from {player.country} and has been searched {player.searches} times.</p>
                </button>
            ))}
        </div>
    );
};

export default PlayerCard
