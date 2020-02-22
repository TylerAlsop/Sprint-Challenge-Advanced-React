import React from 'react';
import FavPlayerCard from './FavPlayerCard';

const PlayerList = props => {

    return (
        <div className="player-list">
            <FavPlayerCard favPlayersInfo={props.favPlayersInfo} />
        </div>
    );
};

export default PlayerList