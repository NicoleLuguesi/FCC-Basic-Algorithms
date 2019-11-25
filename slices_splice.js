// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// // frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }

function frankenSplice(arr1, arr2, n) {

    let localArray = arr2.slice();
    //console.log(localArray);

    for (var i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        console.log(localArray);
        n++;
    }
  
  return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);