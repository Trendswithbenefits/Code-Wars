var gimme = function (inputArray) {
  var arrCopy = inputArray.slice().sort(function(x,y) {return x-y});
  return inputArray.indexOf(arrCopy[1]);
};