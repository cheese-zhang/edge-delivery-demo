import { createOptimizedPicture } from '../../scripts/aem.js';

function buildElementWithClassName(eleName, className) {
  const element = document.createElement(eleName);
  if (className) element.className = className;
  return element;
}

export default function decorate(block) {

  const pictures = block.querySelectorAll('picture');
  // clear block content
  // block.textContent = '';
  // const divLimit = document.createElement('div');
  block.classList.add('ui-pagewidthlimit');
  block.textContent = '';
  const swiperContainer = buildElementWithClassName('div', 'swiper-container');
  swiperContainer.classList.add('swiper')
  const swiperWrapper = buildElementWithClassName('div', 'swiper-wrapper');
  [...pictures].forEach((img) => {
    const swiperSlide = buildElementWithClassName('div', 'swiper-slide');
    swiperSlide.append(img);
    swiperWrapper.append(swiperSlide);
  });
  swiperWrapper.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  swiperContainer.append(swiperWrapper);
  block.append(swiperContainer);
  block.append(buildElementWithClassName('div','hero-pagination'));


}
