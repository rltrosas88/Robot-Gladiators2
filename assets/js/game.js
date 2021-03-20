
//Wrap the game logic in a startGame() function
//When the player is defeated or there are no more enemies, call an endGame() function that:
// * Alerts the player's total stats
// * asks the player if they want to play again
// * If yes, call statGame() to restart the game
//After the player skips or defeats an enemy (and there are still more robots to fight):
// * Ask the player if they want to "shop"
// * If no, continue as normal
// * If yes, call the shop() function
// * in the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop
// * If refill, subtract money points from player and increase health
// * if upgrade, subtract money points from player and increase attack power
// * if leave, alert goodby and exit the function
// * if any other invalid option, call shop() again

// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeate each enemy-robot
// "LOSE" - Player robot's health is zero or less
//window.alert("This is an alert! JavaScript is running!");


var fightOrSkip = function(){
    //ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLowerCase();
    //Enter the conditional recursive function call here!
    //Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") { //|| promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerinfo.name + " has decided to skip the fight. Goodbye!");
            // subtract money from playerMoney for skipping but dont let them go into the negative
            playerinfo.money = Math.max(0, playerinfo.money - 10);

            //return true if player wants to leave
            return true;
            //shop();
        }
    }
};

//this turns the fight function into a variable
var fight = function(enemy) {
    //console.log(enemy);
    //Alert players that they are starting th eround
    //window.alert("Welcome to Robot Gladiators!");
    while (enemy.health > 0 && playerinfo.health > 0) {
        // ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
            // if ture, leave fight by breaking loop
            break;
        } 
        //var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //console.log(promptFight);

        // if player picks "skip" confirm and then stop the loop
        //if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            //var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if (confirmSkip) {
                //window.alert(playerinfo.name + " has decided to skip this fight. Goodbye!");
                //playerinfo.money = Math.max(0, playerinfo.money - 10);
                //console.log("playerMoney", playerinfo.money)
                //break;
                //window.alert(playerName + " has chosen to skip the fight!");
            //}
        //}
        // if player chooses to fight, then fight
        //if (promptFight === "fight" || promptFight === "FIGHT") {
            //generate random damage value based on player's attack power
        var damage = randomNumber(playerinfo.attack - 3, playerinfo.attack);
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemy.health = Math.max(0, enemy.health - damage);//playerAttack);

        //Log a resulting message to the console so we know that it worked.
        console.log(
        playerinfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

            //check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");

                //award player money for winning
                playerinfo.money = playerinfo.money + 20;

                //leave whie() loop since enemy is dead
                break;

            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
            // generate random dagae value based on enemy's attack power
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
            playerinfo.health = Math.max(0, playerinfo.health - damage);

            //Log a resulting message to the console so we know that it worked
            console.log(
                enemy.name + " attacked " + playerinfo.name + ". " + playerinfo.name + " now has " + playerinfo.health + " health remaining."
            );

            //check player's health
            if (playerinfo.health <= 0) {
                window.alert(playerinfo.name + " has died!");
                break;
            }
            else {
                window.alert(playerinfo.name + " still has " + playerinfo.health + " health left.");
            }
        //if player choses to skip
        } 
            // if no (false), ask question again by running fight() again
            //else {
                //fight();
           //}
        //} else {
            //window.alert("You need to choose a valid option. Try again!");
        //}   
};
// this creates a function named "fight"
//function fight() {
    //window.alert("The fight has begun!");
//}



// function to start a new game
var startGame = function() {
    // reset player stats
    playerinfo.reset();
    //playerinfo.health = 100;
    //playerinfo.attack = 10;
    //playerinfo.money = 10;
    // fight();
    for (var i = 0; i < enemyinfo.length; i++) {
        if (playerinfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladators! Round " + (i + 1));
            //debugger;
            // pick new enem to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyinfo[i];
            
            //reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);//Math.floor(Math.random() * 21) + 40;

            // use debugger to pause script from running and check what's going on at the moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameters
            // call fight function with enemy-robot
            fight(pickedEnemyObj);//enemyNames[i]);

            // if player is still alive and we're not at the last enemy in the array
            if (playerinfo.health > 0 && i < enemyinfo.length -1){
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert ("You have lost your robot in battle! Game Over!");
            break;
        }
    }   
    // after the loop ends, player is either out of health or enemies to fight, so run the endgame function
    endGame();   
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerinfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerinfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one. 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE to make a choice.");
    shopOptionPrompt = parseInt(shopOptionPrompt);
    //console.log("enterd the shop");
    //debugger;
    //use switch to carry out action
    switch (shopOptionPrompt) {
        //case "REFILL"://new case
        case 1: //"refill":
            playerinfo.refillHealth();
            //if (playerinfo.money >= 7) {
                //window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decreas money
                //playerinfo.health = playerinfo.health + 20;
                //playerinfo.money = playerinfo.money - 7;
            //}
            //else {
                //window.alert("You don't have enough money!");
            //}
            break;
        //case "UPGRADE"://new case
        case 2: //"upgrade":
            playerinfo.upgradeAttack();
            //if (playerinfo.money >= 7) {
                //window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack and decrease money
                //playerinfo.attack = playerinfo.attack + 6;
                //playerinfo.money = playerinfo.money - 7;
            //}
            //else {
                //window.alert("You don't have enough money!");
            //}
            break;
        //case "LEAVE"://new case
        case 3: //"leave":
            window.alert("Leaveing the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option shop();
            shop();
            break;
    }
};

//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

//var playerName = window.prompt("What is your robot's name?");
// What is this?
//console.log(playerName);
//window.alert(playerName);
//console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
//console.log(10 +10);
//what is this?
//console.log("Our robot's name is " + playerName);
//var playerHealth = 100;
//var playerAttack = 10;
//var playerMoney = 10;
//function to set name
var getPlayerName = function() {
    var name = "";
    
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    
    console.log("Your robot's name is " + name);
    return name;
};

var playerinfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
//You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

//var enemyName = "Roborto";
//console.log(enemyNames);
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);
//for(var i = 0; i < 3; i++) {
    //console.log("apple", i);
//}
//for (var i = 0; i < enemyNames.length; i++) {
    //console.log(enemyNames[i]);
//}
//for (var i = 0; i < enemyNames.length; i++) {
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
//}
//var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//var enemyHealth = 50;
//var enemyAttack = 12;

var enemyinfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name:"Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// start the game when the page loads
startGame();