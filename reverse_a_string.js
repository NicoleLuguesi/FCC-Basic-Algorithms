function reverseString(str) {
    var newArray = str.split("");

   // console.log(newArray);
    newArray.reverse();

    newArray = newArray.join("");
    
    
    console.log(newArray)
    return newArray;
  }
  
  reverseString("hello");
  