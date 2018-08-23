/*
Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .
*/

function staircase(n) {
  var hash = '#';
  var arr = [];
  var result;
  for(var i = 1; i <= n; i++){
      var line = hash.repeat(i).split('');
      arr.push(line);
      for(var j=0;j<arr.length;j++){
        if(arr[j].length < n){
          arr[j].unshift(' ')
        }
      }
  }
  arr = arr.map(el => { return el.join('') })
   console.log(arr.join().replace(/,/g, '\n'));
  }