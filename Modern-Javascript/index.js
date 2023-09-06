// normal function
// function number() {
//   return 10;
// }

// console.log(number());

// arrow function
let number = () => {
  return 10;
};
// Simplify arrow function
let number1 = () => console.log("10");

// console.log(number());
number1();

var javaScript = {
  name: "javaScript",
  libaries: ["Vue", "Angular", "React"],

  // arrow function use this
  /*printLibaries: function () { 
    this.libaries.forEach((a) => {  
      console.log(`${this.name} Loves ${a}`);
    })
  }*/

  // normal function use this
  /*printLibaries: function () {
    var self = this;
    this.libaries.forEach(function (a) {
      console.log(`${self.name} Loves ${a}`);
    });
  },*/
};

// javaScript.printLibaries();



