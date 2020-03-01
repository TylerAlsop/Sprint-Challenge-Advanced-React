import React from 'react';
import PlayerCard from './PlayerCard';
import changeBackground from '../Hooks/index'



const PlayerList = props => {
    console.log("playersInfo in PlayerList", props.playersInfo)


    const greenClick = e => {
        e.preventDefault();
        changeBackground("green");
    }

    const blueClick = e => {
        e.preventDefault();
        changeBackground("#282c34");
    }

    return (
        
        <div className="player-list">

            <button className="change-background-button" onClick={greenClick} >Change Background Color To Green</button>
            <button className="change-background-button" onClick={blueClick} >Change Background Color To Original</button>
            <PlayerCard 
                playersInfo={props.playersInfo}
            />
        </div>
    );
};

export default PlayerList