// Define helper modules
let skill = require("../library/skillHelper.js");

let info = {
    id: "darui",
    name: "Darui",
};

let skills = {
    skill1: {
        id: 1,
        name: "Almighty Push",
        type: "attack",
        val: 20,
        cooldown: 0,
        target: "ally/self",
        classes: ["Chakra", "Ranged", "Invisible", "Unreflectable"],
        energy: {
            white: 1,
        },
        description:
            "Pain targets himself or an ally. The first skill an enemy uses on them next turn will be countered, and the person countered will take 20 damage. Once used, this skill alternates between [Universal Pull] and [Almighty Push] every turn.",
        move: null
        
    },
    skill2: {
        id: 2,
        name: "Rasengan",
        type: "attack",
        val: 45,
        cooldown: 1,
        description:
            "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
        classes: ["instant", "melee", "energy"],
        target: "enemy",
        energy: {
            black: 1,
            red: 1,
        },
        move: function (payload, self) {
            skillHelper.damage({
                subject: payload.target,
                val: payload.val,
            });
        },
        // figure out how to implements stuns
    },
    skill3: {
        id: 3,
        name: "Shadow Clones",
        type: "attack",
        harmful: false,
        val: 0,
        cooldown: 3,
        description:
        "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
        classes: ["instant", "energy"],
        target: "self",
        energy: {
            black: 1,
        },
        // TODO: implement self targeting
    },
    skill4:{
        id:4,
        name: "Sexy Jutsu",
        type: "invulnerable",
        val: 0,
        cooldown: 4,
        description: "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
        classes: ["instant", "energy"],
        target: "self",
        energy: {
            black: 1,
        },
        // TODO: implement self targeting
    }
};


let character = {
    name: info.name,
    id: info.id,
    hp: 100,
    skill : [skills.skill1, skills.skill2, skills.skill3, skills.skill4]
}

module.exports = character;