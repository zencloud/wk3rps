// Core Game Functions

// --- Update Message Display
const game_update_message_display = function(message) {
    let displayContainer = document.getElementById("game-message-container");
    displayContainer.innerHTML = message;
}

// --- Player has selected weapon (CORE OPERATION)
const game_select_weapon = function(choice) {
    
    
    
    if (gameData.inputAllowed === false) {
        return null;
    }

    if (gameData.inputAllowed === true) {
        gameData.inputAllowed = false;
    }

    // Take arg and assign as player choice
    gameData.playerChoice = choice;

    // Enemy Select
    gameData.enemyChoice = getRandomInt(3);

    // Set Enemy Icon
    let iconHTML = document.getElementsByClassName("icon-back")[0];
    iconHTML.src = `assets/imgs/icons/${gameData.weaponIconEnemy[gameData.enemyChoice]}`;

    // Trigger Flip Animation
    let iconCell = document.getElementsByClassName("flip-animation")[0];
    iconCell.classList.add("flip-animation");
    iconCell.style.transform = "rotateY(180deg)";

    // Unset animation after delay to allow restart of animation later
    setTimeout(function() {
        iconCell.style.transform = "rotateY(0deg)";
    }, 2000);

    setTimeout(function() {
        gameData.inputAllowed = true;
    }, 2500);

    // Compare the two choices to define winner
    let p = gameData.playerChoice;
    let e = gameData.enemyChoice;

    // Subtract Player from Enemy and mod by 3 to get sliding window for results
    let result = ( (e-p) % 3 );

    // Setup Var
    let messageDisplay = '';

    // Determine Winner/Loser
    switch (result) {
        
        case 0:
            messageDisplay = 'Game is a tie!';
        break;

        case -1:
        case 2:
            messageDisplay = 'Computer wins!';
        break;

        case 1:
        case -2:
            messageDisplay = 'Player wins!';
        break;
    }

    // Update Message
    game_update_message_display(messageDisplay);

    setTimeout(function() {
        game_update_message_display("Choose a weapon.");
    }, 2000);
}