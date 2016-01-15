var number = 10;

function surpriseSurprise(generate) {
  if (generate) {
    var number = Math.random();
    return number;
  }

  return number;
}
//execute function
surpriseSurprise(false);
