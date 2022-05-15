// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// 8 kyu

function between(a, b) {
  let arr = [];
  let i = 1;
  while (a <= b) {
    arr.splice(i, 0, a++);
    i++;
    a = a++;
  }
  return arr;
}


//BETTER SOLUTION

function between(a, b) {
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }