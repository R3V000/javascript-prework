const playGame = function(playerInput){
    clearMessages();

    
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }
    
     const displayResult = function(argcomputerMove, argplayerMove){
        printMessage('Zagrałem ' + argcomputerMove + ', a Ty ' + argplayerMove);
    
        if (argcomputerMove == 'kamień' && argplayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (argplayerMove == argcomputerMove){
            printMessage('Remis!');
        } else if (argcomputerMove == 'papier' && argplayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if (argcomputerMove == 'nożyce' && argplayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if(argplayerMove == 'nieznany ruch'){
            printMessage('Wykonałeś niepoprawny ruch, nie liczy się!')
        } else {
            printMessage('Przegrałeś!');
        }
    }


    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);


    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);



    displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click',function(){playGame(1)});
document.getElementById('play-paper').addEventListener('click',function(){playGame(2)});
document.getElementById('play-scissors').addEventListener('click',function(){playGame(3)});