// script.js
document.getElementById('openModalBtn').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    modal.classList.remove('fadeOut');
    modal.classList.add('fadeIn');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    setTimeout(() => { modal.style.display = 'none'; }, 500); // Match the duration of fadeOut animation
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.classList.remove('fadeIn');
        modal.classList.add('fadeOut');
        setTimeout(() => { modal.style.display = 'none'; }, 500); // Match the duration of fadeOut animation
    }
});
