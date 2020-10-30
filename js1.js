
// console.log("Hello world");
// console.log(5 + "34");
alert("Hi There! Its sunny today");


//first way of declaring a function
function sayHello() {
    console.log("Hello");

}
sayHello();

//second way of declaring a function(anonymous function because it is not given any name)
var sayBye = function() {
    console.log("Bye");
}
sayBye();

/* instead of repetitively calling function for different events, 
declaring an argument or parameter(the two are slightly different but 
many people referred to them interchangeably) 
within the bracket of a function can save alot of time */

function sing(song) { //here song is an argument
    console.log(song);
}
//different lyrics of song can be used with function sing()
sing("d r m f s l t d"); // argument allows function to be extensible
sing("d t l s f m r d");

function multiply(a, b) {
   console.log(a * b);
}
multiply(5,10);

//using function with if statement
//NB we used console.log instead of "return" so that output can appear in the console
function example(c, d) {
    if (c > 10 || d > 10) {
        console.log("that's too hard");
    } else { console.log(c*d);
    }
}
example(5, 10);



/*
Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
*/

function checkDriverAge() {
    var age = prompt("What is your current age?");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();

// creating function checkDriveAge(age2) with argument age2
var age2 
function checkDriverAge2(age2) { 
    if (Number(age2) < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age2) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age2) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }

}
checkDriverAge2(18);


//creating a function to check in a number is a prime number
function checkPrimeNumber() {
var Num = prompt("input Number");
if (Num <= 1){ return false}
else if (Num % 2 === 0 && Num > 2) {alert ("This might be an even number")}
for (let i = 2; i < Num; i++) {
    if (Num % i=== 0 ) {
        alert("It is not a prime number")
    }
    return true;
}

}
alert(checkPrimeNumber());

//Data structures- Array
var listOfAnimals = ["tiger", "cat", "bear", "bird"];
console.log(listOfAnimals[0]);
// playing with arrays
var number= [1,2,3,4];
var booleans = [true,false, true, true];
var functionList = [function apple(){console.log("apple");}]
// we can make array inside an array
listOfAnimals.sort();
listOfAnimals.push("Goat", "Lion")

// working with objects
//declaring an object
var user = { 
    name: "Bukola",
    age: 32,
    hobby: "watching movie",
    isMarried: false,
    favoriteFruits: ["banana","orange", "Kiwi", "apple","pears"], //array can be inserted inside an object
    shout: function() {
        console.log("AHHHHHHHH"); //A function inside an object is called a method
    }
};

//accessing an objects
console.log(user.age);
console.log(user.favoriteFruits[2]);
console.log(user.shout());
//NB "console" is an object while "log" is a method =>console.log

//Create an object and an array which we will use in our facebook exercise. 
var faceBook = {
    username: ["Temmy", "Ally", "Ani", "Nick", "Tayo", "Seye", "Kazeem"],
    password: ["Temmy", "Ally", "Ani", "Nick", "Tayo", "Seye", "Kazeem"]
};

var database = ["faceBook"];
var newfeeds = [object1= {username: "ttttt", timeline:"sssss"},
object2= {username: "uuuu", timeline:"vvvvv" }, 
object3= {username: "wwww ", timeline:"xxxx"}]; // there is no need of putting "" for this array

var userNamePrompt = prompt("what is your username ?");
var passwordPrompt = prompt("what is your password ?");

function isUserValid(user, pass){
for(let i = 0; i < database.length; i++) {
    if (faceBook.username[i] === user && faceBook.password[i] === pass) {
            return true;
        } 
    } 
    return false;
}



function signIn(user, pass) { //linking function's argument to accessing the properties of object "faceBook"
// for (let i = 0; i < database.length; i++) { 
//     if (faceBook.username[i] === user && faceBook.password[i] === pass) {
//             console.log(newfeeds);
//     } else { alert("This is not you, try another password or username");
// }
if(isUserValid(user, pass)) {
    console.log(newfeeds);
} else {
    alert ("this is a wrong login");
}

    
}

    // if(user=== faceBook.username[0] && pass===faceBook.password[0]) {  //it access Temmy as username and Temmy as password
        
    //     console.log(newfeeds);
    // } else {
    //     alert("sorry, wrong username and password");
    // }


signIn(userNamePrompt, passwordPrompt);

//learning (for)loop statement using todo list 
//create an array
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javaScript",
    "eat healthy"

];

//assuming we want to add exclamation mark to all list in todo list
for (let i= 0; i < todos.length; i++) {
    console.log(todos[i]);//this will output all item in the todos as it is incrementing over the loop
    console.log(todos[i] + "!"); //this will concatenate each list with !
    todos[i] = todos[i] + "!" ; //clean room = clean room + !
}

//while loop
var counterOne =0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++
}

// //do foreach loop
// array.forEach(element => {
    
// });



//teneray operator 
//this can be used when we have more the one expressions(a shorter way of writing if-else statement)
//syntax ; condition ? expression 1(if true) : expression 2( if false);
function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : " not available");

//switch statement
/* syntax => switch (key) {
    case value:   
       break;
    default:
        break;
 } */
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//advanced function
//this commented function can be rewritten as the uncommented function
/* function first(){
    var greet = 'Hi';
    function second(){
        alert(greet);
    }
    return second;
}
var newFunc = first();
newFunc();  */

//NB: think of => as a function

const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name= 'Bayo';
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc();

//closures 
/* a function run, the function executed . It's never going to run again
BUT it's going to remember that there are references to those variables 
so the child scope always have access to the parent scope but parent don't have access to the children */

//currying
const product = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);

//multipying a number by 5
const multiplyBy5 = curriedMultiply(5);

//compose
/* the act of putting two functions together to form a third function with 
the output of one functions as the input of the other */

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); 
//the output will 7 as g(5) will be 6; and f(6) will be 7

//avoding side effect and functional purity
//function always do the samething no matter how many times it is run

//Advanced Array
//to double numbers in an array
const array = [1,2,10,16];
const double = []
const newArray = array.forEach((num) => { double.push(num*2);
});

console.log(newArray)

//map, filter, reduce

//'map' performs the same function as 'forEach' in a better and efficient way
const mapArray = array.map((num) => {
return num * 2; 
});
console.log(mapArray);

//filter
const filterArray = array.filter(num => num > 5 );
console.log('filter', filterArray);

//reduce
//accumulator stores the value  that happens in the body of a function for cumulative purposes
const reduceArray= array.reduce((accumulator, num) => {
return accumulator + num
}, 0);
console.log('reduce', reduceArray); 
//this will give 29 i.e. 1+2+10+16; but if the 0 is changed to 5, it will add 5 to 29=34;


//template strings
const name = 'Buquie';
const age =34;
const pet ='horse';
// const greeting ="Hello" + name + "you seem to be doing" +greeting + "!"
//Instead of using the above concatenation style, we can use the below statement between ` `;

const greetingBest =`Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;
//this is more dynamic


//default argument
function greet(name='',age=30,pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`
}

//Advanced object
//object is called a reference type in javascript(and it is created by programmer in contrast to other primitive types)
//Reference type
const object1 ={value:10};
const object2= object1;
const object3 = {value:10};

/* checking these in the console
object1 === object2 will give true
object1 === object3 will give false even though they are have the same value.
This means when you create an object(or array) you are creating a box with
 diiferent addresses(object1 and object3) although you can  reference it as in object1 and object2 
*/

//Context
//'this' refers to what contains the object e.g.console.log(this) will give the list of all objects it contains
const object4 = {
    a: function(){
        console.log(this);
    }
}

//Instantiation
//making multiple copies of an object e.g. this will be useful when a function will be used repeatedly
class Player {//if you want to make a copy of an object
constructor(name, type) {
    this.name = name;
    this.type= type;
}
introduce() { console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
}
}

/*To create another player called Wizard that will have all properties of Player 
with extra properties we will use 'extend', 'constructor' and 'super' */
class Wizard extends Player {
    constructor(name, type){
        super(name, type)
    }

/*whenever we extend a class we will use 'super' with the properties we want to pass to the constructor
 to have access to 'this'  */

play() {
    console.log(`Weeeeee I'm a ${this.type}`);
}
}
const wizard1 =new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');



//primitive type pass by value 
const a = 5;
const b= a;
b++
console.log(a) //will give 5
console.log(b) //will give 6
//it can be observed that the increment only affect b and not a because the memory is passed by value.


//by reference
let obj1= {name : 'Yao', password: '123'};
let obj2= obj1;

obj2.password = 'easypeasy';
console.log(obj1);
console.log(obj2); //the two will be the same because the memory is passed by reference

//array is a form of object and memory will be passed by reference rather than by value
const c= [1,2,3,4,5];
const d= c;
d.push(234);
console.log(c);
console.log(d); //the two will be the same



//type coercion
//means how programming language convert one type to another one e.g number to string
//it can be done in JavaScript using == or ===(this is better)
1==='1'

//ES7 
//there are two addition -includes and **
//include can be used on string and array
'Helloooo'.includes('o'); //will give true

const pets = ['cat','dog','bat'];
pets.includes('dog'); //which give true because dog is in the array
pets.includes('bird'); //false

//using exponential function **
const square =(x) =>x**2;
const square = (y) =>y** 3;

//ES8
//.padStart() and .padEnd()
'Turtle'.padStart(10);
"    Turtle" //create space before the string
'Turtle'.padEnd(10);
"Turtle    " //create space after the string

//ending comma
const fun = (a,b,c,d,)=>{

}

//ES10
//1 .flat can be used on array to remove other internal array
const array =[1,2,3,4,5];
const array2 = [1, [2, 3], [4, 5]];
const array3 = [1, 2, [3, 4,[ 5]]];
array.flat()
array2.flat() //(5) [1, 2, 3, 4, 5]
array3.flat() //(5) [1, 2, 3, 4, 5]

//sometime argument can be put inside flat since the default is 1 e.f flat(6)= removes all layers up to 6 levels
//flat can be used in cleaning up data
const entries= ['bob','sally',,,,,,,,,,,'cindy'];
entries.flat(); //(3) ["bob", "sally", "cindy"]

//2 trim to remove blank spaces
const userEmail = '                                   eddytheeagle@gmail.com';
const userEmail2='johnywalker@gmail.com            ';
console.log(userEmail.trimStart()); //eddytheeagle@gmail.com
console.log(userEmail2.trimEnd()); //johnywalker@gmail.com

//3 fromEntries put entries in a good form they should be
userProfiles = [['commanderTom',23], ['derekZlander',40], ['hansel',18]];
Object.fromEntries(userProfiles); //{commanderTom: 23, derekZlander: 40, hansel: 18}

//try and catch
try { 
    4+ Hello; 
} catch(error) { console.log('incompatible type')
} //incompatible type
/*this means try and do the operation within try{} but if there is error,
 then catch the parameter that follows i.e within catch{} */
//putting error within catch() will give you hint to the error

//JavaScript looping
//iterating is loop through an string or array
//method 1
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket ={
    apples: 5, oranges:10, grapes:100
}
for (let i=0; i<basket.length; i++) {
    console.log(basket[i]);
}

//method 2
basket.forEach(item=> {
    console.log(item);
})

//for of
for(item of basket){
    console.log(item);
}

//'for in' works with object in javaScript
//enumerating is to objects as iterating is to string and array

for(item in detailedBasket) {
    console.log(item);
}


//ES2020
//BigInt- this is a new javaScript type which means big interger than the highest js integer

Number.MAX_SAFE_INTEGER //9007199254740991 is the highest number in js i.e (2^53 -1)
console.log(1n + 2n) //3n
//typeof 3n - "bigint"


//Nullish Coalescing Operation ??
//it can be used instead of OR (||) operator


//Optional Chaining Operator ?.
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokeman',
        height: 0.4
        weight: 6
    }
}
let weight = will_pokemon.pikachu.weight
console.log('weight:', weight);

let andrei_pokemon ={
    raichu: {
        species: 'Mouse Pokeman',
        height: 0.8,
        weight: 30
    }
}

let weight3 = andrei_pokeman?.pikachu?.weight //instead using long if (And)statement
console.log(weight3);

//debugging
//this is figuring out why program is not acting the way it should- developer spent many hours here
const flattened = [[0,1], [2,3],[4,5]].reduce{
    (a,b)=> a.concat(b),[1];
}

//check what the code what to perform, then check the synax of each functions and keywords seperately


//JavaScript Logic challange
const y = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let lowestToHighest = y.sort((a, b) => a - b);
const z= y.flatMap(x=> [x].join(x));
console.log(y);
console.log(z);
//to group arrays in array


//practice git





