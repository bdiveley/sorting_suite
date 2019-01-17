function sort(array) {
  var newArray = []
  array.forEach(function(num) {
    newArray.push(num);
    newArray = sortArray(newArray) || [num];
  });
   return newArray;
}

function sortArray(array) {
  if(array.length > 1) {
    return sortNewNum(array);
  };
}


function sortNewNum(array) {
  var last = array.length-1
  for (let counter = 0; counter < array.length-1; counter++) {
    if(array[last] < array[last-1]) {
      array = swapNumbers(array, last);
      last --;
    };
  };
  return array;
}

function swapNumbers(array, last) {
  var x = array[last];
  array[last] = array[last-1];
  array[last-1] = x;
  return array;
}

module.exports = sortNewNum
module.exports = sort
module.expores = sortArray
