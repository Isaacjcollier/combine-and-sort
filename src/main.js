
var nameListOne = ['cat', 'dog', 'fish', 'zebra'];
var nameListTwo = ['lion', 'aardvark', 'gorilla'];
function alphabatize (name1, name2){
  var combinedNameList = name1.concat(name2);
  return combinedNameList.sort();
}

console.log(alphabatize(nameListOne, nameListTwo));
console.log('Original List # 1', nameListOne);
console.log('Original List # 2', nameListTwo);
