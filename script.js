"use strict";

const openModalBtn = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelector(".modal__close");
const modalEl = document.querySelector(".modal");
const navigationEl = document.querySelectorAll(".navigation__item");
const navCheckboxEl = document.querySelector(".navigation__checkbox");
const toggleModal = (visible) => {
  modalEl.style.visibility = visible ? "visible" : "hidden";
  modalEl.style.opacity = visible ? 1 : 0;
  modalEl.style.transform = visible ? "scale(1)" : "";
};

const toggleNav = (checked) => {
  navCheckboxEl.checked = checked ? false : true;
};

openModalBtn.forEach((btn) => btn.addEventListener("click", () => toggleModal(true)));

closeModalBtn.addEventListener("click", () => toggleModal(false));

navigationEl.forEach((n) => n.addEventListener("click", () => toggleNav(true)));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleModal(false);
  }
});

modalEl.addEventListener("click", () => toggleModal(false));
