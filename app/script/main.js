"use strict";

document.addEventListener('DOMContentLoaded', function (event) {
  (function () {
    function appearDescriptionText() {
      var text = document.querySelectorAll('.services__description');
      text.forEach(function (item) {
        var textPosition = item.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;

        if (textPosition < screenPosition / 1.5) {
          item.classList.add('description--appear');
        }
      });
    }

    function appearHeader() {
      var logo = document.querySelector('.logo');
      logo.classList.add('logo--appear');
      var menuLink = document.querySelectorAll('.menu__item');
      menuLink.forEach(function (item) {
        item.classList.add('item--appear');
      });
    }

    var BUTTONS = document.querySelectorAll(".work-division__button");
    BUTTONS.forEach(function (button) {
      button.addEventListener("click", function (event) {
        console.log(event.currentTarget.getAttribute("data-category"));
      });
    });
    appearHeader();
    window.addEventListener('scroll', appearDescriptionText);
  })();
});