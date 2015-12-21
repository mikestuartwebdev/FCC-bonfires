function reverseString(str) {
  myArray = [];
  myArray = str.split("");
  myArray = myArray.reverse();
  str = myArray.join("");
  return str;
}

reverseString("hello");
