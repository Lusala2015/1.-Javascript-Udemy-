var x = 10;
var y = "a";
alert(y==="b" || x>=10) //Evaluates to true

var x = 3;
var y = 8;

console.log(!(x=="3" || x === y) && !(y != 8 && x<=y))//evaluates to false 

var str = "";
var msg = "haha!";
var isFunny = "false";

console.log(!(( str || msg) && isFunny));//Evalates to false because of the negation !
