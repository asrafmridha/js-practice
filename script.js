/* document.write('hello world '   ); 
        document.write(11+12);

        console.log('Hello world');
        console.log(2+4);
        document.getElementById('h1').innerHTML= "hello js";

        prompt ('2 +2 = ?');

    var message = "i learn about js";

    let c= "hlw world";

    console.log(c);

    const x=10;

    const y=5;
    console.log(x+y);


    function myfunction(){

        document.getElementById('demo').innerHTML= 'Changed';
    }

    const firstName= 'Asraf';

    const lastName= 'Mridha';

    console.log (firstName + ' '+ lastName);

    */

//let function baire use kora jabe na
/* if (true) {
      let x = 5;

      console.log(x);
    }

    if (true) {

      var z=6;
      console.log(z);
    }

    console.log(z);

    {

        var x='asraf';
    }
      console.log(x); 

    //array declaretion

      const cars=['toyota','bmw', 'bal'];

      cars[0]="change";

      cars.push('new');

      console.log(cars); 

      let x=10;
      let y=5;

      x /= y;

      console.log(x);

      let x= 'Asraf';

      let y= 'Mridha';

      console.log(x + ' ' + y);

      let text1= "What a nice ";

      let text2= " day it is";

      text1 += text2;

      console.log(text1); 

      let x= 5+5;

      let y= "5" + 5;

      let z= 'HEllo 5';
      //ki type data seta bujhate 
      console.log(typeof x);  

      console.log(typeof z);

      console.log(typeof z); 
      

      //scientific way
      let x= 123e5;

      console.log(x); 

      //Bollean Statement

      let x=5;

      let y=6;

      let b= (x==y);

      console.log(b);
      
    //JavaScript Objects

    let x= 5;
    let y= 6;

    let z=7;

    let myObjective= { x:5 , y:6, z:7 };

      console.log(myObjective);

      console.log(typeof myObjective); 
      
      //undefined javaScript
      car =undefined;

      console.log(car);  

      //Empty Value

      let truck= "";

      console.log (truck); //Empty String 

      //function call

      function sleep( parameters , time){

        console.log( parameters +' is sleeping from ' + time);

    

        console.log('asraf');
      }
      
      sleep('Rahim ','10 PM'); 
      sleep('Karim' ,'11 PM'); 
      sleep('Jihad' ,'12 PM'); 

    //Return Function

    function returnFunction( a ,b){

        return a * b;

    }
    let x= returnFunction( 4, 3);

    console.log(x); 

    //Convert Celcius
    function toCelcius(f){

      return (5/9) * (f-32);
    }


      let f= toCelcius(77);
      console.log(f);  

      function toCelcius(f){

        return (5/9) * (f-32);
      }

      console.log ('the tempature is '  + toCelcius(77)  +  ' celcius'); 

    //javaScript Object

    const Car ={

      name: 'BMW',
      model:'126f',
      weight:'800kg',
      color: 'WHITE',

      start: function(){

      console.log("Car Has Started");
      },

      drive:function(){

        this.start();
      console.log('Car is Driving');
      }

    }

    Car.drive();


    console.log( Car.color);

    console.log( Car.weight); 

      //js Events  
      
    //Display date Function Call

    function displayDate(){

      document.getElementById('display').innerHTML=Date();
    }


    //String length Count

    let text1="ABCDEFFDFSSDJHJKKIIK"

    let b=text1.length;

    console.log(b);

    //The solution to avoid this problem, is to use the backslash escape character.

    let text = "We are the so-called \"Vikings\" from the north.";

    console.log(text);  
    
    //String MEthod Slice

    let str = "Apple, Banana, Kiwi";
    let part = str.slice(7, 13);

    console.log(part); 
    //Replacing String Content

    let tahmina = "I love tahmina";

    let nowshin = tahmina.replace("tahmina", "nowshin nipun");

    console.log(nowshin);

    //Converting to Upper and Lower Case

    let text1 = "hello world";

    let uppercase = text1.toUpperCase();

    console.log(uppercase);

    let text2 ="HELLO WORLD";

    let lowecase= text2.toLowerCase();

    console.log(lowecase); 


//JavaScript String concat()

  let x= "Hello";

    let y= "World";

    let z= x.concat( " ", "world");

    console.log( z);

    //JavaScript String indexOf()
    let str = "Please locate where 'locate' occurs!";
     console.log(str.indexOf("Please"));  

     //Back-Tics Syntax //Template Literals
     let x= `it's my life 
     my rules`;

     console.log(x);

     //interpolate variables 

     let country= "Bangladesh";
        let a=17;
        let b=1;
     let sentence= `I love ${country} . It's  a small country and it's population ${a+b} crore`;

     console.log(sentence); 

     //Nan = Not a Number
     let a= 'apple';

     let b=10;

     console.log(a/b); 

     //isNaN() to find out if a value is a not a number

     let a= "100";
     let b= 20;
     let c= "d100";
     let d=10e5;

     console.log(isNaN(d));
     console.log(isNaN(c));
     console.log(isNaN(a));
     console.log(isNaN(b));

     //Number Methods and Properties

     let x = 123;
      let y=x.toString();

      console.log( y);
      console.log(typeof y);

      //The toExponential() Method
      let num1 = 9.6560000000000000;
     console.log(num1.toExponential()); 

     //JavaScript Arrays

     const car= ["Volvo", "BMW", "SAAB"];

     //Array is one Kind of object
      console.log(typeof car);
     document.getElementById('cars').innerHTML= car;
  //access element by index number
     console.log(car[1]);
 //LAst element access for Array
   
   car[3]= "NEW CAR";
   car [4]= "NEW CAR 2";
  console.log (car[car.length-1]); 

  //Loop for JavaScript
   
      let fruits1=[ "Apple", "Banana", "Orange", "PineApple","Lichi" ];

      for (i=0 ; i<fruits1.length; i++){

      console.log(fruits1[i]);
     }

     const fruits = ["Banana", "Orange", "Apple", "Mango"];
   let fLen = fruits.length;

    let text = "<ul>";
     for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
    text += "</ul>";

    document.getElementById("fruits").innerHTML = text; 

    //Array Foreach

    const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

    function myFunction(value){
       console.log(value);

    }
    fruits2.forEach(myFunction);

    console.log ('Finished'); 

    //Converting Arrays to Strings

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // console.log(fruits.toString());

    //Also use join 

    console.log( fruits.join( "  " )); 
   //Push and Pop Js

   const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let b=fruits.push("newFruit");
    let c=fruits.push("newFruit2");
    console.log(fruits);


    console.log(fruits.pop() ) ; 

    //delete function js

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

   let b= delete fruits[0];

   console.log(fruits);
   console.log (b); 

   //Splicing and Slicing Arrays to add middle or whatever you want

   const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let b=fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruits); 

    //Sorting an Array

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
      let b=fruits.sort();
      //Sort an array in desecending order
      let c= fruits.reverse();
      console.log(b);
     console.log(c);

     //Numeric Sort by using function

     const points = [40, 100, 1, 5, 25, 10];
      points.sort(function(a, b){
        return a - b
      
      });

      console.log(points);  

      //For Descending

      const points = [40, 100, 1, 5, 25, 10];
      points.sort(function(a, b){
        return b-a;
      
      });
      console.log(points); 

      //Using Math.max() on an Array in JavaScript

      const points = [40, 100, 1, 5, 25, 10];
   console.log(  Math.max(40, 100, 1, 5, 25, 10) );

   console.log(  Math.min(40, 100, 1, 5, 25, 10) ); 

  //JavaScript Array Iteration
   
 // JavaScript Array forEach()

 const numbers = [45, 4, 9, 16, 25];

     function myFunction(value, index, array){
        console.log(value);
        console.log(index);
        console.log(array);

        console.log( '-------------------------break');

     }

       numbers.forEach(myFunction);
     

       //JavaScript Array map()

       const numbers = [45, 4, 9, 16, 25];
 
       function myFunction(value){
            return value*5;
       }

      let value= numbers.map(myFunction);

       console.log(value);   

       //JavaScript Array filter()

       const numbers = [45, 4, 9, 16, 25];

       function myFunction(value){

             return 10<value;
       }
      let value= numbers.filter(myFunction);
       console.log(value);
    

        //JavaScript Array reduce()

        const numbers = [45, 4, 9, 16, 25];

        function myFunction(total ,value){
 
           console.log(total);
                return total+value;
        }

       let b= numbers.reduce(myFunction);

       console.log(b);  

       //JavaScript Array every()

       const numbers = [45, 4, 9, 16, 25];

       function myFunction(value){

          return 18<value;
       }

      let b= numbers.every(myFunction);
      console.log(b);   
      //JavaScript Array indexOf()

      const fruits = ["Apple", "Orange", "Apple", "Mango"];
           let position = fruits.indexOf("Apple");
           console.log(position); 


           //JavaScript Array last indexOf()

           const fruits = ["Apple", "Orange", "Apple", "Mango"];
           let position = fruits.lastIndexOf("Apple");
           console.log(position); 

           //JavaScript Array find()

           const numbers = [4, 9, 16, 25, 29];

           function myFunction(value, index, array) {
            return value > 18;
          }
          let first = numbers.find(myFunction);

          console.log(first); 

          //JavaScript Date Objects
                  
          const d = new Date();
          console.log(d); 
  
           new Date(milliseconds);

          const d= new Date(2018 ,11);

          console.log(d);

          //JavaScript Math Object

          let math= Math.round(4.5);
          console.log(math);

          let power= Math.pow(8,3);
          console.log(power); 

          //Rules for find out the leapyear

          function isleapyear(year){
          
            if(year % 400===0 || ((year% 4 ===0)&& (year %100!==0))){

             console.log(`${year} is a leap year`);
            }
            else{
              console.log(`${year} is not a leap year`);
             
            }
          }

          isleapyear(2000); 

          let x= "";
         console.log(Boolean(x)) ; 

         //JavaScript Comparisons

         let age=" 17 ";
         

         age =Number(age);
         if (age== " ") {
           voteable = "Please input a number";
         } 
           else if(isNaN(age)){

            voteable= "Age is not a number";
           }
         else {
           voteable = (age < 18) ? "Too young" : "Old enough";
         }

         console.log(voteable);    
         //The JavaScript Switch Statement

         switch (new Date().getDay()) {
          case 0:
            day = "Sunday";
            break;
          case 1:
            day = "Monday";
            break;
          case 2:
             day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case 6:
            day = "Saturday";
            default:
              day= " ";
        }
        console.log(day); 

        //JavaScript For Loop
  
         const cars= ["a", "b"  ,"C" ,"d", "E"];

         for(let i=0; i<cars.length; i++){

           console.log(cars[i]);
         } 
           
         //The For In Loop js

         const person = {fname:"John", lname:"Doe", age:25};

          let text = "";
          for (let x in person) {
           console.log(person[x]);
          }
           

             //The For Of Loop js

             //let a="Asraf";
             let a= ["Asraf", 35 ,20, "tonmoy"];

             for(let x of a){

             +console.log(x);
             }
           

             //The While Loop

             let i = 0;
             text = "";
             do  {
              text += "The number is " + i;
              
              i++;
            } 
             while(i<10);
            console.log(text)  ;
              

             //JavaScript Sets

             const letters = new Set(["a","b","c"]);
             letters.add("d");
            letters.add("e");
            letters.add("f");

            let text = "";
            letters.forEach (function(value) {
              text += value;
            });

             console.log(letters);
             console.log(text);

             //JavaScript Maps

             const fruits= new Map();

             fruits.set("apples",500);
             fruits.set("bananas", 300);
             fruits.set("oranges", 200);
            
             fruits.delete("oranges");
             console.log(fruits);
             var v= fruits.get("apples");
             var c=fruits.size;
             var d= fruits.has("apples");
             console.log(v);
             console.log(c);
             console.log(d);
             
        
             //The constructor Property

        var  x=  "asraf".constructor 
            console.log(x);
        var y= 3.14.constructor
            console.log(y); 
           
            //undefined for empty  a variable

         var fruits = ["Banana", "Orange", "Apple", "Mango"];
       var fruits= undefined;
        console.log(fruits);

        //Empty Values

        let car = "";  

        console.log(car); //return empty string

        //empty an object by setting it to null:

        let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
        person=null;
        console.log(person);  

        //JavaScript Type Conversion

        let y = "5";      // y is a string
        let x = + y; 
       
        console.log(typeof y);
        console.log(x);
         var v=Date().toString();
          console.log(v);

          //return nan NOt a number
          var e=" asraf";
          console.log( parseInt(e));

          //return 5
          var f=" 5";
          console.log( parseInt(f)); 

    

          var d= "5" + null;
          console.log(d);

          // JavaScript Regular Expressions 

          let text = "Is this all there is?";
         let result = text.match(/[h]/g);
         console.log(result);
         //The test() method is a RegExp expression method.

         const pattern = /c/;
      var v=  pattern.test("The best things in life are free!");
        console.log(v); 

        // JavaScript Errors


        function myFunction() {
          const message = document.getElementById("p01");
          message.innerHTML= "";
          let x = document.getElementById("err").value;
          try {
            if(x == "") throw "empty";
            if(isNaN(x)) throw "not a number";
            x = Number(x);
            if(x < 5) throw "too low";
            if(x > 10) throw "too high";
            else{
              throw " ok";
            }
          }
          catch(err) {
            message.innerHTML = "Input is " + err;
          }
          finally {
            document.getElementById("err").value = "";
          }
        }

        // Reference Error
        let x = 5;
        try {
          x = y + 1;   // y cannot be used (referenced)
        }
        catch(err) {
          console.log(err.name) ;
        }

        //Syntax Error

        try {
          eval("alert('Hello)");   // Missing ' will produce an error
        }
        catch(err) {
          console.log(err.name) ;
        } 

        // Type Error

        let num = 1;
          try {
            num.toUpperCase();   // You cannot convert a number to upper case
          }
          catch(err) {
            console.log(err.name) ;
          }

          // URI (Uniform Resource Identifier) Error
          try {
            decodeURI("%%%%");   // You cannot URI decode percent signs
          }
          catch(err) {
            console.log(err.name) ;
          }  
         

          // The JavaScript this Keyword

          const person = {
            firstName: "Asraf",
            lastName : "Mridha",
            id       : 5566,
            fullName : function() {
            return this.firstName + " " + this.lastName;
            }, 
            getId :function(){

              return this.id;
            }
          };
            //access function
         console.log(person.fullName()) ;
         
         //line break in javaScript
         document.write(person.fullName()+"</br>"+"</br>") ;
         document.write(person.getId());

        //  Explicit Function Binding

        const person1 = {
          fullName: function() {
            return this.firstName + " " + this.lastName;
          }
        }
        
        const person2 = {
          firstName:"Asraf",
          lastName: "Mridha",
        }
        
        // Return "Asraf Mridha":
       console.log(person1.fullName.call(person2));
      

      //  JavaScript Classes

       class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
      }

      let car1= new Car("volvo",2017);
      let car2= new Car("BMW",2017);
      let car3= new Car("SUZUKI",2017);

      console.log(car1,car2,car3); 
        

      // Make JavaScript another Classes

      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
        Play (status){

          console.log(`${this.name} is playing  ${status} `);
         console.log(`${this.name} age is ${this.age}   `);
        
        }
      }
     
      let person1= new Person("Asraf",22);
      let person2= new Person("Tonmoy",21);

      person1.Play("well");
      person2.Play("bad");
      


        //Converting a JSON Text to a JavaScript Object

        let text = '{ "employees" : [' +
      '{ "firstName":"John" , "lastName":"Doe" },' +
      '{ "firstName":"Anna" , "lastName":"Smith" },' +
      '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
            
      var obj= JSON.parse(text);
      console.log(obj.employees[1]);

      // Js obj
      // Convert a JavaScript object into a string with JSON.stringify(). 
    
      const person = {
        firstName:"Asraf", 
        lastName:"Mridha",
         age:50,  
      };

     const _myJSON = JSON.stringify(obj);
     console.log(_myJSON);   
const arr=[5,2,3];

for(let i=0; i<arr.length; i++){

   console.log(arr[i]); 
}  

         //Again Object
          
        const person = {
                        firstName:"Asraf",
                        lastName:"Mridha", 
                        age:50,
                          eyeColor:"blue",
                  //method
                          getame: function(a,b){
 
                            var c= a+b;
                            return c;
                          }
                        };
                       
                        
                        console.log(person.getame(20,20));  

                        
                        const person = {
                          firstName:"Asraf",
                          lastName:"Mridha", 
                          age:50,
                          eyeColor:"blue"
                        }
                        
                        //add property in obj
                        person.country= "Bangladesh";
                        console.log(person );
                        //specific a value
                        console.log(person.firstName,person.lastName);

                        // for take dynamic value array symbol are perfect
                           console.log(person['firstName']); 

                          //  JavaScript for...in Loop 

                           const person = {
                            fname:" Asraf",
                            lname:" Mridha",
                            age: 23
                          };
                          var txt='';
                          for (let x in person) {
                          txt += person[x];
                          }

                          console.log(txt); 

                          // Deleting Properties in obj 

                          const person = {
                            fname:" Asraf",
                            lname:" Mridha",
                            age: 23,
                            eyecolor:"black"
                          };
                          
                         var d= delete person.age;
                         console.log(person); 
                        

                        //  Nested Objects 

                       let myObj = {
                          name:"Asraf",
                          age:30,
                          cars: {
                            car1:"Ford",
                            car2:"BMW",
                            car3:"Fiat"
                          }
                        }

                        var d=myObj.cars.car2;

                        console.log(d);

                        // Nested Arrays and Objects
                          
                        const myObj = {
                          name: "Asraf",
                          age: 30,
                          cars: [
                            {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
                            {name:"BMW", models:["320", "X3", "X5"]},
                            {name:"Fiat", models:["500", "Panda"]}
                          ]
                        }
                         
                        var x='';
                        for (let i in myObj.cars) {
                          x += "<h1>" + myObj.cars[i].name + "</h1>";
                          for (let j in myObj.cars[i].models) {
                            x += myObj.cars[i].models[j];

                          
                          }
                        }  

                        //Prototype Properties
                        let a= new String ("bangladesh");
                          console.dir(a);
                        

                          // JavaScript Object Methods

                          // Adding a Method to an Object
                          
                          const person = {
                            firstName:" Asraf",
                            lastName:" Mridha",
                            age: 23,
                            eyecolor:"black"
                          };

                   person.name = function () {
                        return this.firstName + " " + this.lastName;
                      };  

                      // Using JSON.stringify()

                      const person = {
                        firstName:" Asraf",
                        lastName:" Mridha",
                        age: 23,
                        eyecolor:"black"
                      };

                      let x= JSON.stringify(person);
                      console.log(x);  
               
                      // JavaScript Getter (The get Keyword)
                      const person = {
                        firstName:" Asraf",
                        lastName:" Mridha",
                        age: 23,
                        eyecolor:"black",

                        get name(){

                          return this.firstName+this.lastName;
                        }
                      };
                      console.log(person);

                      // JavaScript Setter (The set Keyword) 

                    //   const person = {
                    //     firstName:" ",
                    //     lastName:" Mridha",
                    //     age: 23,
                    //     eyecolor:"black",

                    //     set name(fname){

                    //       this.firstName=fname;
                    //     }
                    //   };
                    //  var v= person.name = "Asraf";
                    //  console.log(person); 

                    // JavaScript Object Constructors
 

                    function Person(first, last, age, ) {
                      this.firstName = first;
                      this.lastName = last;
                      this.age = age;
                     this.fullName= function(){
                        return this.firstName + this.lastName;
                      }
                    }

                        
          const asraf= new Person('asraf','mridha',22); 
          const tonmoy= new Person('Tonmoy','Saha',22);
          const tahmina= new Person('tahmina','mridha',22);
  
          // Using the prototype Property
          Person.prototype.nationality = "Bangladesh";
          console.log(asraf.nationality);
          console.log(tonmoy.nationality);



          // iterable is an object that has a Symbol.iterator.


                      let  myNumbers = {};

              // Make it Iterable
              myNumbers[Symbol.iterator] = function() {
                let n = 0;
                done = false;
                return {
                  next() {
                    n += 10;
                    if (n == 100) {done = true}
                    return {
                      value:n, 
                      done:done
                    };
                  }
                };
              }

              for (const num of myNumbers) {
                      console.log(num);
              }
              


              // JavaScript Sets

              // Create a Set
               const letters = new Set(["a","b","c"]);
               console.log(typeof letters);

               // Create an Iterator
                const myIterator = letters.entries();

                // List all Entries
                let text = "";
                for (const entry of myIterator) {
                  text += entry;
                };
                
                console.log(text);

                // JavaScript Maps

                // Create a Map
          const fruits = new Map([
            ["apples", 500],
            ["bananas", 300],
            ["oranges", 200]
          ]); 
          console.log( fruits);
          // The get() method gets the value of a key in a Map:

          console.log(fruits.get("apples"));  //return 500
          
          console.log(fruits.size);  // The size property returns the number of elements in a Map:

          fruits.delete("apples"); //The delete() method removes a Map element:

         console.log (fruits.has("appl")); //The has() method returns true if a key exists in a Map:
     



        //  Function Expressions
        // the variable can be used as a function
        const x = function (a, b) {
          return a * b
        }
       let z = x(4, 3) ;
       console.log(z);      

      //  The Function() Constructor

       const myFunction = new Function("a", "b", "return a * b");

       let x = myFunction(4, 3);
       console.log(x); 
       
      //  Self-Invoking Functions

      (function () {
        console.log("Hello!! I am Asraf");  
      })();
      


      // The Arguments Object
      function findMax() {
        let max = -Infinity;
        for (let i = 0; i < arguments.length; i++) {
          if (arguments[i] > max) {
            max = arguments[i];
          }
        }
        return max;
      }                     

      x = findMax(4,5,6);
      console.log(x);
      

     

      function sumAll() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
          sum += arguments[i];
        }
        return sum;
      }

      x = sumAll(1, 123, 500, 115, 44, 88);
      console.log(x); 

      // Invoking a Function with a Function Constructor
      // This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

const myObj = new myFunction("Asraf", "Mridha");

var x=myObj.firstName;
   console.log(x);             
   
  //  The JavaScript call() Method
   
   const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"Asraf",
    lastName: "Mridha"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  
  person.fullName.call(person1); 

  // The call() Method with Arguments

  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Asraf",
    lastName:"Mridha"
  }
  
  var v= person.fullName.call(person1, "Bangladesh", "Dhaka");
  console.log(v); 
      
  // JavaScript Nested Functions

  function add() {
    let counter = 0;
     return function() {
      
      counter += 1;
    }
  
  }

  // JavaScript Class Syntax

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  const bmw=new Car("BMW",2019);
  console.log(bmw.name,bmw.year);  

  // Class Inheritance

  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show()); 

  // JavaScript Callbacks

  function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

  // Asynchronous JavaScript
  // Waiting for a Timeout

  setTimeout(myFunction, 3000);

   function myFunction() {
 console.log("I love you");
}


//setInterval function in javascript
setInterval(myFunction, 3000);

function myFunction() {
console.log("I love you");
} 

var v=80;

console.log("Hlw World");

setTimeout(function(){

       if(v>70){
        console.log(" i am asraf");
       }

} ,2000);

console.log("Hlw"); 


const status=true;
console.log("Task 1");
//  Promise Defination 
  const promise= new Promise(function(reslove,fail){
    
      setTimeout (function(){

           if(status){
           reslove("Task 2");
           }
           else{
            fail("err");
           }
         
      },3000);
  });

          //promise call

          promise.
            then(function(value){
          console.log(value);

          })
          .catch(function(value){

        console.log(value);

          })

          console.log("Task 3"); 

          //Promise Asynchoronus

          const paymentSuccess=true;
          const marks=80;

          function enroll(){
            console.log("Course enrollment is in progress");

          const promise=new Promise(function(resolve,reject){
          setTimeout(function(){

           if(paymentSuccess){

            resolve();
           }else{

            reject("Payment Failed");
           }


          },2000);


          });
 
          return promise;

          }

          function progress() {

            console.log("Course on progress.........");

            const promise=new Promise(function(resolve,reject){
             
              setTimeout (function() {
                if(marks>=80){
                   resolve();

                }else{

                  reject("Sorry you are not eligble for certificate");
                }
                
              },2000);


            });
            return promise;
            }

            function getCertificate(){

              console.log("Preparing your certificate");

              const promise=new Promise(function(resolve){

                setTimeout(function(){

         resolve("Congrats! You got the certificate");
                },1000);

              } );

              return promise;
            }

    enroll().then(progress)
    .then(getCertificate)
    .then(function(value){
      console.log(value);
    })
    .catch(function(err){
      console.log(err);
    });
   

    //async and await make promises easier to write

    const paymentSuccess=true;
    const marks=80;

    function enroll(){
      console.log("Course enrollment is in progress");

    const promise=new Promise(function(resolve,reject){
    setTimeout(function(){

     if(paymentSuccess){

      resolve();
     }else{

      reject("Payment Failed");
     }


    },2000);


    });

    return promise;

    }

    function progress() {

      console.log("Course on progress.........");

      const promise=new Promise(function(resolve,reject){
       
        setTimeout (function() {
          if(marks>=80){
             resolve();

          }else{

            reject("Sorry you are not eligble for certificate");
          }
          
        },2000);


      });
      return promise;
      }

      function getCertificate(){

        console.log("Preparing your certificate");

        const promise=new Promise(function(resolve){

          setTimeout(function(){

   resolve("Congrats! You got the certificate");
          },1000);

        } );

        return promise;
      }
              
      // async function syntax 

      async function Course(){
 
     try{

      await enroll();
      await progress();
   const message=   await getCertificate();

   console.log(message);
     } 
     catch(err){
      console.log(err);
     }


      }
       
      Course(); 

      // JavaScript HTML DOM EventListener

      var eventlistener=document.getElementById("eventlistener");

      eventlistener.addEventListener("click",function(){

        alert("Hlw, I am EventListener");

      });

      eventlistener.addEventListener("click",function(){

        alert("The Function also be executed");

      });

      eventlistener.addEventListener("mousemove",function(){

         alert("This user hover mouse this button");
       
      });

      // Add an event listener that fires when a user resizes the window
      window.addEventListener("resize", function(){
        document.getElementById("resize").innerHTML =Math.random();;
      });  */

var body = document.getElementById("h1");

var way1 = body.innerHTML;
var way2 = body.firstChild.nodeValue;
var way3 = body.childNodes[0].nodeValue;
console.log(way3);

//  Creating new HTML Elements

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
// element.insertBefore(para, child);

// 12/04/2023
/* document.write("Hlw Tahmina <br>");
// js variable
var x = 30;
var y = 20;
var z = x + y;
document.write(z + "<br>");

//Non Primative Data Type  // object ,array, Regular expression
document.write;
var A = null;
document.write(A + "<br>");
// object
var BioData = {
  Name: "Tahmina",
  Age: 25,
  City: "Pangsha",
};
//Array
var DefineArray = ["Dhaka", "Bangladesh", "Rajshai"];
//to see datatype.

document.write(typeof BioData + "<br>");
document.write(BioData.Name + "<br>");
document.write(DefineArray + "<br>");

// if else condition
var age = 30;
var City = "Pangsha";
if (age > 18 && City == "Dhaka") {
  document.write("You are adult and you live in Dhaka");
} else if (age > 18) {
  document.write("You are adult");
} else {
  document.write("I don't know who are you?");
}

//Switch case
var marks = 180;
switch (true) {
  case marks > 100:
    document.write("Wops! Something Went Wrong  <br>");
    break;
  case marks < 100 && marks >= 80:
    document.write("A+");
    break;

  case marks < 80 && marks >= 70:
    document.write("A");
    break;

  case marks < 70 && marks >= 60:
    document.write("A-");
    break;
  default:
    document.write("F");
}

// for loop
var i;
for (i = 0; i < 10; i++) {
   continue statement
     if (i == 5 || i == 8) {
       continue;
     }

   break statement
  if (i == 3) {
    break;
  } 
  document.write(i + "<button class='btn btn-primary'>Submit</button> <br>");
}
// while loop
var i = 0;
while (i < 5) {
  document.write(i + "<button class='btn btn-primary'>Submit</button> <br>");
  i++;
}

// do while loop
var i = 0;
do {
  document.write(i + "<button class='btn btn-primary'>Submit</button> <br>");
  i++;
} while (i < 5);  

function msg(parameters) {
  alert("Hlw Tahmina" + " " + parameters);
}
msg("How are You?");
function myFunction(p1, p2) {
  return p1 * p2;
} 
//এখানে মাই ফাংশন মানেই ১০ অথবা এটা পুরোটাই ইন্টেজার এবং মান ১০// ফাংশন যা রিটান করে ফাংশন তার সমান
if (myFunction(5, 2) == 10) {
  alert("ওহে ইরানি কাপুরুষ, তুমি অন্যায়ভাবে আমাকে যুদ্ধে বধ করেছো");
} 

// Javascript Object
var Person = {
  name: "Tahmina",
  age: 25,
  city: "Pangsha",
  country: "Bangladesh",
};
// document.write(Person['country']); or
document.write(Person.name + "<br>");
//show object object
document.write(Person); 

// Array javascript
const cars = ["Saab", "Volvo", "BMW"];
var i;
for (i = 0; i < cars.length; i++) {
  document.write(cars[i] + "<br>");
} 

const cars = ["Saab", "Volvo", "BMW"];
  
   for (let item in cars) {
     console.log(cars[item]);
   } 
// for in loop in object
const Person = {
  name: "Tahmina",
  age: 25,
  city: "Pangsha",
  country: "Bangladesh",
};
for (let item in Person) {
  document.write(item + ":" + Person[item] + "<br>");
} 

// Array Concate Array Form

var arr1 = ["Tahmina", 25, "pangsha"];
var arr2 = ["Priyanka", 23, "pangsha"];

var arr3 = arr1.concat(arr2);
document.write(arr3);
// Array From to convert a string into Array
var arr = Array.from("Tahmina Toma");
document.write(arr);
document.write(arr[5]); 

// Array Filter
function checkAdult(age)  {
  return age >= 18;
}

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
document.write(result);
// another way 
// var result = ages.filter(function (item) {
//   return item > 10;
// });
// document.write(result); 

// Array Find
const ages = [32, 33, 16, 40];
var result = ages.find(function (item) {
  return item > 30;
});
console.log(result);

// Array FindIndex 
var result = ages.findIndex(function (item) {
  return item > 30;
});
console.log(result); 

// Array ForEach Method
var arr1 = ["Tahmina", 25, "pangsha"];
var result = arr1.forEach(function (fetch) {
  console.log(fetch);
}); 

// Array Reverse
var numArray = [30, 32, 40, 55, 60, 80, 90];
var result = numArray.reverse();
document.write(result);  

//Array Push
var numArray = [30, 32, 40, 55, 60, 80, 90];
numArray.push(100);
numArray.push(120);
document.write(numArray);
numArray.pop();
document.write(numArray); 

// Array Sort
var numArray = [30, 32, 40, 55, 60, 80, 90];
numArray.sort();
document.write(numArray); 

// Array Slice
var numArray = [30, 32, 40, 55, 60, 80, 90];
var result = numArray.slice(1,3);
document.write(result); */

//Date Object
var obj = new Date();
