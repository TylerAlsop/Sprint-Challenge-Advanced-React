import React from 'react';
import PlayerCard from './PlayerCard';


const FavPlayerList = props => {


    console.log("playersInfo in FavPlayerList", props.playersInfo)

    console.log("favPlayer? in FavPlayerList", props.favPlayerKey)




    if (props.favPlayerKey === true) {
        return (
            <div className="player-list">
                <PlayerCard 
                    playersInfo={props.playersInfo}
                 />
            </div>
        );
    }
    return (
        <div>

        </div>
    );
};

export default FavPlayerList