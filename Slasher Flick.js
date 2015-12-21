function slasher(arr, howMany) {
  var newArray = [];
  newArray = arr.splice(howMany);
  return newArray;
}

slasher([1, 2, 3], 2);