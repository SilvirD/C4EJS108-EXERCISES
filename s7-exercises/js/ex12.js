// 12.1
let items = ["Backpack", "MiBand watch", "Ring"];
console.log(items);

// 12.3
let list = document.getElementById("item_list_ul");
console.log(list);

// 12.4
for (let i = 0; i < items.length; i++) {
  list.innerHTML += `<li>${items[i]}</li>`;
  list.innerHTML += `<button>Remove</button>`;
}

// 12.6
let itemInput = document.getElementById("item_input");
let addBtn = document.getElementById("add_btn");
console.log(itemInput);
console.log(addBtn);

// 12.7 -> 12.11
addBtn.addEventListener("click", function () {
  if (itemInput.value.length) {
    items.push(itemInput.value);
    list.innerHTML += `<li>${itemInput.value}</li>`;
    console.log(itemInput.value);
    console.log(items);
    itemInput.value = "";
  }
});

//12.12 ->
let removeBtn = document.getElementsByClassName("btn_remove");

for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", function () {
    // alert(i);
    items.splice(items.indexOf(items[i]), 1);
    console.log(items);
    list.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
      list.innerHTML += `<li>${items[i]}</li>`;
    }
  });
}
