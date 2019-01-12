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

//Resting function that heals hero's hp to 10
function rest(currentHero) {
    currentHero.health = 10;
    return currentHero
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

    //Declaring variables to store new html elements in
    const statsDiv = document.createElement("div");
    statsDiv.id = "stat-container";

    //Storing existing div element to store new stat div in
    const statContainer = document.getElementById("function-images");

    //Append some childs
    statContainer.appendChild(statsDiv);

    //Storing all stats and statnames in arrays
    const heroStats = [currentHero.name, currentHero.health, currentHero.weapon.type, currentHero.weapon.damage];
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
    if(name != ""){
    hero.name = name;
    displayStats(hero);
    document.getElementById("nameHero").remove();
    enemyButton();
    } else {
        alert("Please pick a name");
    }
}

//Function that creates button to scout for enemies
function enemyButton() {
    const button = document.createElement("button");
    button.type = "submit";
    button.value = "Scout for enememe";
    button.innerText = "Scout for EneMEME";
    button.id = "enememe-button"
    button.setAttribute("onclick", "scoutForEnememes()");
    const innImage = document.getElementById("inn");
    innImage.setAttribute("onclick", "rest(hero), updatePlayerHealth()");
    const div = document.createElement("div");
    div.id = "enememes-container";
    const nameHeroDiv = document.getElementById("function-images");
    nameHeroDiv.appendChild(div);
    div.appendChild(button);
}

//Remove name input field and create button to fight current enemy
function scoutForEnememes() {
    document.getElementById("enememe-button").remove();
    if(pChecker()){
        document.getElementById("paragraph").remove();   
    };
    const image = document.createElement("img");
    container = document.getElementById("enememes-container");
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
    button.setAttribute("onclick", "fightEnemy(currentEnemy)");
    const container = document.getElementById("enememes-container");
    container.appendChild(button);
    displayEnemyStats(currentEnemy);
}

//Deal damage to and receive damage from enemy
function fightEnemy() {
    const heroDamage = hero.weapon.damage;
    currentEnemy.health = currentEnemy.health - heroDamage;
    if(currentEnemy.health>0){
        hero.health = hero.health-currentEnemy.weapon.damage;
        updateEnemyHealth()
        updatePlayerHealth()
    }else {
        removeEnemy()
        enemyButton()
        displayVictory();
    };
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

//Removes enemy (called after defeating)
function removeEnemy(){
    document.getElementById("enememes-container").remove();
    document.getElementById("enemy-stat-container").remove();
};

//Update displayed player hp
function updatePlayerHealth() {
    document.getElementById("hero-health").innerText = "Health: "+hero.health;
    if(hero.health<10){
    document.getElementById("hero-health").style.color = "red";
    } else if(hero.health > 10) {
        document.getElementById("hero-health").style.color = "green"; 
    } else {
        document.getElementById("hero-health").style.color = "black";   
    }
};

//Displays a victory message and exp gain (gets triggered when enemys hp reaches 0)
function displayVictory(){
    const paragraph = document.createElement("p");
    paragraph.id = "paragraph";
    const victoryMessage = "You've slain the enemy and gained 5 exp!";
    paragraph.innerText = victoryMessage;
    const container = document.getElementById("enememes-container");
    container.appendChild(paragraph);
}

//Checks if victory paragraph is present (to delete it when you scout for new enemies)
function pChecker() {
    const paragraph = document.getElementById("paragraph");
    if(typeof(paragraph) != 'undefined' && paragraph != null){
        return true;
    }
  }