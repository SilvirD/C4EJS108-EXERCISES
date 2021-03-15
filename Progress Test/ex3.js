let array = [
  "one",
  "one",
  "two",
  "three",
  "two",
  "four",
  "three",
  "five",
  "four",
  "five",
];

// let array = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];

let a = array.filter((value, index) => array.indexOf(value) === index);
console.log(a);

// FIX
//Tao 1 mang luu ket qua
let newArr = [];

//Di qua tung phan tu trong mang goc
for (elem of array) {
  if (newArr.includes(elem)) {
    //Khong luu vao mang ket qua
  } else {
    //New mang luu ket qua khong chua phan tu do, thi add vao mang luu ket qua
    newArr.push(elem);
  }
}
console.log(`Array: ${array.join(", ")}`);
console.log(`New array: ${newArr.join(", ")}`);

//SU DUNG SET(khong chua cac phan tu trung lap)
console.log(...new Set(array))