
const teams = {
    'light': null,
    'dark': null
}

class Unit {
    constructor(group, name, members, defenser, ranger, attackrr, attackcr, travelr, health, defense, range, attackr, attackc, travel) {
        this.group = group
        this.name = name;
        this.members = members;
        this.rolls = {
            "Defense": defenser,
            "Range": ranger,
            "Range Attack": attackrr,
            "Close Attack": attackcr,
            "Travel": travelr
        };
        this.stats = {
            "Defense": defense,
            "Range": range,
            "Range Attack": attackr,
            "Close Attack": attackc,
            "Travel": travel,
        };
        this.health = health
        this.grouphealth = [health, health, health, health, health]
    }
}

const chapters = {
    chapter_1: {
        light: [
            new Unit('Villager', 'Archers', 5, 1, 2, 1, 1, 1, 12, 0, 10, 8, 0, 0),
            new Unit('Villager', 'Swordsmen', 5, 1, 0, 0, 1, 2, 16, 4, 0, 0, 8, 0),
            new Unit('Villager', 'Healer', 5, 0, 1, 1, 1, 2, 14, 0, 0, 0, 0, 4),
            new Unit('Villager', 'Cavalry', 5, 1, 0, 0, 1, 2, 24, 0, 0, 0, 12, 10)
        ],
        dark: []
    },
    chapter_2: {
        light: [],
        dark: [],
    },
    chapter_3: {
        light: [],
        dark: [],
    },
    chapter_4: {
        light: [],
        dark: [],
    },
    chapter_5: {
        light: [],
        dark: [],
    },
    chapter_6: {
        light: [],
        dark: [],
    },
    chapter_7: {
        light: [],
        dark: [],
    },
    chapter_8: {
        light: [],
        dark: [],
    },
    chapter_9: {
        light: [],
        dark: [],
    },
}


module.exports = {
    teams,
    chapters,
}