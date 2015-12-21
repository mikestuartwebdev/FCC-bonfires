function end(str, target) {
  var endLen = target.length;
  var storage = "asdf";
  var final = [];
  var chopper = [];
  chopper = str.split("");
  for (var i = endLen; i > 0; i--) {
    storage = chopper.pop();
    final.unshift(storage);
    if (i === 1) {
      final = final.join("");
      if (final === target) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

end("Bastian", "n");