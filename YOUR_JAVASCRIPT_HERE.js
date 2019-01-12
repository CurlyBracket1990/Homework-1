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

const enememes = [
    {
        name: "Koala",
        health: 5,
        weapon: {
            type: "claws",
            damage: 2
        },
        image: "images/meme1.png"
    },

    {
        name: "Crybaby",
        health: 1,
        weapon: {
            type: "tears",
            damage: 1
        },
        image: "images/meme2.png"
    },

    {
        name: "Catknight",
        health: 10,
        weapon: {
            type: "teeth",
            damage: 1
        },
        image: "images/meme3.png"
    },

    {
        name: "Alpaca",
        health: 3,
        weapon: {
            type: "spit",
            damage: 1
        },
        image: "images/meme4.png"
    }
];

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
        statLi.id = "hero-"+statIds[i];
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
    button.id = "enememe-button"
    button.setAttribute("onclick", "scoutForEnememes()");
    const div = document.createElement("div");
    div.id = "enememes-container";
    const nameHeroDiv = document.getElementById("function-images");
    nameHeroDiv.appendChild(div);
    div.appendChild(button);
}

//Remove name input field and create button to scout for enemies
function scoutForEnememes() {
    document.getElementById("enememe-button").remove();
    const container = document.getElementById("enememes-container");
    const image = document.createElement("img");
    container.appendChild(image);
    const i = Math.floor((Math.random() * enememes.length));
    currentEnemy = enememes[i];
    image.alt = currentEnemy.name;
    image.src = currentEnemy.image;
    fightButton();
}

//Added function to create a button that fights current enemy
function fightButton() {
    const button = document.createElement("button")
    button.type = "submit";
    button.value = "Fight eneMEME";
    button.innerText = "Fight eneMEME"
    button.id = "fight-enememe-button";
    button.setAttribute("onclick", "fightEnemy()");
    const container = document.getElementById("enememes-container");
    container.appendChild(button);
    displayEnemyStats();
}

//Deal damage to and receive damage from enemy
function fightEnemy() {
    console.log(currentEnemy);
    const heroHealth = hero.health;
    const heroDamage = hero.weapon.damage;
    const enemyDamage = currentEnemy.weapon.damage;
    currentEnemy.health = currentEnemy.health - heroDamage;
    updateEnemyHealth();
}

//Display stats of current enemy
function displayEnemyStats() {
    const enemyName = currentEnemy.name;
    const enemyHealth = currentEnemy.health;
    const enemyWeapon = currentEnemy.weapon.type;
    const enemyDamage = currentEnemy.weapon.damage;

    const enemyStatsDiv = document.createElement("div");
    enemyStatsDiv.id = "enemy-stat-container";
    const statContainer = document.getElementById("function-images");
    statContainer.appendChild(enemyStatsDiv);

    const enemyStats = [enemyName, enemyHealth, enemyWeapon, enemyDamage];
    const enemeyStatnames = ["Enemy name", "Health", "Weapon type", "Weapon damage"];
    const statIds = ["name", "health", "weapon-type", "weapon-damage"];

    for (i = 0; i<enemyStats.length; i++) {
        const statLi = document.createElement("li")
        statLi.innerText = enemeyStatnames[i] + ": " + enemyStats[i];
        statLi.id = "enemy-"+statIds[i];
        enemyStatsDiv.appendChild(statLi);
    }
};

//Update enemy stats
function updateEnemyHealth() {
    document.getElementById("enemy-health").innerText = "Health: "+currentEnemy.health;
    document.getElementById("enemy-health").style.color = "red";
};