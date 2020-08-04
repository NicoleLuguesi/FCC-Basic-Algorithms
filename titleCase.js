function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  for (var i = 0; i < words.length; i++){
  var letters = words[i].split("")
  //console.log(letters)
  letters[0] = letters[0].toUpperCase();
  //console.log(letters)
  words[i] = letters.join("")
  }
  //console.log(words)
  return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));