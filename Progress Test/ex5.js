let inputDate = prompt("Enter date: ");
console.log(`Date: ${inputDate}`);
inputDate = inputDate.split("/");

let [day, month, year] = inputDate;

let M31 = [1, 3, 5, 7, 8, 10, 12];
let M30 = [4, 6, 9, 11];

day = Number(day);
month = Number(month);
year = Number(year);

if (M31.includes(month)) {
  if (day >= 1 && day <= 31) {
    console.log("Valid");
    if (day < 31) {
      day++;
      console.log(`Next day: ${day}/${month}/${year}`);
    } else {
      day = 1;
      month++;
      console.log(`Next day: ${day}/${month}/${year}`);
    }
  } else {
    console.log("Invalid");
  }
} else if (M30.includes(month)) {
  if (day >= 1 && day <= 30) {
    console.log("Valid");
    if (day < 30) {
      day++;
      console.log(`Next day: ${day}/${month}/${year}`);
    } else {
      day = 1;
      month++;
      console.log(`Next day: ${day}/${month}/${year}`);
    }
  } else {
    console.log("Invalid");
  }
} else {
  if (year % 400 === 0) {
    //nam nhuan
    if (day <= 29) {
      console.log("Valid");
      if (day < 29) {
        day++;
        console.log(`Next day: ${day}/${month}/${year}`);
      } else {
        day = 1;
        month++;
        console.log(`Next day: ${day}/${month}/${year}`);
      }
    } else {
      console.log("Invalid");
    }
  } else {
    //nam ko nhuan
    if (day <= 28) {
      console.log("Valid");
      if (day < 28) {
        day++;
        console.log(`Next day: ${day}/${month}/${year}`);
      } else {
        day = 1;
        month++;
        console.log(`Next day: ${day}/${month}/${year}`);
      }
    } else {
      console.log("Invalid");
    }
  }
}
