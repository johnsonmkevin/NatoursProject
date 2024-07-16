"use strict";

const openModalBtn = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelector(".modal__close");
const modalEl = document.querySelector(".modal");

const toggleModal = (visible) => {
  modalEl.style.visibility = visible ? "visible" : "hidden";
  modalEl.style.opacity = visible ? 1 : 0;
  modalEl.style.transform = visible ? "scale(1)" : "";
};

openModalBtn.forEach((btn) => btn.addEventListener("click", () => toggleModal(true)));

closeModalBtn.addEventListener("click", () => toggleModal(false));
