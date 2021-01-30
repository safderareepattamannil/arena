import React, { useState, useEffect } from "react";
import InfoModal from "./infomodal/InfoModal";
import Player from "./player/Player";
import Nav from "./navmodal/Nav";
import Opponent from "./Opponent/Opponent";

export default function Game() {
    let teamId = ["darui", "itachiUchiha", "tobi"];
    let oppId =  ["uzumakiNaruto", "sageModeKabuto", "devaPathPain"]

    const [playerReady, setPlayerReady] = useState(false);
    const [enemyReady, setEnemyReady] = useState(false);
    // this should just be one game state eventually
    const [team, setTeam] = useState();
    const [enemy, setEnemyTeam] = useState();
    let path = "http://localhost:8888";


    const [selected, setSelected] = useState(null);

    let loadTeam = async () => {
        const urls = teamId.map((id) => path + "/char/" + id);
        try {
            let res = await Promise.all(urls.map((e) => fetch(e)));
            let resJson = await Promise.all(res.map((e) => e.json()));
            setTeam([...resJson]);
           setPlayerReady(true);
        } catch (err) {
            console.log(err);
        }
    };

    let loadEnemyTeam = async () => {
        const urls = oppId.map((id) => path + "/char/" + id);
        try {
            let res = await Promise.all(urls.map((e) => fetch(e)));
            let resJson = await Promise.all(res.map((e) => e.json()));
            console.log(resJson);
            setEnemyTeam([...resJson]);
            setEnemyReady(true);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadTeam();
        loadEnemyTeam();
    }, []);
 
    return (
        <div className="game">
            <div className="game__nav">
                <Nav />
            </div>
            <div className="game__battle-container">
                <div className="battle-container__player">
                    <Player path={path} team={team} ready={playerReady} updateSelected={setSelected}/>
                </div>
                <div className="battle-container__opponent">
                    {(
                       enemyReady && <Opponent path={path} enemy={enemy}/>
                    )}
                </div>
                <div className="battle-container__infoModal">
                {playerReady && selected && <InfoModal selectedStateMoves={selected[1]} selectedStateId={selected[0]} path={path}/>}
            </div>
            </div>


        </div>
    );
}
