function repeat(str, num) {
  var newArray = [];
  newArray.push(str);
  if (num > 1) {
  for (var i = num - 1; i > 0; i--) {
    newArray.push(str);
    if (i === 1) {
      newArray = newArray.join("");
      return newArray;
    }
  }
  }
  else if (num < 1) {
    return "";
  }
  else {
    return str;
  }
}

repeat("abc", 3);
