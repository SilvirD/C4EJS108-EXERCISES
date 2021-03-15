let arrEmployee = [];

let Emp1 = {
  name: "Tran Trong Duc",
  age: 21,
  salary: 2000000,
  job: "Student",
};

let Emp2 = {
  name: "Tran Duc Trung",
  age: 22,
  salary: 3000000,
  job: "Student",
};

let Emp3 = {
  name: "Tran Hoang Anh",
  age: 30,
  salary: 200000000,
  job: "Director",
};

let blankEmp = {};
arrEmployee.push(Emp1, Emp2, Emp3);

while (true) {
  const cmd = prompt("Enter your command (read, create, update, delete): ");

  if (cmd.toLowerCase() === "read") {
    for (let i = 0; i < arrEmployee.length; i++) {
      console.log(arrEmployee[i]);
    }
    break;
  } else if (cmd.toLowerCase() === "create") {
    let empName = prompt("Enter employee name: ");
    let empAge = Number(prompt("Enter employee age: "));
    let empSal = Number(prompt("Enter employee salary: "));
    let empJob = prompt("Enter employee job: ");

    blankEmp.name = empName;
    blankEmp.age = empAge;
    blankEmp.salary = empSal;
    blankEmp.job = empJob;

    arrEmployee.push(blankEmp);
    blankEmp = {};
  } else if (cmd.toLowerCase() === "update") {
    let pos = Number(prompt("Enter employee position you want to update:"));
    if (pos <= arrEmployee.length) {
      let newName = prompt("Enter employee name: ");
      let newAge = Number(prompt("Enter employee age: "));
      let newSal = Number(prompt("Enter employee salary: "));
      let newJob = prompt("Enter employee job: ");

      arrEmployee[pos - 1].name = newName;
      arrEmployee[pos - 1].age = newAge;
      arrEmployee[pos - 1].salary = newSal;
      arrEmployee[pos - 1].job = newJob;
    } else {
      alert("Out of range");
    }
  } else if (cmd.toLowerCase() === "delete") {
    let pos = Number(prompt("Enter employee position you want to delete:"));
    if (pos <= arrEmployee.length) {
      arrEmployee.splice(pos - 1, 1);
    } else {
      alert("Out of range");
    }
  } else {
    alert("Invalid commamd, try again");
  }
}
