function titleCase(str) {
  var capital = str.toLowerCase().split(" ").map(function(value){
    return value[0].toUpperCase() + value.slice(1)
    
  })
  // array.map(function(currentValue, index, arr), thisValue)
  //console.log(capital)
  return capital.join(" ")
}

console.log(titleCase("Please excuse my dear aunt sally"));