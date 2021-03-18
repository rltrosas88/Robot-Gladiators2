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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
                //window.alert(playerName + " has chosen to skip the fight!");
            }
        }
        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //generate random damage value based on player's attack power
            var damage = randomNumber(playerAttack - 3, playerAttack);
            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = Math.max(0, enemyHealth - damage);//playerAttack);

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
            // generate random dagae value based on enemy's attack power
            var damage = randomNumber(enemyAttack - 3, enemyAttack);

            //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
            playerHealth = Math.max(0, playerHealth - damage);

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
            enemyHealth = randomNumber(40, 60);//Math.floor(Math.random() * 21) + 40;

            // use debugger to pause script from running and check what's going on at the moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameters
            // call fight function with enemy-robot
            fight(pickedEnemyName);//enemyNames[i]);

            // if player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length -1){
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one. 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    //console.log("enterd the shop");
    
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL"://new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decreas money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE"://new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE"://new case
        case "leave":
            window.alert("Leaveing the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option shop();
            break;
    }
};

//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// start the game when the page loads
startGame();