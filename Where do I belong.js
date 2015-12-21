function where(arr, num) {
  var place = 0;
  var arrLen = arr.length;
  arr.sort(function(a,b) {
    return a - b;
  });
  for (var i = arrLen; i > 0; i--) {
    if (num <= arr[0]) {
      break;
    }
  
    if (num > arr[arrLen - 1]) {
      place = arrLen;
      break;
    }
    
    if (num === arr[i -1]) {
      place = [i - 1];
      place = place * 1;
      break;
    }
    
    if (num > arr[i - 2] && num <= arr[i - 1]) {
      place = [i -1];
      place = place * 1;
      break;
      
    }
    
  }
  
  
  return place;
}

where([5,3,20,3], 5);
