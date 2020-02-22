import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = props => {

    return (
        <div className="player-list">
            <PlayerCard favPlayersInfo={props.favPlayersInfo} />
        </div>
    );
};

export default PlayerList