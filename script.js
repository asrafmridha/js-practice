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

    console.log( fruits.join( "  " )); */




      
