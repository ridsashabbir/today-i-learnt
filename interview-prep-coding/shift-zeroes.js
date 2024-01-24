const shiftZeroes = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1); // remove zero from the array
    }
    arr.push(0); // push zero (that you just removed) at the end of array
  }
  return arr;
};

// example usage
let arr = [0, 1, 0, 2, 3, 0, 0, 0, 4, 0, 5, 0];
let result = shiftZeroes(arr);
console.log(result);
