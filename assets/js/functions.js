// Core Game Functions


// Player has selected weapon
const game_select_weapon = function(choice) {
    
    // Take arg and assign as player choice
    gameData.playerChoice = choice;

    // Enemy Select
    gameData.enemyChoice = getRandomInt(3);

    // Compare the two choices to define winner
    let p = gameData.playerChoice;
    let e = gameData.enemyChoice;

    // Subtract Player from Enemy and mod by 3 to get sliding window for results
    let result = ( (e-p) % 3 );

    console.log(result);

    switch (result) {
        
        case 0:
            console.log("Tie");
        break;

        case -1:
        case 2:
            console.log("Enemy Wins");
        break;

        case 1:
        case -2:
            console.log("Player Wins");
        break;
    }

}