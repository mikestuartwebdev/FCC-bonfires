function valid(entry) {
  var comparator =  Boolean(entry);
  if (comparator === false) {
    return false;
  }
  else {
    return true;
  } 
}

function bouncer(arr) {
  var filtered = arr.filter(valid);
  return filtered;
}

bouncer([false, null, 0, NaN, undefined, ""]);