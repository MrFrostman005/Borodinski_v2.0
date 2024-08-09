document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.advantages__list');
    const slides = document.querySelectorAll('.slider__item');
    const toggles = document.querySelectorAll('.slider__toggle');
    let currentIndex = 1;
    let initialized = false;

    const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

    const updateSlider = () => {
        const offset = currentIndex * 100;
        sliderWrapper.style.transform = `translateX(-${offset}%)`;
        toggles.forEach((toggle, index) => {
            toggle.classList.toggle('active', index === currentIndex);
        });
    };

    const initializeSlider = () => {
        if (isMobile()) {
            if (!initialized) {
                toggles.forEach((toggle, index) => {
                    toggle.addEventListener('click', () => {
                        currentIndex = index;
                        updateSlider();
                    });
                });
                updateSlider();
                initialized = true;
            }
        } else {
            resetSlider();
        }
    };

    const resetSlider = () => {
        sliderWrapper.style.transform = '';
        toggles.forEach((toggle) => {
            toggle.classList.remove('active');
        });
        currentIndex = 0;
        initialized = false;
    };

    initializeSlider();

    window.addEventListener('resize', () => {
        initializeSlider();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.rewiews__list');
    const slides = document.querySelectorAll('.slider2__item');
    const prevButton = document.querySelector('.rewiews__prev');
    const nextButton = document.querySelector('.rewiews__next');
    const toggles = document.querySelectorAll('.slider2__toggle');
    
    let currentIndex = 0;

    const updateSlider = () => {
        const offset = currentIndex * 100;
        sliderWrapper.style.transform = `translateX(-${offset}%)`;
        toggles.forEach((toggle, index) => {
            toggle.classList.toggle('active', index === currentIndex);
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();
});