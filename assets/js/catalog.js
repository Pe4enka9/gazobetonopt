const categories = [
    {
        id: 1,
        name: 'Ширина 250 мм'
    },
    {
        id: 2,
        name: 'Ширина 200 мм'
    },
    {
        id: 3,
        name: 'Ширина 300 мм'
    },
    {
        id: 4,
        name: 'Ширина 375 мм'
    },
];

const catalog = [
    {
        name: 'Газобетон СК (СтройКомплект) D400 100х250х625 мм прямой блок',
        number_of_pcs_m3: 64,
        quantity_per_pallet: 90,
        size: '100x250x625',
        brand: 'D400',
        price: 6800,
        category: 1,
        image: 'hits1.jpg'
    },
    {
        name: 'Газобетон СК (СтройКомплект) D400 100х250х625 мм прямой блок',
        number_of_pcs_m3: 64,
        quantity_per_pallet: 90,
        size: '100x250x625',
        brand: 'D400',
        price: 6800,
        category: 2,
        image: 'hits1.jpg'
    },
    {
        name: 'Газобетон СК (СтройКомплект) D400 100х250х625 мм прямой блок',
        number_of_pcs_m3: 64,
        quantity_per_pallet: 90,
        size: '100x250x625',
        brand: 'D400',
        price: 6800,
        category: 3,
        image: 'hits1.jpg'
    },
    {
        name: 'Газобетон ЛСР Сертолово D300 300х250х625 мм прямой блок',
        number_of_pcs_m3: 21.3,
        quantity_per_pallet: 30,
        size: '300x250x625',
        brand: 'D300',
        price: 7100,
        category: 4,
        image: 'hits1.jpg'
    }
];

catalog.forEach(function (product, id) {
    $('.main__catalog__card-container').append(`
                        <div class="catalog__card-container__card" data-category="${product.category}">
                        <a href="#" class="catalog__card-container__card__info">
                            <div class="catalog__card-container__card__image-container">
                                <img src="../assets/images/${product.image}"
                                     alt="Газобетон СК (СтройКомплект) D400 100х250х625 мм прямой блок">
                            </div>
                            <h6>${product.name}</h6>

                            <ul>
                                <li><strong>Количество шт/м3</strong>: ${product.number_of_pcs_m3}</li>
                                <li><strong>Кол-во в поддоне</strong>: ${product.quantity_per_pallet} шт</li>
                                <li><strong>Размеры</strong>: ${product.size} мм</li>
                                <li><strong>Марка</strong>: ${product.brand}</li>
                            </ul>

                            <div>${product.price}р. <span>/ 1 м³</span></div>
                        </a>

                        <div class="catalog__card-container__card__purchase">
                            <a href="#">Подробнее</a>

                            <div class="catalog__card-container__card__purchase_in-cart">
                                <div>
                                    <div>-</div>
                                    <div class="counter">1</div>
                                    <div>+</div>
                                </div>
                                <a href="#">Заказать</a>
                            </div>
                        </div>

                        <div class="catalog__card-container__card__image-container-favorite">
                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z"
                                      stroke="black" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>`);
});