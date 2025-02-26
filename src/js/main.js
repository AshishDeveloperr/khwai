const toggleButton = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Clone the content for seamless looping
const container = document.querySelector('.marquee-container');
const content = container.innerHTML;
container.innerHTML = content + content;