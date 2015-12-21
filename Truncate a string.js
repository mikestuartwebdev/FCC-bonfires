function truncate(str, num) {
  var makeLong = "...";
  var newString = "";
    if (num >= str.length) {
    newString = str;
  }
  else if (num >= 3) {
    newString = str.slice(0, num - 3);
    newString = newString.concat(makeLong);
  }
  else {
    newString = str.slice(0, num);
    newString = newString.concat(makeLong);}
  return newString;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
