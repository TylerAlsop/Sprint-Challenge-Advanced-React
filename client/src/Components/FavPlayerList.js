import React from 'react';
import PlayerCard from './PlayerCard';


const FavPlayerList = props => {


    console.log("playersInfo in FavPlayerList", props.playersInfo)

    console.log("favPlayer? in FavPlayerList", props.favPlayerKey)



    return (
        <div>
            {!props.favPlayerKey ? (
            <div className="player-list">
                <PlayerCard 
                    playersInfo={props.playersInfo}

                />
            </div>
            ) : (
            <div>
    
            </div>
        )}
        </div>
        
    );
    
};

export default FavPlayerList