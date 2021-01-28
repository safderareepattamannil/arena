import React, { useState } from "react";

export default function Character({ id, path, team }) {
    const [selected, setSelected] = useState();
    // TODO: FIGURE OUT HOW TO HANDLE SELECT
    let selectedItem = (e) => {
        console.log(e.currentTarget.id);
        setSelected(e.currentTarget.id);
        console.log(selected);
    };
    console.log(team[0][0].id);

    return (
        <div className="player__char">
            <div className="player__char-wrapper">
                <div
                    id={`${id}-avatar`}
                    className={`player__char-image bordered`}
                >
                    <img
                        src={`${path}/${team[id][0].id}/avatar.jpg`}
                        alt="avatar"
                    />
                </div>
                <div className="player__char-health">
                    <span className="hpValue">100/100</span>
                    <progress id="health" value="100" max="100"></progress>
                </div>
            </div>
            <div className="player__char-skills-container">
                <div id={`${id}-selectedSkill`} className="selectedSkill"></div>
                <div
                    id={`${id}-skill-1`}
                    className="skill selectable"
                    onClick={() => {
                        console.log(team[id][0].skill[0]);
                    }}
                >
                    <img
                        src={`${path}/${team[id][0].id}/skill1/avatar.jpg`}
                        alt="skill 1"
                    />
                </div>
                <div className="skill selectable"
                onClick={() => {
                    console.log(team[id][0].skill[1]);
                }}>
                    <img
                        src={`${path}/${team[id][0].id}/skill2/avatar.jpg`}
                        alt="skill 1"
                    />
                </div>
                <div className="skill selectable"
                onClick={() => {
                    console.log(team[id][0].skill[2]);
                }}>
                    <img
                        src={`${path}/${team[id][0].id}/skill3/avatar.jpg`}
                        alt="skill 1"
                    />
                </div>
                <div className="skill selectable"
                onClick={() => {
                    console.log(team[id][0].skill[3]);
                }}>
                    <img
                        src={`${path}/${team[id][0].id}/skill4/avatar.jpg`}
                        alt="skill 1"
                    />
                </div>
            </div>
        </div>
    );
}
