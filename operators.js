//Operators

//Flow of operators
//Variables------------------>Expressions--------------->Algorithms


let x= 20;
let y= 10;

console.log("-------------Arithmetic Operators--------------");
console.log("x = "+ x);
console.log("y = "+ y);
let z=x+y;
console.log("x+y = " + z);//Addition
z=x-y;
console.log("x-y = " + z);//Subtruction

z=x*y;
console.log("x*y = " + z);//Multiplications
z=x/y;
console.log("x/y = " + z);//Division
z = x%y;
console.log("x%y = " + z);//Remender in division
z = x**y;
console.log("x**y =" + z); //Exponentiation x to the power of y

//Incremental Operators(++)

z=x++;
console.log("x++ = " + z);

console.log("x = " + x);

z=y++;
console.log("y++ = " + z);


console.log("y = " + y);
//Decremental Operators(--)

z=--x;
console.log("--x = " + z);
console.log("x = " + x);
z=y--;
console.log("y-- = " + z);
console.log("y = " + y);
console.log("---------------------------------------------------");