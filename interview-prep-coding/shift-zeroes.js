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

// O(n^2)

// The time complexity of the provided `shiftZeroes` function is O(n^2), where n is the length of the input array.

// Explanation:

// 1. **Looping through Array:** The for loop iterates through each element of the array once, resulting in O(n) time complexity.
// 2. **Splicing and Pushing:** Within the loop, the `splice` and `push` operations are performed. The `splice` operation has an average time complexity of O(n), where n is the length of the array. Since it is performed inside a loop, the overall time complexity becomes O(n^2).
// So, combining both the array iteration and the splicing/pushing operations, the overall time complexity of the `shiftZeroes` function is O(n^2).
// It's worth noting that the repeated use of `splice` within the loop contributes significantly to the time complexity. If you want to optimize the solution, consider using a two-pointer approach, which would bring the time complexity down to O(n).
