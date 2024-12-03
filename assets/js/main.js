const favorite = document.querySelector('.hits__card-container__card__image-container-favorite');
favorite.addEventListener('click', () => {
    const svg = favorite.children[0];

    if (!svg.classList.contains('favorite__click')) {
        svg.classList.add('favorite__click');
    } else {
        svg.classList.remove('favorite__click');
    }
});

const count = document.querySelector('.counter');
count.nextElementSibling.addEventListener('click', () => {
    let currentValue = parseInt(count.textContent);
    currentValue++;

    if (currentValue <= 1) {
        currentValue = 1;
    }

    count.textContent = currentValue.toString();
});

count.previousElementSibling.addEventListener('click', () => {
    let currentValue = parseInt(count.textContent);
    currentValue--;

    if (currentValue <= 1) {
        currentValue = 1;
    }

    count.textContent = currentValue.toString();
});

const sliderImages = [
    {
        src: 'https://preview.redd.it/1wizu260amk71.png?auto=webp&s=1873cb5c3ec8d6c9d530a9382e33d2124cd7b32e',
        alt: 'placeholder'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6uY6qHgziWE7WDGiGgLUedFJwOcEZUWVYw&s',
        alt: 'placeholder'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMafxbX3jO_Pd24pu1FSuFxe91osLoEkw3cg&s',
        alt: 'placeholder'
    }
];

const sliderContainer = document.querySelector('.main__slider-container');
const elems = document.querySelectorAll('.elem-container__elem');

function goToSlide(index) {
    sliderContainer.dataset.index = index;

    sliderContainer.style.backgroundImage = `url(${sliderImages[index - 1].src})`;

    elems.forEach((elem, idx) => {
        elem.style.backgroundColor = idx + 1 === index ? '#fff' : '#ccc';
    });
}

elems.forEach(elem => {
    elem.addEventListener('click', () => {
        const slideIndex = +elem.dataset.slide;
        goToSlide(slideIndex);
    });
});

function next() {
    let indexImages = sliderContainer.dataset.index;

    if (+indexImages < sliderImages.length) {
        indexImages++;
    } else {
        indexImages = 1;
    }

    goToSlide(indexImages);
}

function autoSlider() {
    setInterval(next, 3000);
}

autoSlider();