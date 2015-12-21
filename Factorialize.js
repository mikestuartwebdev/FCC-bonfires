function factorialize(num) {
  var runningTotal = num;
  var subTotal = 0;
  var divisor = num;
  if (num === 0) {
    return 1;
  }
  
  else {
  for (var i = num; i > 1; i--) {
  subTotal = runningTotal * (num - 1);
  runningTotal = runningTotal + subTotal;
  num = num - 1;
  if (num === 1) {
    num = runningTotal / divisor;
    return num;
  }
    }
  }
}

factorialize(5);