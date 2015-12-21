function titleCase(str) {
  str = str.toLowerCase();
  var strArray = str.split(" ");
  var aLength = strArray.length;
  var newArray = [];
  var stringy = "";
  for (var i = aLength -1; i > -1; i--) {
    var mod = strArray.pop();
    var wordArray = mod.split("");
    var upperCased = wordArray.shift();
    upperCased = upperCased.toUpperCase();
    wordArray.unshift(upperCased);
    var complete = wordArray.join("");
    newArray.unshift(complete);
    if (newArray.length === aLength) {
      stringy = newArray.join(" ");
    }
    if (i === 0) {
    return stringy;
    }
  }

}
titleCase("I'm a little tea pot");