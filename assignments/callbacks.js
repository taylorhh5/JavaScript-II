// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });



  
  // getLength passes the length of the array into the callback.


function getLength(arr, cb) {
  return cb(arr.length);
}
getLength(items, function(getLength) {
  console.log(getLength)
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function last(arr, cb) {
  cb(arr[arr.length - 1]);
}
last(items, function(last) {
  console.log(last)
});



 // sumNums adds two numbers (x, y) and passes the result to the callback.
let sumNums = function (x, y, cb) {
 return cb (x + y);
}
sumNums(5,5, function(sumNums) {
  console.log(sumNums)
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
 cb (x * y);
}

multiplyNums(5,5, function(multiplyNums) {
  console.log(multiplyNums)
});





// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.



function log (param){
  console.log(param);
    }
  

function contains(item, list, cb) {
 
let isPresent = false;
 
list.forEach(function (currentItem){
  if (currentItem === item) {
    isPresent = true;
  }
})
cb (isPresent);
}
 contains ("Pencil",  items, log );
 









 //  let contains = items.filter(function(item){
//   if (item === "Gum") {
//     return true
//   } 
//   else  {
//     return (false)
//   }

// });
// contains ("Gum", function(item){
//   console.log (contains)
// });


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
