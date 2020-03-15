Sum of differences in array
function sumOfDifferences(arr) {
arr.sort(function(a, b){return b-a});
let sum=0
for (let i=0;i<arr.length-1;i++){
sum+=arr[i]-arr[i+1]
}
return sum
}
