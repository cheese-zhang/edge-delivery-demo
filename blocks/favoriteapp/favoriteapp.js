import { MyappTemplate } from './myappTemplate.js';

function buildElementWithClassName(eleName, className) {
  const element = document.createElement(eleName);
  if (className) element.className = className;
  return element;
}

export default function decorate(block) {
  block.dir = 'ltr';
  block.classList.add('myApps');
  const myAppsHeader = buildElementWithClassName('h2', 'myApps_header');
  myAppsHeader.textContent = 'My Favorite Applications';
  block.append(myAppsHeader);
  const swiperContainer = buildElementWithClassName('div', 'swiper-container');
  swiperContainer.classList.add('swiper');
  const swiperWrapper = buildElementWithClassName('div', 'swiper-wrapper');
  const swiperSlide = buildElementWithClassName('div', 'swiper-slide');
  const swiperSlideNext = buildElementWithClassName('div', 'swiper-slide');

  [...block.children].forEach((row) => {
    const textDiv = document.createElement('div');
    while (row.firstElementChild) {
      textDiv.append(row.firstElementChild);
    }
    [...textDiv.querySelectorAll('a')].forEach((item) => {
      swiperSlide.append(MyappTemplate(item.textContent, item.href));
      swiperSlideNext.append(MyappTemplate(item.textContent, item.href));
    });
  });
  swiperWrapper.append(swiperSlide);
  swiperWrapper.append(swiperSlideNext);
  swiperContainer.append(swiperWrapper);
  block.append(swiperContainer);
  block.append(buildElementWithClassName('div', 'myApps_paginationcontainer'));

  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.myApps_paginationcontainer',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  });
}
