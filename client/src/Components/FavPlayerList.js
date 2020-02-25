import React from 'react';
import PlayerCard from './PlayerCard';


const FavPlayerList = props => {

    const isFavPlayer = () => {
        if (props.playersInfo.favPlayer === true) {
            return (
                <div className="player-list">
                    <PlayerCard playersInfo={props.playersInfo} />
                </div>
            );
        }
    } 
    
    
    return isFavPlayer;
};

export default FavPlayerList