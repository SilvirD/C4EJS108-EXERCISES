function alertWishNoParam() {
  alert(`TTD: Get a job`);
}
alertWishNoParam();

let myName = "Tran Trong Duc";
let myWish = "Hope to get a good job";

function alertWish(name, wish) {
  if (!wish) {
    alert("Your wish is missing. Try again");
  } else {
    alert(`${name}: ${wish}`);
  }
}

alertWish(myName);

