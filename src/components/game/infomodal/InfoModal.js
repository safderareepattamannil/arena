import React from 'react'

export default function InfoModal() {
    return (
        <div className="infoWrapper">
            <div className="skillimage">
                <img src="http://localhost:8888/uzumakiNaruto/skill2/avatar.jpg" alt="skill"/>
            </div>
            <div className="skillDescription">
                <div className="toprow">
                    <div className="skillname">Rasengan</div>
                    <div className="energy">ENERGY:</div>
                </div>
                <div className="midrow">
                    <div className="description">
                        Rasengan
                    </div>
                </div>
                <div className="bottomrow">
                    <div className="classes">CLASSES:</div>
                    <div className="cooldown">COOLDOWN: 4</div>
                </div>
            </div>
        </div>
    )
}
