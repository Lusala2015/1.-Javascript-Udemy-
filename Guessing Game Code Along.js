// create secrete number
var secretNumber = 4;

//ask the user for the guess
var guess = Number(prompt( " Guess a number "));
alert(guess);


if (guess === secretNumber){
    alert("YOU GOT IT RIGHT ");
}

//else{
  //alert("WRONG");
//}

else if(guess > secretNumber){
    alert("Too high guess again ! ");
}

else{
    alert("Too low guess again ! ");
}




