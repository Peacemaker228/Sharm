"use strict";

import { modalContent } from "./modalContent.js";

const openBtn = document.querySelectorAll(".right__block");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal__text");
const closeBtn = document.querySelector(".close-button");
const modalTite = document.querySelector(".modal__title");

const modalContentObj = {
  0: modalContent.first.text,
  1: modalContent.second.text,
  2: modalContent.third.text,
  3: modalContent.fourth.text,
  4: modalContent.fifth.text,
};

const ModalTitleObj = {
  0: modalContent.first.title,
  1: modalContent.second.title,
  2: modalContent.third.title,
  3: modalContent.fourth.title,
  4: modalContent.fifth.title,
}

openBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modal.classList.add("modal__active");
    modalTite.innerHTML = ModalTitleObj[index];
    modalText.innerHTML = modalContentObj[index];
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("modal__active");
    modalText.innerHTML = "";
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modal__active");
  }
});

// не работает scrollOff
// нужно сделать перебор классов или что-то такое для оптимизации кода, тк у нас
// будет несколько модальных окон, дабы не пришлось тупо все дублировать
