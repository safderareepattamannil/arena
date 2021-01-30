import React from "react";

export default function Opponent({path, enemy}) {
    console.log(path);
    console.log(enemy);
    return (
        <div className="player__char enemy-container">
            <div className="player__char-wrapper enemy-wrapper">
                <div
                    id={`0-opp`}
                    className={`player__char-image bordered`}
                >

                <img className={"flipped"} src={`${path}/${enemy[0][0].id}/avatar.jpg`} alt="enemy one"/>
                   
                </div>
                <div className="player__char-health">
                    <span className="hpValue">100/100</span>
                    <progress id="health" value="100" max="100"></progress>
                </div>
            </div>

            <div className="player__char-wrapper enemy-wrapper">
                <div
                    id={`1-opp`}
                    className={`player__char-image bordered`}
                >

                <img className={"flipped"} src={`${path}/${enemy[1][0].id}/avatar.jpg`} alt="enemy two"/>
                   
                </div>
                <div className="player__char-health">
                    <span className="hpValue">100/100</span>
                    <progress id="health" value="100" max="100"></progress>
                </div>
            </div>

            <div className="player__char-wrapper enemy-wrapper">
                <div
                    id={`2-opp`}
                    className={`player__char-image bordered`}
                >

                <img  className={"flipped"} src={`${path}/${enemy[2][0].id}/avatar.jpg`}alt="enemy three"/>
                   
                </div>
                <div className="player__char-health">
                    <span className="hpValue">100/100</span>
                    <progress id="health" value="100" max="100"></progress>
                </div>
            </div>
        </div>
    );
}
