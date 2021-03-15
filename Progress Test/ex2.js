let chuoi = "tran Trong Duc";
chuoi = chuoi.toLowerCase().split(" ");
let arr = [];
for (let i = 0; i < chuoi.length; i++) {
  let a = chuoi[i].charAt(0).toUpperCase() + chuoi[i].substring(1);
  arr.push(a);
}
console.log(...arr);

//FIX
// let chuoi = "this is a test";
// chuoi = chuoi.split(" ");
// let newStr = "";

// for (let tu of chuoi) {
//   for (let i = 0; i < tu.length; i++) {
//     if (i === 0) {
//       newStr = newStr + tu[i].toUpperCase();
//     } else {
//       newStr = newStr + tu[i];
//     }
//   }
//   newStr += " ";
// }
// console.log(newStr);

// 1. Tach dung split -> mang cac tu
// 2. Tao bien tam
// 3. Di qua tung tu: for ngoai
//   Doc tung chu trong tu: for trong
//   viet hoa chu dau, add
//   Cac chu khac: add
//   them dau cach: ket thuc tu
