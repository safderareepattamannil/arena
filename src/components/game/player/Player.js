import React from "react";

export default function Player() {
    return (
        <div className="player">
            <div className="player__char">
                <div className="player__char-wrapper">
                    <div className="player__char-image">dp</div>
                    <div className="player__char-health">100</div>
                </div>
                <div className="player__char-skills-container">
                    <div className="skill">skill 1</div>
                    <div className="skill">skill 2</div>
                    <div className="skill">skill 3</div>
                    <div className="skill">skill 4</div>
                </div>
            </div>
            <div className="player__char"></div>
            <div className="player__char"></div>
        </div>
    );
}
