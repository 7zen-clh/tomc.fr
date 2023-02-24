var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var contentElement = document.querySelector('.content');

if (screenWidth < 700 || screenHeight < 700) {
    contentElement.style.display = 'none';
}