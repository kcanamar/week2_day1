// JavaScript Objects Practice
//////////////////

// Object literal Notation

const game = {
    title: "Guess the Number!",
    // key : value - (the pair is a property)
    'biggestNum': 100,
    // the key of the key: value pair will always be treated as strings
    // Javascript autocorrects the "''" out during run time. .json files need this syntax.
    // thing: undefined,
    // keys must have values or else the code will break
  
    }
  
  
  // Properties/Attributes are made up of key : value pairs seperated by ","
  // obj on one line short and saves space
  const coordinates = {x: 4, y:10}
  
  // obj on mutiple lines - more readable
  const coordinates2 = {
    x: 5, 
    y: 20,
    z: 15,
  };
  
  // you have to have a comma between values in the object.
  // the final comma is the trailing comma, do not forget as industry best practice!
  
  //////////////////////////
  // Adding things to object dynamically
  //////////////////////////
  
  // Dot notation
  ////////////////////
  // For creating new key: value pairs 
  // Also used to reassigning value to the existing key:
  game.smallestNum = 0;
  game.smallestNum = 1;
  // JavaScript reads top to bottom line by line and will over write when reassigned later in code.
  game.numGuesses = 0;
  game.smallestNum = 5;
  
  // Square Bracket notation
  ///////////////////
  
  game["test"] = "testing 1..2..3"
  game["test"] = 567
  
  // Methods you can use on objects
  ////////////////////
  // Object.keys(obj) // gives you all keys in an array [key1, key2, key3,]
  // Object.values(obj) // gives you all values in an array [val1, val2, val3,]
  // Object.entries(obj) // gives you both in nested array [[key,value], [key,value]]
  
  let pairs = Object.entries(game) // [[key,value], [key,value]]
  
  // let name = "Kyle";
  // let age = "Ha!"
  // let favColor = "orange"
  
  // // Old way
  // /////////////////
  
  // // let person = {
  // //   name: name,
  // //   age: age,
  // //   favColor: favColor,
  // // }
  
  // // New way
  // //////////////////
  // //Property shorthand syntax
  
  // let person = {
  //   name,
  //   age,
  //   favColor,
  //   pets: "name",
  // }
  
  // this. referes to the parent object inside of a function.
  game.play = function () {
    this.secretNum = Math.floor(Math.random()*(this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
  }
  
  // const myFunction = function() {
     // This does not get hoisted up to the top of the file
     // Function expression
  // };
  
  // function myFunction() {
  //   // This gets hoisted to the top of the file 
  //   // Function Declaration
  // };
  
  // const thing = () => {
  //   // Arrow function never use inside of an object
  //   // => breaks the parent child bond when nested inside of an object.
  //   // Instead use the Function declaration syntax
  // };
  
  // () => {
  //   // Annymous Function does not get hoisted
  // }
  
  
  
  console.log(game)