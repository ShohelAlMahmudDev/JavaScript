
//Value type Variable Decalaration
let name='Shohel';// String Literal
let age=40;//Number Literal
let isApproved=false;//Boolean Literal
let firstName=undefined;
let selectedColor=null;



console.log(name);
//Constant Declaration
const interestRate = 0.3; 
console.log(interestRate);


let person={
name:'Shohel',
age: 30
};
console.log(person);
console.log(person.name);
//Bracket Notation
person['name']='Jhinuk';
console.log(person.name)
//Array
let selectedColors =['red','blue'];
console.log(selectedColors.length)

//Function declaration for a task
//here name and lastname are parameters
function greet(name,lastName){
    console.log('Hello ' + name + ' '+ lastName)
}
//here mahmud and shohel are the argument 
greet('Mahmud',"Shohel");

greet('Marry','Smitha');

//function for Calculating a value method
function square(number){
    return number*number;
}

console.log(square(2));
