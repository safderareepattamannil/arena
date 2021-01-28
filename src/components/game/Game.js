import React from "react";
import InfoModal from "./infomodal/InfoModal";
import Player from "./player/Player";

export default function Game() {
    return (
        <div className="game">
            <div className="game__nav">nav</div>
            <div className="game__battle-container">
                <div className="battle-container__player">
                    <Player/>
                </div>
                <div className="opponent">opponent</div>
                <div className="infoModal">
                    <InfoModal/>
                </div>
            </div>
        </div>
    );
}
