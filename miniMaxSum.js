/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, . Our minimum sum is  and our maximum sum is . We would print

16 24
*/

function miniMaxSum(arr) {
    var sortArr = arr.sort((a,b)=>{return a-b});
    var min = 0;
    var max = 0;
    for (var i = 0;i<arr.length;i++){
        min += arr[i];
        max += arr[i];
    }
        min -= arr[arr.length - 1];
        max -= arr[0];
    console.log(min, max);
}
