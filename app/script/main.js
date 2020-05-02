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

    appearHeader();
    window.addEventListener('scroll', appearDescriptionText);
  })();
});