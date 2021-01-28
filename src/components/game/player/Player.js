import React, { useState, useEffect } from "react";
import Character from "./character/Character";

export default function Player() {
    const [ready, setReady] = useState(false);
    const [team, setTeam] = useState([]);
    const [selected, setSelected] = useState();
    let path = "http://localhost:8888";

    let loadTeam = () => {
        fetch(`http://localhost:8888/char/uzumakiNaruto`)
            .then((res) => {
                if (res.status !== 200) {
                    console.log("Error with GET");
                    return;
                }
                return res.json();
            })
            .then((data) => {
                if (!data) {
                    console.log("error");
                }
                setTeam([...data]);
                setReady(true);
                console.log(team);
            })
            .catch((err) => console.log(err.message));
    };

    useEffect(() => {
        loadTeam();
    }, []);



    return (
        <div className="player">
            {team.length > 0 && (
                <Character
                    id={0}
                    path={path}
                    team={team}
                    selected={selectedItem}
                    currSelection={selected}
                />
            )}
            <Character path={path} team={team}/>
            <Character path={path} team={team}/>
        </div>
    );
}
