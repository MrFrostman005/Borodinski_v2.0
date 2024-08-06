document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.advantages__list');
    const slides = document.querySelectorAll('.slider__item');
    const toggles = document.querySelectorAll('.slider__toggle');
    let currentIndex = 1;

    const updateSlider = () => {
        const offset = currentIndex * 100;
        sliderWrapper.style.transform = `translateX(-${offset}%)`;
        toggles.forEach((toggle, index) => {
            toggle.classList.toggle('active', index === currentIndex);
        });
    };

    toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.rewiews__list');
    const slides = document.querySelectorAll('.slider__item');
    const toggles = document.querySelectorAll('.slider2__toggle');
    let currentIndex = 0;

    const updateSlider = () => {
        const offset = currentIndex * 100;
        sliderWrapper.style.transform = `translateX(-${offset}%)`;
        toggles.forEach((toggle, index) => {
            toggle.classList.toggle('active', index === currentIndex);
        });
    };

    toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();
});