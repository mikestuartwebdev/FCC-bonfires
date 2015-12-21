function largestOfFour(arr) {
  var largest = 0;
  var subArray = [];
  var winners = [];
  for (var i = 0; i < 4; i++) {
    subArray = arr[i];
    largest = 0;
    for (var x = 0; x < 4; x++) {  
     if (subArray[x] > largest) {
        largest = subArray[x];
     }
     if (x === 3) {
     winners.push(largest);
     }
    }
  if (i === 3) {
    return winners;
  }
  }    
}
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);