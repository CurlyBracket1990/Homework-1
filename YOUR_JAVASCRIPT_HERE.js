//Hero object with basic keys and values
const hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon : {
        type: "knife",
        damage: 2
    }
};

//Creating enemies

const enememes = {
    koala: {
        name: "Koala",
        health: 5,
        weapon: {
            type: "claws",
            damage: 2
        },
        image: "pages/meme1.jpg"
    },

    crybaby: {
        name: "Crybaby",
        health: 1,
        weapon: {
            type: "tears",
            damage: 1
        },
        image: "pages/meme2.jpg"
    },

    Catknight: {
        name: "Catknight",
        health: 10,
        weapon: {
            type: "teeth",
            damage: 1
        },
        image: "pages/meme3.jpg"
    },

    Alpaca: {
        name: "Alpaca",
        health: 3,
        weapon: {
            type: "spit",
            damage: 1
        },
        image: "pages/meme4.jpg"
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

function displayStats(currentHero) {
    //Fetching hero data and store them in variables
    const name = currentHero.name;
    const health = currentHero.health;
    const weaponType = currentHero.weapon.type;
    const weaponDamage = currentHero.weapon.damage;

    //Declaring variables to store new html elements in
    const statsDiv = document.createElement("div");
    statsDiv.id = "stat-container";

    //Storing existing div element to store new stat div in
    const statContainer = document.getElementById("function-images");

    //Append some childs
    statContainer.appendChild(statsDiv);

    //Storing all stats and statnames in arrays
    const heroStats = [name, health, weaponType, weaponDamage];
    const statNames = ["Name", "Health", "Weapon type", "Weapon damage"];
    const statIds = ["name", "health", "weapon-type", "weapon-damage"];

    //Make a list item for every stat in the array
    for (i = 0; i<heroStats.length; i++) {
        const statLi = document.createElement("li")
        statLi.innerText = statNames[i] + ": " + heroStats[i];
        statLi.id = statIds[i];
        statsDiv.appendChild(statLi);
    }


}

//A bit less comments from here on, because i'm feeling confident

//Name your hero and begin the game by displaying base stats
function nameHero(){
    const name = document.getElementById("heroname").value;
    if(name != hero.name){
    hero.name = name;
    displayStats(hero);
    document.getElementById("nameHero").remove();
    enemyButton();
    } else {
        alert("Please pick a name");
    }
}

//A button gets added which allows the player to scout for enemies
function enemyButton() {
    const button = document.createElement("button");
    button.type = "submit";
    button.value = "Scout for enememes";
    button.innerText = "Scout for EneMEMES";
    button.setAttribute("onclick", "scoutForEnememes()");
    const div = document.createElement("div");
    div.id = "enememes-container";
    const nameHeroDiv = document.getElementById("function-images");
    nameHeroDiv.appendChild(div);
    div.appendChild(button);
}

function scoutForEnememes() {
    console.log("Hello");
}