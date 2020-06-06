// create secrete number
var secretNumber = 4;

//ask the user for the guess
var guess = prompt( " Guess a number ");
alert(guess);


if (Number(guess) === secretNumber){
    alert("YOU GOT IT RIGHT ");
}

//else{
  //alert("WRONG");
//}

else if(Number(guess) > secretNumber){
    alert("Too high guess again ! ");
}

else{
    alert("Too low guess again ! ");
}




