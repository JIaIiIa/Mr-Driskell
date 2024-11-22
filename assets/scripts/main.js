const input = document.querySelector('.header__form-input_search')
const inputImage = document.querySelector('.header__form-input_image')

input.addEventListener('input', function () {
  if (input.value) {
    inputImage.style.display = 'none'
  } else {
    inputImage.style.display = 'block'
  }
})


new Swiper('.main__swiper', {
  direction: 'vertical',
  spaceBetween: 100,
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper_navigation-bottom',
    prevEl: '.swiper_navigation-top'
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0, // Отключаем поворот слайдов
    stretch: 0, // Нет растяжения слайдов
    depth: 200, // Глубина перспективы (влияет на уменьшение размера)
    modifier: 1, // Сила модификатора эффекта
    slideShadows: false, // Отключаем тени слайдов
  },
})

new Swiper('.merch__catalog-image_swiper', {
  spaceBetween: 10,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

})

new Swiper('.brands__container-slider', {
  slidesPerView: 5,
  navigation: {
    prevEl: '.btn-brand_prev',
    nextEl: '.btn-brand_next'
  }
})


new Swiper('.reviews__slider-container', {
  slidesPerView: 2,
  spaceBetween: 20,
  initialSlide: 1,
  slideActiveClass: 'swiper-slide-active', // Класс для активного слайда
  slideNextClass: 'swiper-slide-next', // Класс для следующего слайда
  slidePrevClass: 'swiper-slide-prev', // Класс для предыдущего слайда
  speed: 500,
  navigation: {
    prevEl: '.reviews__button-prev',
    nextEl: '.reviews__button-next'

  },
  pagination: {
    el: '.reviews__pagination.swiper-pagination',
    clickable: true
  }
})

document.querySelectorAll('.merch__catalog-item').forEach(item => {
  item.addEventListener('mouseenter', function () {
    // Проверка, есть ли уже кнопка
    if (!item.querySelector('.main__content-link')) {
      // Вставляем HTML-код кнопки
      const buttonHTML = `
        <a class="main__content-link basket" href="#"><span class="triangle left"></span><span
        class="triangle left-left basket"></span>Добавить в корзину<span class="triangle right"></span><span
        class="triangle right-right basket"></span></a>
        `;
      item.insertAdjacentHTML('beforeend', buttonHTML);

      // Находим вставленную кнопку и добавляем обработчик события
      const button = item.querySelector('.main__content-link');
      button.addEventListener('click', () => {
        alert('Товар добавлен в корзину!');
      });
    }
    // Добавляем класс expanded
    item.classList.add('expanded');
  });

  item.addEventListener('mouseleave', function () {
    // Удаляем класс expanded
    item.classList.remove('expanded');

    // Удаляем кнопку при уходе мыши
    const button = item.querySelector('.main__content-link');
    if (button) {
      item.removeChild(button);
    }
  });
});



