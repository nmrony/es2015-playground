Variable Scope and Surprises
============================
Javascript is one of the notorious language and gives you unpredictable surprises if you do not know how Javascript handles 
variable scope. Did you encounter or write code like below?
```js
var number = 10;
function surpriseSurprise(generate) {
   if(generate) {
     var number = Math.random();
     return number;
   }
   
   return number;
}
//execute function
surpriseSurprise(false); //prints undefined
```

It will give you a big `undefined`. Surprised!!!

In `ES5` and below, you declare variables via `var` and those variables are function-scoped, their scopes are the 
innermost enclosing functions. The behavior of `var` is occasionally confusing like above. Actually Javascript compiler
do some declaration rearrangement behind the scene like below then execute it.
```js
var nubmer = 10;
function surpriseSurprise(generate) {
   var number;
   if(generate) {
     number = Math.random();
     return number;
   }
   
   return number;
}
//execute function
surpriseSurprise(false);
```
Now it is clear why you get `undefined`. This is called `Variable Hoisting`.

Introducing Block Scoped Variable
=================================
From `ES2015` aka `ES6` Javascript introduced block-scoped variables via two keyword `let` and `const`. Block scopes in
Javascript are created:
                                                                                                        
1. Inside a function
1. Inside of a block (enclosing statement(s) by the `{` and `}`) 

### Let Declaration
`let` syntax is same as `var` and can be just in replacement with `var` in most cases. Let's just replace the `var` with
`let` in above example and see what happened.
```js
let number = 10;
function surpriseSurprise(generate) {
   if(generate) {
     let number = Math.random();
     return number;
   }
   
   return number;
}
//execute function
surpriseSurprise(false); //prints 10;
```
As you see now we get the expected result. This is because `let` variables are not hoisted. Let's check another example
```js
function letScopeExplanation() {
  let outside = 10;
  
  //define a block scope
  {
    let firstBlock = 1;
    //some code...
    console.log(firstBlock); // 1
    console.log(outside); //10
  }
  
  //another block scope
  {
     let secondBlock = 2;
     //some code...
     console.log(secondBlock); // 2
     console.log(outside); //10
     console.log(firstBlock); //Uncaught ReferenceError: nested1 is not defined
  }
  
  console.log('outside ', outside); //10
  //nested1, nested2 is not available and thow ReferenceError
}
letScopeExplanation();
```
