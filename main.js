let modal = document.querySelector(".modal");
let NoModalBtn = document.querySelector(".modal__actions button");
let plansBtns = document.querySelectorAll(".plan button");

NoModalBtn.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

plansBtns.forEach((button) => {
  button.addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
});
