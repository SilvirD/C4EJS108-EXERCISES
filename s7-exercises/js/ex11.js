// 11.2
let upperBtn = document.getElementById("upper_btn");
console.log(upperBtn);

// 11.3
upperBtn.addEventListener("click", function () {
  alert("Button is clicked!");
});

// 11.4
let nameInput = document.getElementById("name_input");
console.log(nameInput);

// 11.5
nameInput.value = "Tran Trong Duc";
console.log(nameInput.value);

// 11.6
let upperName = nameInput.value.toUpperCase();
console.log(upperName);

// 11.7
let result = document.getElementById("result_tag");
console.log(result);

// 11.8
result.innerHTML = upperName;


