const hero = {
    name: "HenkyTanky",
    heroic: true,
    inventory: [],
    health: 10,
    weapon : {
        type: "Chaos",
        damage: 2
    }
};

function rest(currentHero) {
    currentHero.health = 10;
    return currentHero;
};