function mutation(arr) {
  var str1 = "";
  var str2 = "";
  str1 = arr[0];
  str2 = arr[1];
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  var stringCheck = "";
  for (var i = str2.length; i > 0; i--) {
    stringCheck = str2.charAt(i - 1);
    if (str1.indexOf(stringCheck) === -1 ) {
      return false;
    }
    else {
      if (i === 1) {
        return true;
      }
    }
    
  }
}

mutation(["hello", "hey"]);
