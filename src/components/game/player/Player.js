import React, { useState, useEffect } from "react";
import Character from "../character/Character";

export default function Player() {
    let teamId = ["uzumakiNaruto", "itachiUchiha", "devaPathPain"];
    const [ready, setReady] = useState(false);
    const [team, setTeam] = useState();
    let path = "http://localhost:8888";

    let loadTeam = async () => {
        // fetch(`http://localhost:8888/char/uzumakiNaruto`)
        //     .then((res) => {
        //         if (res.status !== 200) {
        //             console.log("Error with GET");
        //             return;
        //         }
        //         return res.json();
        //     })
        //     .then((data) => {
        //         if (!data) {
        //             console.log("error");
        //         }
        //         setTeam([...data]);
        //         setReady(true);
        //         console.log(team);
        //     })
        //     .catch((err) => console.log(err.message));
        const urls = teamId.map((id) => path + "/char/" + id);
        console.log(urls);

        try {
            let res = await Promise.all(urls.map((e) => fetch(e)));
            let resJson = await Promise.all(res.map((e) => e.json()));
            console.log(resJson);
            setTeam([...resJson]);
            setReady(true);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadTeam();
    }, []);

    return (
        <div className="player">
            {ready && <Character id={0} path={path} team={team} />}
            {ready && <Character id={1} path={path} team={team} />}
            {ready && <Character id={2} path={path} team={team} />}
        </div>
    );
}
