const hero = {
    name: "HenkyTanky",
    heroic: true,
    inventory: [],
    health: 10,
    weapon : {
        type: "knife",
        damage: 2
    }
};

const dagger = {
    type: "dagger",
    damage: 2
};

function rest(currentHero) {
    currentHero.health = 10;
    return currentHero;
};

function pickUpItem(currentHero, pickedUpWeapon) {
    const lastPlace = currentHero.inventory.length;
    currentHero.inventory[lastPlace] = pickedUpWeapon;
    return currentHero;
};

