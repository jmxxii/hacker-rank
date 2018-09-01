/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
*/

function diagonalDifference(arr) {
  var arrOG = arr.slice();
  var arrReverse = arr.map(el => { return el.slice().reverse() })
  var left = iterate(arr);
  var right = iterate(arrReverse);
  return (left > right) ? left - right : right - left;
}
function iterate(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      sum += arr[i][i];
    }
    return sum;
  }
