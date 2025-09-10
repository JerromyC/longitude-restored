document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const allImages = Array.from(track.querySelectorAll('.carousel-image'));

    let isDesktop = window.innerWidth >= 768;
    let visibleCount = isDesktop ? 3 : 1; // number of images visible at once
    let startIndex = 0;

    function renderCarousel() {
        track.innerHTML = ''; // clear track
        for (let i = 0; i < visibleCount; i++) {
            const idx = (startIndex + i) % allImages.length; // loop around
            track.appendChild(allImages[idx].cloneNode(true));
        }
    }

    renderCarousel();

    next.addEventListener('click', () => {
        startIndex = (startIndex + 1) % allImages.length;
        renderCarousel();
    });

    prev.addEventListener('click', () => {
        startIndex = (startIndex - 1 + allImages.length) % allImages.length;
        renderCarousel();
    });

    window.addEventListener('resize', () => {
        isDesktop = window.innerWidth >= 768;
        visibleCount = isDesktop ? 3 : 1;
        renderCarousel();
    });
});
