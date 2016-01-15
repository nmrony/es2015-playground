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
surpriseSurprise(false);
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
