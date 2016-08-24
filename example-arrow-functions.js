var names = ['Quinten','Julie','Jen'];
//
// names.forEach(function(name){
//   console.log('foreach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name) => console.log('shortArrow',name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Quinten'));

var person = {
  name: 'Quinten',
  greet: function (){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

person.greet();

function add (a,b) {
  return a+ b;
}

// arrow functions keep the "this" binding of the parent function

// use curly braces
var addStatement = (a, b) => {
  return a + b;
}

// use expression syntax
var addExpression = (a,b) => a+b;

// console.log(add(1,3));
// console.log(add(9,0));

console.log(addStatement(1,3));
console.log(addStatement(9,0));

console.log(addStatement(3,-2));
console.log(addStatement(9,0));
