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
