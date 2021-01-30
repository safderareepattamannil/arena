import React from "react";

export default function InfoModal({
    selectedStateMoves,
    selectedStateId,
    path,
}) {
    console.log(selectedStateMoves);

    let energyDisplayHelper = () => {
        let count = [];
        let flattenedObj = Object.entries(selectedStateMoves.energy);
        for (let i = 0; i < flattenedObj.length; i++) {
            for (let j = 0; j < flattenedObj[i][1]; j++) {
                count.push(flattenedObj[i][0]);
            }
        }
        return count;
    };
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
                            <span key={selectedStateMoves.classes.indexOf(cl)}>
                                {cl + " "}
                            </span>
                        ))}
                    </div>
                    <div className="cooldown">
                        COOLDOWN: {selectedStateMoves.cooldown}
                    </div>

                    <div className="energy">
                        {energyDisplayHelper().map((item) => (
                            <img
                                key={energyDisplayHelper().indexOf(item)}
                                src={`${path}/${item}.jpg`}
                                alt="chakra"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
