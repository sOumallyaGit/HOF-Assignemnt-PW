let input = "hello world";

setTimeout(() => {
  let reversed = input.split("").reverse().join("");
  console.log(reversed);
}, 2000);
