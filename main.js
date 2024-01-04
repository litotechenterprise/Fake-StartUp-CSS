let modal = document.querySelector(".modal");
let NoModalBtn = document.querySelector(".modal__actions button");
let plansBtns = document.querySelectorAll(".plan button");
// let backdrop = document.querySelector(".backdrop");

NoModalBtn.addEventListener("click", () => {
  //backdrop.style.display = "none";
  // modal.style.display = "none";
  modal.classList.remove("open");
  backdrop.classList.remove("open");
});

plansBtns.forEach((button) => {
  button.addEventListener("click", () => {
    //backdrop.style.display = "block";
    // modal.style.display = "block";

    modal.classList.add("open");
    backdrop.classList.add("open");
  });
});
