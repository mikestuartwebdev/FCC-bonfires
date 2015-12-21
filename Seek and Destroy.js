function destroyer(arr, erase1, erase2, erase3) {
  for (var i = arr.length; i > 0; i--) {
    if (arr[i - 1] === erase1) {
      arr.splice(i - 1, 1);
    }
    if (arr[i - 1] === erase2) {
      arr.splice(i - 1, 1);
    }
    if (arr[i - 1] === erase3) {
      arr.splice(i - 1, 1);
    }
  }
  return arr;
}
 
destroyer([1, 2, 3, 1, 2, 3], 2, 3);