const dropDown1 = document.querySelector("#Monthly-Savings .dropdown");
const dropDown2 = document.querySelector("#Monthly-Expenses  .dropdown");
const dropDown3 = document.querySelector("#Annual-Expenses .dropdown");
const dropDown4 = document.querySelector("#Income .dropdown");
const dropDown5 = document.querySelector("#BudgetReview .dropdown");

dropDowns = [dropDown1, dropDown2, dropDown3, dropDown4, dropDown5];

console.log(dropDowns);
dropDowns.forEach(function (drop) {
  drop.addEventListener("click", function () {
    console.log(drop.parentElement.parentElement.id);

    // if (drop.parentElement.parentElement.id === "Monthly-Savings") {
    //   document
    //     .querySelectorAll("#Monthly-Savings .form-group")
    //     .forEach(function (drop) {
    //       drop.classList.toggle("show");
    //     });
    // } else if (drop.parentElement.parentElement.id === "Monthly-Expenses") {
    //   document
    //     .querySelectorAll("#Monthly-Expenses .form-group")
    //     .forEach(function (drop) {
    //       drop.classList.toggle("show");
    //     });
    // } else if (drop.parentElement.parentElement.id === "Annual-Expenses") {
    //   document
    //     .querySelectorAll("#Annual-Expenses .form-group")
    //     .forEach(function (drop) {
    //       drop.classList.toggle("show");
    //     });
    // } else if (drop.parentElement.parentElement.id === "Income") {
    //   document.querySelectorAll("#Income .form-group").forEach(function (drop) {
    //     drop.classList.toggle("show");
    //     6;
    //   });
    // } else if (drop.parentElement.parentElement.id === "BudgetReview") {
    //   document
    //     .querySelectorAll("#BudgetReview .form-group")
    //     .forEach(function (drop) {
    //       drop.classList.toggle("show");
    //     });
    // }

    // Switch

    const dropID = drop.parentElement.parentElement.id;

    switch (dropID) {
      case "Monthly-Savings":
        document
          .querySelectorAll("#Monthly-Savings .form-group")
          .forEach(function (drop) {
            drop.classList.toggle("show");
          });
        break;

      case "Monthly-Expenses":
        document
          .querySelectorAll("#Monthly-Expenses .form-group")
          .forEach(function (drop) {
            drop.classList.toggle("show");
          });
        break;
      case "Annual-Expenses":
        document
          .querySelectorAll("#Annual-Expenses .form-group")
          .forEach(function (drop) {
            drop.classList.toggle("show");
          });
        break;
      case "Income":
        document
          .querySelectorAll("#Income .form-group")
          .forEach(function (drop) {
            drop.classList.toggle("show");
          });
        break;
      case "BudgetReview":
        document
          .querySelectorAll("#BudgetReview .form-group")
          .forEach(function (drop) {
            drop.classList.toggle("show");
          });
        break;
    }
  });
});
