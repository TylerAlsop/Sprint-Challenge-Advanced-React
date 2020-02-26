import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = props => {
    console.log("playersInfo in PlayerList", props.playersInfo)

    return (
        <div className="player-list">
            <PlayerCard playersInfo={props.playersInfo}  />
        </div>
    );
};

export default PlayerList