const urlRegex = /^(http:\/\/|https:\/\/)[\w\d\S]+?\.[\w]+$/;

const url1 = "http://www.example.com";
const url2 = "https://www.example.com/path/to/page.html";
const url3 = "ftp://www.example.com";
const url4 = "https://www.example..com";

console.log(urlRegex.test(url1)); // true
console.log(urlRegex.test(url2)); // true
console.log(urlRegex.test(url3)); // false
console.log(urlRegex.test(url4)); // false
