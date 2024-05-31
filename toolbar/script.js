const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// const menuCheckbox = document.getElementById('menuCheckbox');
// const overlay = document.getElementById('overlay');
// const btn = document.getElementsByClassName('btn');

// const closeMenu = () => {
//     menuCheckbox.checked = false;
// };

// overlay.addEventListener('click', closeMenu);

// for (var i=0; i < btn.length; i++) {
//     btn[i].onclick = closeMenu
// };
