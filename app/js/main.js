document.addEventListener('DOMContentLoaded', (event) => {
  (function() {
    function appearDescriptionText() {
      const text = document.querySelectorAll('.services__description');
      text.forEach(item => {
        let textPosition = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if (textPosition < screenPosition / 1.5) {
          item.classList.add('description--appear');
        }
      });
    }

    function appearHeader() {
      const logo = document.querySelector('.logo');
      logo.classList.add('logo--appear');
      const menuLink = document.querySelectorAll('.menu__item');
      menuLink.forEach(item => {
        item.classList.add('item--appear');
      });
    }

    const BUTTONS = document.querySelectorAll(".work-division__button");
    BUTTONS.forEach(function (button) {
      button.addEventListener("click", function (event) {
        console.log(event.currentTarget.getAttribute("data-category"));
      });
    });

    appearHeader();
    window.addEventListener('scroll', appearDescriptionText);
  })();
});

