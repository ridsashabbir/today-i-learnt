let users = [{ name: "Ridsa" }, { name: "Umar" }];

users.forEach(({ name }, index) => {
  let sentence = `index: ${index}: My name is ${name}.`;
  console.log(sentence);
});
