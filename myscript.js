function number(number1, number2 ) {
    // let number1 = 4;
    // let number2 = 4;

    return number1 + number2; 
    return number1 * number2;
  
}
console.log(number (5, 5));

function sub( num3, num4){
    return num4-num3;
}


console.log(sub( 5, 15));

function multiply( num5, num6){
return num5 * num6
}

console.log(multiply(5,2));


// write a function that says good morning ...
//  function( morning)
// if()



function morn(greeting) {
    // const thistype = typeof greeting;
    if (greeting=== "Good morning" ) {
        return "It is cold, morning";
    }
    else if(greeting === "Good Afternoon"){
        return "It's sunny";
    
    }
    else if(greeting=== "Good evening"){
        return "It's evening I had a long day";
    }
    else if( greeting === "Night"){
        return "It's late I should get some sleep";
    }
   
}

console.log(morn("Good Afternoon")); // Output: "It is morning"
// console.log(morn(123)); // Output: "Not morning"


    
