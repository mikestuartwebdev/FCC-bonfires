function findLongestWord(str) {
  var strArray =[];
  strArray = str.split(" ");
  aLength = strArray.length;
  var winner = "";
  for (var i = aLength - 1; i > 0; i--) {
    var contestant1 = strArray[i];
    if (contestant1.length > winner.length) {
      winner = contestant1;
      str = winner;
    }
  }   
  return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");