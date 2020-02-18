function check(a,x) {
  var arr = [];
  var foundYa = a.filter(function(i) {
    if(i === x) {
      arr.push(x);
    }
  });
  if(arr.length >= 1) {
    return true;
  } else {
    return false;
  }
};
