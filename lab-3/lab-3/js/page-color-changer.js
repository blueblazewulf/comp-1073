// Waits until the page has fully loaded before running the JS
document.addEventListener('DOMContentLoaded', function () {
    // Gets slider elements
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const htmlElement = document.querySelector('html');

    // The function to update the background colour
    function updateBackgroundColor() {
        const red = parseInt(redSlider.value);
        const green = parseInt(greenSlider.value);
        const blue = parseInt(blueSlider.value);

        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        htmlElement.style.backgroundColor = rgbColor;
    }

