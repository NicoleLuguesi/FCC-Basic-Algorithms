// function factorialize(num) {

//     for (var product = 1; num > 0; num--){
//       product *= num;
//     }
//     return product;
//   }
  
//  console.log(factorialize(10));

// function factorialize(num) {
//   var answer = 1;
//   while(num > 1){
//     answer *= num; // answer = answer * num;
//     num--;
//   }
//   return answer;

// }

// console.log(factorialize(3));

var answer = 1;

function factorialize(num){

  answer *= num;
  num--;
  if (num > 1){
    factorialize(num)
  }
}
console.log(factorialize(5));

