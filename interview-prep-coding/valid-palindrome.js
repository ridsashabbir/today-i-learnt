// valid palindrome using two pointer approach without using any built in function
const isPalindrome = (str) => {
  // string cleaning - should only contain alphanumeric characters and all in lower case
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // initialize two pointers
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// example usage
let input = "maham";
let result = isPalindrome(input);
if (result) {
  console.log(`${input} is a valid Palindrome`);
} else {
  console.log(`${input} is NOT a valid Palindrome`);
}

// O(n)

// The time complexity of the provided isPalindrome function is O(n), where n is the length of the input string.

// Explanation:
// 1. **String Cleaning:** The first step involves cleaning the string, which is done using the `replace` method with a regular expression. This process has a linear time complexity O(n), where n is the length of the input string.
// 2. **Two-Pointer Approach:** After cleaning the string, the two-pointer approach is used to check whether it is a palindrome or not. The while loop iterates through half of the string (since each iteration compares two characters), which results in O(n/2) iterations. However, in big-O notation, the constant factor (such as dividing by 2) is ignored, so it simplifies to O(n).
// Combining both steps, the overall time complexity is O(n) + O(n) = O(n), where n is the length of the input string.
// Therefore, the time complexity of the isPalindrome function is linear with respect to the length of the input string.
