import React from "react";

export default function InfoModal({
    selectedStateMoves,
    selectedStateId,
    path,
}) {
    console.log(selectedStateMoves);
    return (
        <div className="infoWrapper">
            <div className="skillimage">
                <img
                    src={`${path}/${selectedStateId}/skill${selectedStateMoves.id}/skill${selectedStateMoves.id}.jpg`}
                    alt="skill"
                />
            </div>
            <div className="skillDescription">
                <div className="toprow">
                    <div className="skillname">{selectedStateMoves.name}</div>
                    <div className="energy">
                        {console.log(selectedStateMoves.energy)}
                    </div>
                </div>
                <div className="midrow">
                    <div className="description">
                        {selectedStateMoves.description}
                    </div>
                </div>
                <div className="bottomrow">
                    <div className="classes">
                        CLASSES:
                        {selectedStateMoves.classes.map((cl) => (
                            <p key={selectedStateMoves.classes.indexOf(cl)}>
                                {cl}
                            </p>
                        ))}
                    </div>
                    <div className="cooldown">
                        COOLDOWN: {selectedStateMoves.cooldown}
                    </div>
                </div>
            </div>
        </div>
    );
}
