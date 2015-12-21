function chunk(arr, size) {
  var totalArray = [];
  while (arr.length > 0) {
  var newArray = arr.splice(0, size);
  totalArray.push(newArray);
  }
  return totalArray;
}

chunk(["a", "b", "c", "d"], 2);