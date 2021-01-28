import React, { useState } from "react";

export default function Character({ id, path, team }) {
    const [selected, setSelected] = useState();
    // TODO: FIGURE OUT HOW TO HANDLE SELECT
    let selectedItem = (e) => {
        console.log(e.currentTarget.id);
        setSelected(e.currentTarget.id);
        console.log(selected);
    };

    return (
        <div className="player__char">
            <div className="player__char-wrapper">
                <div
                    id={`${id}-avatar`}
                    className={`player__char-image selectable bordered`}
                >
                    <img
                        src={`${path}/uzumakiNaruto/avatar.jpg`}
                        alt="avatar"
                    />
                </div>
                <div className="player__char-health">
                    <span className="hpValue">
                        100/100
                    </span>
                    <progress id="health" value="100" max="100"></progress>
                </div>
            </div>
            <div className="player__char-skills-container">
                <div id={`${id}-selectedSkill`} className="selectedSkill">
                </div>
                <div id={`${id}-skill-1`} className="skill selectable">
                    <img
                        src={`${path}/uzumakiNaruto/skill1/avatar.jpg`}
                        alt="skill 1"
                    />
                </div>
                <div className="skill selectable">
                    <img
                        src={`${path}/uzumakiNaruto/skill2/avatar.jpg`}
                        alt="skill 1"
                    />
                </div>
                <div className="skill selectable">
                    <img
                        src={`${path}/uzumakiNaruto/skill3/avatar.jpg`}
                        alt="skill 1"
                    />
                </div>
                <div className="skill selectable">
                    <img
                        src={`${path}/uzumakiNaruto/skill4/avatar.jpg`}
                        alt="skill 1"
                    />
                </div>
            </div>
        </div>
    );
}
