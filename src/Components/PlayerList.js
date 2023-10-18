import React from 'react';
import Player from './Player';
import { players } from './Players';




const PlayerList = () => {
    return (
        <div className="d-flex justify-content-center">
            { players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
}

export default PlayerList;
