'use strict';

//Multi-line strings
//variant 1 by using template literals
var table='news_common.news',
fields='news_id,author_id,add_date',
 qs=`SELECT ${fields} FROM ${table} 
WHERE news_id=150000`;
console.log('qs_variant_1--->',qs);  


// variant 2
var table='news_common.news',
fields='news_id,author_id,add_date',
 qs='SELECT '+fields+'FROM '+table+ 
' WHERE news_id=150000';
console.log('qs_variant_2--->',qs); 




//Expression interpolation

var object={
    prop1:0.49,
    prop2:0.4,
    prop3:0.5,
    prop4:0.33,
    prop5:0.76    
},
result=`The result is ${(object.prop1+object.prop2+object.prop3+object.prop4+(object.prop5<0.5?object.prop5:0))/(object.prop5<0.5?5:4)}. The end`;
console.log('result-->',result);




//Tagged template

//Raw string 
function exampleTaggedTemplate(templateObject,expressions1,expressions2) {
    console.log('templateObject-->',templateObject);
    console.log('${45+4675}-->',expressions1);
     console.log('${3453+3}-->',expressions2);
  console.log('templateObject.raw-->',templateObject.raw);   
}

exampleTaggedTemplate`sum1 ${45+4675} 1 \n sum 2 ${3453+3} `;

console.log('String.raw-->',String.raw`Hi\n${2+3}!`);


//Cooked and raw string

function probaFunction(tmplObj,substs) {
    console.log('Cooked:',tmplObj);
    console.log('Raw:   ',tmplObj.raw);
    console.log('substs-->',substs);
}

probaFunction`Proba1 ${3+3}`;
probaFunction`Proba2 \${3+3}`;
probaFunction`Proba3 \\${3+3}`;




