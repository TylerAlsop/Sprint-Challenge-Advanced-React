import React, { useState } from 'react';

const PlayerCard = props => {
    console.log("playersInfo in PlayerCard", props.playersInfo)

    console.log("favPlayer? in PlayerCard", props.favPlayerKey)  

    const handleClick = e => {
        e.preventDefault();
        // makeFavPlayer(!favPlayer)

    }
      

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
