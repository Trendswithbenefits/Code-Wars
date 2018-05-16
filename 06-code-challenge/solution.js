function isNice(arr){
  console.log('input array: ',arr);
  var flag = false;

  if (arr.length !== 0 && arr.length !== 1) {
    
    for (var i = 0; i < arr.length; i++) {
      j = arr[i];
      console.log(`Conditional check: ${arr[j-1]}, ${j}, ${arr[j+1]}`);
      //No idea why there are "undefined" elements being returned
      if (arr.includes(j + 1) || arr.includes(j - 1)) {
        console.log('j+1: ',j+1);
        flag = true;
      } else {
        return false;
      }
    }
  }
  return flag;
}