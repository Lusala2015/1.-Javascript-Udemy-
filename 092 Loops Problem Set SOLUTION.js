console.log("print all numbers between -10 and 19");
for (i = -10; i<=19; i++ ){
    console.log(i);
}
console.log("print all even numbers between 10 and 40");
for (eve = 10; eve <= 40; eve +=2){
    console.log(eve);
}
console.log("print all odd numbers between 300 and 333");
for (odd = 301; odd <= 333; odd += 2){
    console.log(odd);
}
console.log("print all numbers divisible by 5 AND 3 between 5 and 50");
for (var i =5; i<50; i++){
    if(i % 5 === 0 && i % 3 === 0 ){
        console.log(i)
    }
}