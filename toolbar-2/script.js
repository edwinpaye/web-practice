window.addEventListener('scroll', function() {
    const toolbar = document.querySelector('.toolbar');
    const placeholder = document.querySelector('.placeholder');
    const placeholderRect = placeholder.getBoundingClientRect();

    if (placeholderRect.bottom <= 0) {
        toolbar.classList.add('show');
    } else {
        toolbar.classList.remove('show');
    }
});
