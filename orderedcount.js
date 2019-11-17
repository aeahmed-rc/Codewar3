var orderedCount = function (text) {
hashtable()

  // Implement me!
  return [];
}
function hashtable(str){
str.toLowerCase()
const mapObj={}
for(let char of str){
mapObj[char]=mapObj[char] + 1 || 1
}
return mapObj
}

// hashtable turns string into object, tuples are two things in an array
// google how to put obj into array
