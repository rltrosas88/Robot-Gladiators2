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

var playerName = window.prompt("What is your robot's name?");
// What is this?
//console.log(playerName);
//window.alert(playerName);
//console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
//console.log(10 +10);
//what is this?
//console.log("Our robot's name is " + playerName);
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
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

var enemyHealth = 50;
var enemyAttack = 12;

//this turns the fight function into a variable
var fight = function(enemyName) {
    //Alert players that they are starting th eround
    //window.alert("Welcome to Robot Gladiators!");
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney -10;
                console.log("playerMoney", playerMoney)
                break;
                //window.alert(playerName + " has chosen to skip the fight!");
            }
        }
        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            //Log a resulting message to the console so we know that it worked.
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                //award player money for winning
                playerMoney = playerMoney + 20;

                //leave whie() loop since enemy is dead
                break;

            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;

            //Log a resulting message to the console so we know that it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
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
    }   
};
// this creates a function named "fight"
//function fight() {
    //window.alert("The fight has begun!");
//}
// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // fight();
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladators! Round " + (i + 1));
            
            // pick new enem to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            
            //reset enemyHealth before starting new fight
            enemyHealth = 50;

            // use debugger to pause script from running and check what's going on at the moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameters
        // call fight function with enemy-robot
        fight(pickedEnemyName);//enemyNames[i]);
        }
        else {
            window.alert ("You have lost your robot in battle! Game Over!");
            break;
        }
    }      
};
// start the game when the page loads
//startGame();