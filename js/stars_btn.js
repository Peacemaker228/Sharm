"use strict"

const learnMore = document.querySelectorAll(".detail__button");
const containerText = document.querySelectorAll(".content__text span");

learnMore.forEach((el, index) => {
    el.addEventListener("click", () => {
        containerText[index].classList.toggle("text__active")
    })
})