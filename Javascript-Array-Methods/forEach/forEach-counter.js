// let's count elements in array using forEach

const letters = ["a", "b", "c", "a", "b", "d", "c"];
let count = {};
letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count);
