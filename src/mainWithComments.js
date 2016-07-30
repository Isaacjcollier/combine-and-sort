// establish 2 different arrays
var nameListOne = ['cat', 'dog', 'fish', 'zebra'];
var nameListTwo = ['lion', 'aardvark', 'gorilla'];
// create a function that takes 2 arguments
function alphabatize (name1, name2){
  // concat the two arguments (".concat() will combine 2 arrays together without being destructive")
  var combinedNameList = name1.concat(name2);
  // the .sort() method, will sort an array. In this case, it is sorting alphabetically
  return combinedNameList.sort();
}
// call the function to verify it sorted the array
console.log(alphabatize(nameListOne, nameListTwo));
// call both variables to ensure the function is not destructive
console.log('Original List # 1', nameListOne);
console.log('Original List # 2', nameListTwo);
