
 'use strict';
 var sym1 = Symbol(),
  sym2 = Symbol("foo"),//символ з описом
  sym3 = Symbol("foo");
 if(sym2 === sym3){
     console.log('yes');
 }else{
     console.log('no');
 }

//new Symbol() - буде помилка

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
 
//Символи в циклі for in ігноруються
 var obj = {};
 obj[Symbol("a")] = "a";
 obj[Symbol.for("b")] = "b";
 obj["c"] = "c";
 obj.d = "d";

 for (var i in obj) {
    console.log(i); 
 }
 
//обчислювальні властивості об'єкта
  const MY_KEY = Symbol();
   let obj = {};

   obj[MY_KEY] = 123;
   console.log(obj[MY_KEY]);
  
   const FOO = Symbol();
     let obj = {
      [FOO](a) {
       console.log('a-->',a);
       return 'bar';
      }
     },
      b=1234;
     console.log(obj[FOO](b)); 
  

/*
Property keys - string or symbols
String-value keys - property name
Symbol-value keys - symbol property
*/
  
   let obj = {
      [Symbol('my_key')]: 1,
      enum: 2,
      nonEnum: 3
     };
   
  console.log(Object.defineProperty(obj,'nonEnum', { enumerable: false }));
  //console.log(Object.getOwnPropertyNames(obj));
  //console.log(Object.getOwnPropertySymbols(obj));
  //console.log(Object.keys(obj));
 
 //iterability
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

 //global symbol register
 let sym = Symbol.for('Hello everybody!');
 console.log('sym-->',sym);
 console.log(Symbol.keyFor(sym));

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
 

