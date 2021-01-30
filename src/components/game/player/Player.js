import React, { useState, useEffect } from "react";
import Character from "../character/Character";

export default function Player({path, team, ready}) {


    return (
        <div className="player">
            {ready && <Character id={0} path={path} team={team} />}
            {ready && <Character id={1} path={path} team={team} />}
            {ready && <Character id={2} path={path} team={team} />}
        </div>
    );
}
