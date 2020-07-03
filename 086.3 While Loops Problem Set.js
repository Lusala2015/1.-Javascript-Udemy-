//PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50
var counter = 5;

while(counter <= 50){
    if(counter % 5 === 0 && counter % 3 === 0){
        console.log(counter);
    }
    counter+=1;
}