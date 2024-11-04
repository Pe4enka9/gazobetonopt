const favorite = document.querySelector('.hits__card-container__card__image-container-favorite');
favorite.addEventListener('click', () => {
    const svg = favorite.children[0];

    if (!svg.classList.contains('favorite__click')) {
        svg.classList.add('favorite__click');
    } else {
        svg.classList.remove('favorite__click');
    }
});

