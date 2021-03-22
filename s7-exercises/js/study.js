const container = document.getElementById("list");
for (let i = 0; i < 3; i++) {
  container.insertAdjacentHTML("beforebegin", `<li>${i}</li>`);
  container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`);
  container.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
  container.insertAdjacentHTML("afterend", `<li>${i}</li>`);
}
