//Hero object with basic keys and values
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

//New weapon called dagger
const dagger = {
    type: "dagger",
    damage: 2
};

//Resting function that resets hero's hp
function rest(currentHero) {
    currentHero.health = 10;
    return currentHero;
};

//Function that makes the hero pick up the clicked item
function pickUpItem(currentHero, pickedUpWeapon) {
    const lastPlace = currentHero.inventory.length;
    currentHero.inventory[lastPlace] = pickedUpWeapon;
    return currentHero;
};

//Function that equips the first item in the heros inventory
function equipWeapon (currentHero) {
    if(!currentHero.inventory.length == 0){
    currentHero.weapon = currentHero.inventory[0];
    }
    return currentHero;
};