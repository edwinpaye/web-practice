// script.js
let currentIndex = 0;

function moveNext() {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
    updateCarousel();
}

function movePrev() {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].classList.add('active');
    updateCarousel();
}

function updateCarousel() {
    const inner = document.querySelector('.carousel-inner');
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
