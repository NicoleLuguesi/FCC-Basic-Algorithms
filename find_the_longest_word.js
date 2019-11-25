function findLongestWordLength(str) {

    var longestWord = 0;
    str = str.split(" ");
    console.log(str);
  
    for (var i = 0; i <str.length; i++){
      if (str[i].length > longestWord){
       longestWord = str[i].length 
      // console.log(longestWord)
       }
     }
    return longestWord;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  // function findLongestWordLength(str) {
  //   var splitString = str.split(' ');
  //   //console.log(splitString);
  //   var biggestWord = 0;
  //   for (var i = 0; i < splitString.length; i++){
  //     //console.log(splitString[i].length)
  //     if (biggestWord < splitString[i].length){
  //       biggestWord = splitString[i].length
  //       //console.log(biggestWord)
  //     }
  //   }
  //   return biggestWord;
  // }
  
  // findLongestWordLength("The quick brown fox jumped over the lazy dog");