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
