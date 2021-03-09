function getMoveName(argMoveId) {
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier'; 
  }
  else if (argMoveId == 3){
    return 'nożyce';
  }
  else {printMessage('Nie znam ruchu o id ' + argMoveId + '.');
   return 'nieznany ruch';       
   }
} 

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);


function displayResult(argComputerMove, argPlayerMove){
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    return 'Ty wygrywasz!';
  }
  else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    return 'Ty wygrywasz!';
  }
  else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
     return 'Ty wygrywasz!';
   }
  else if(argComputerMove == argPlayerMove){
     return 'Remis!';
  }
  else{    
    return('Tym razem przegrywasz! :(');     
  }
}

let result = displayResult(computerMove, playerMove);
printMessage(result);
 