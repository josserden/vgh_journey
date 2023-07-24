// main.js
const triangleButtons = document.querySelectorAll('.triangle_button button');

triangleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    button.classList.add('bg-red');

    triangleButtons.forEach((otherButton, otherIndex) => {
      if (index !== otherIndex) {
        otherButton.classList.remove('bg-red');
      }
    });

    const triangle = document.querySelector('.triangle');
    const buttonWidth = button.offsetWidth;
    const buttonLeft = button.getBoundingClientRect().left;
    const containerLeft = document.querySelector('.triangle_wrapper').getBoundingClientRect().left;
    const triangleLeft = buttonLeft - containerLeft + buttonWidth / 2 - triangle.offsetWidth / 2;
    triangle.style.left = `${triangleLeft}px`;
  });
});
