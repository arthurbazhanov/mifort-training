'use strict';

function Bubbles(array){

  let length = array.length;
  let n;
  for (let i = 0; i < length - 1; i++)
    for (let j = 0; j < length - i -1; j++){
      if (array[j] > array[j+1] ) {
        n = array[j];
        array[j] = array[j+1];
        array[j+1] = n;
      }
    }
  return array
}

let array = [5,3,45,10,68,9,35,15,55,25,68];
console.log(Bubbles(array));
