"use strict";

const openModalBtn = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelector(".modal__close");
const modalEl = document.querySelector(".modal");

const openModal = () => {
  modalEl.style.visibility = "visible";
  modalEl.style.opacity = 1;
};

const closeModal = () => {
  modalEl.style.visibility = "hidden";
  modalEl.style.opacity = 0;
};

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);
