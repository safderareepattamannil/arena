
import React from 'react'
import Chakra from './Chakra'

export default function Nav() {
    return (
        <div className="navBar">
            <div className="player">
                player avatar
            </div>
            <div className="middleModal">

                <a href="#">PRESS WHEN READY</a>
                <div className="timer">
                    <progress id="time" value="100" max="100"></progress>
                </div>
                <div className="currentEnergy">
                    <Chakra/>
                </div>
            </div>
            <div className="enemy">
                enemy
            </div>
        </div>
    )
}
