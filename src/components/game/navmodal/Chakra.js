import React from "react";

export default function Chakra() {
    return (
        <div className={"chakraModal"}>
            <div className="chakra">
                <img src="http://localhost:8888/green.jpg" alt="red" />
                <span>x1</span>
            </div>
            <div className="chakra">
                <img src="http://localhost:8888/red.jpg" alt="red" />
                <span>x1</span>
            </div>
            <div className="chakra">
                <img src="http://localhost:8888/blue.jpg" alt="red" />
                <span>x1</span>
            </div>
            <div className="chakra">
                <img src="http://localhost:8888/white.jpg" alt="red" />
                <span>x1</span>
            </div>
        </div>
    );
}
