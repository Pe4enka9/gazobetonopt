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