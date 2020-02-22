import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = props => {

    return (
        <div className="player-list">
            <PlayerCard playersInfo={props.playersInfo} />
        </div>
    );
};

export default PlayerList