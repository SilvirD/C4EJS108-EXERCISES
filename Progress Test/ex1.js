let str = prompt("Enter your string");
let a = [];
str = str.split("");
for (let i = str.length - 1; i >= 0; i--) {
  a.push(str[i]);
}
console.log(a.join(""));

//FIX
// let str = 'abc'
// let newStr = ''

// for(let i = str.length - 1; i>=0; i++){
//   newStr = newStr + str[i]
// }
// console.log(newStr)
