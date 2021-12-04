function getMoveName(argMoveId){
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
  
  function displayResult(argcomputerMove, argplayerMove){
    printMessage('Zagrałem ' + argcomputerMove + ', a Ty ' + argplayerMove);
  
    if (argcomputerMove == 'kamień' && argplayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }else if (argplayerMove == argcomputerMove){
        printMessage('Remis!');
    }else if (argcomputerMove == 'papier' && argplayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }else if (argcomputerMove == 'nożyce' && argplayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }else if(argplayerMove == 'nieznany ruch'){
        printMessage('Wykonałeś niepoprawny ruch, nie liczy się!')
    }else{
        printMessage('Przegrałeś!');
    }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);



displayResult(computerMove, playerMove);