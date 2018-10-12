'use strict';

/**
 * @return {number}
 */
function Privet() {
  let a = 3;
  let b = 5;
  let c = 2;
  if(a > b){
    console.log(Math.pow(a,c));
  } else {
    console.log(Math.pow(b,a));
  }
}
module.exports = Privet;
