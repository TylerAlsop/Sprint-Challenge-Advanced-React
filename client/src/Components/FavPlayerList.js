import React from 'react';
import PlayerCard from './PlayerCard';


const FavPlayerList = props => {

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