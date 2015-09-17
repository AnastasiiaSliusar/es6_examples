
 'use strict';
/* var sym1 = Symbol(),
  sym2 = Symbol("foo"),//символ з описом
  sym3 = Symbol("foo");
 if(sym2 === sym3){
     console.log('yes');
 }else{
     console.log('no');
 }

 */

//new Symbol() - буде помилка
/*
 var sym1 = Symbol(),
   sym2 = Symbol("foo"),
   sym3 = Symbol("foo"),
   object1=Object(sym2);  
  if( object1 == sym2){
      console.log('yes3');
  }else{
      console.log('no3');
  }
 console.log('typeof_sym2-->',(typeof sym2));
 console.log('typeof_object1-->',(typeof object1));
 */
 
 
//Символи в циклі for in не піддаються ітерації
/*
 var obj = {};

 obj[Symbol("a")] = "a";
 obj[Symbol.for("b")] = "b";
 obj["c"] = "c";
 obj.d = "d";

 for (var i in obj) {
    console.log(i); // logs "c" and "d"
 }
 */


//обчислювальні властивості об'єкта

 /*
  const MY_KEY = Symbol();
   let obj = {};

   obj[MY_KEY] = 123;
   console.log(obj[MY_KEY]);
  */



  /*
   const FOO = Symbol();
     let obj = {
      [FOO](a) {
       console.log('a-->',a);
       return 'bar';
      }
     },
      b=1234;
     console.log(obj[FOO](b)); 
   */

/*
Property keys - string or symbols
String-value keys - property name
Symbol-value keys - symbol property
*/
  /*
   let obj = {
      [Symbol('my_key')]: 1,
      enum: 2,
      nonEnum: 3
     };
   */
  //console.log(Object.defineProperty(obj,'nonEnum', { enumerable: false }));
  //console.log(Object.getOwnPropertyNames(obj));
 //console.log(Object.getOwnPropertySymbols(obj));
//console.log(Object.keys(obj));





 //перелік ключів
 /*
 var COLOR_RED    = 'RED';
 var COLOR_ORANGE = 'ORANGE';
 var COLOR_YELLOW = 'YELLOW';
 var COLOR_GREEN  = 'GREEN';
 var COLOR_BLUE   = 'BLUE';
 var COLOR_VIOLET = 'VIOLET';

 
 const COLOR_RED    = Symbol();
 const COLOR_ORANGE = Symbol();
 const COLOR_YELLOW = Symbol();
 const COLOR_GREEN  = Symbol();
 const COLOR_BLUE   = Symbol();
 const COLOR_VIOLET = Symbol();


 function getComplement(color) {
    console.log('color-->',color);
  switch (color) {
   case COLOR_RED:
    return COLOR_GREEN;
   case COLOR_ORANGE:
    return COLOR_BLUE;
   case COLOR_YELLOW:
    return COLOR_VIOLET;
   case COLOR_GREEN:
    return COLOR_RED;
   case COLOR_BLUE:
    return COLOR_ORANGE;
   case COLOR_VIOLET:
    return COLOR_YELLOW;
   default:
    return ('Unknown color: '+color);
  }
 }

var MOOD_BLUE = 'BLUE',
result=getComplement(MOOD_BLUE);
console.log('result-->',result);

*/
 


 //iterability
/*
  let obj = {
   data: [ 'hello', 'world' ],
   [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
     next() {
      if (index < self.data.length) {
       return {
        value: self.data[index++]
       };
      } else {
       return { done: true };
      }
     }
    };
   }
  };

 for (let item of obj ){
     console.log('item-->',item);
 }
 */
/*
 //global symbol register

 let sym = Symbol.for('Hello everybody!');
 console.log('sym-->'
 )
 
  
  Symbol.keyFor(sym);

 //Property access via [ ]


 const sym = Symbol('yes');
 let obj = {
  [sym]: 'a',
  str: 'b',
 };
 let wrappedSymbol = Object(sym);
 console.log(typeof wrappedSymbol);


 let wrappedString = new String('str');
  console.log(typeof wrappedString);

  console.log(obj[wrappedString]);

*/
 //JSON.stringify


 /*
  function symbolReplacer(key, value) {
    if (typeof value === 'symbol') {
     return '@@' + Symbol.keyFor(value) + '@@';
    }
    return value;
   }
   const MY_SYMBOL = Symbol.for('http://example.com/my_symbol');
   let obj = { [MY_SYMBOL]: 123 };

   let str = JSON.stringify(obj, symbolReplacer);
   console.log(str);
  */


