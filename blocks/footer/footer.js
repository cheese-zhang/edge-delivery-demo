import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

function buildElementWithClassName(eleName, className) {
  const element = document.createElement(eleName);
  if (className) element.className = className;
  return element;
}

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('section');
  footer.className = 'footer';
  const footer_inner = buildElementWithClassName('div', 'footer_inner ui-pagewidthlimit');
  const footer_inner_content = '<ul> <li><a href="#cookies" class="footer_link"><i class="fa fa-info-circle"></i><span>Cookies</span></a></li> <li><a href="#" class="footer_link"><i class="fa fa-lock"></i><span>Privacy</span></a></li> <li><a href="#" class="footer_link"><i class="fa fa-envelope"></i><span>Contact</span></a></li> </ul>';
  footer_inner.innerHTML = footer_inner_content;
  const footer_logos = buildElementWithClassName('div', 'footer_logos');
  const volvofinance = buildElementWithClassName('div', ' footer_logo volvofinance');
  const mackfinance = buildElementWithClassName('div', ' footer_logo mackfinance');

  // all picture gets
  // while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  const logos = [volvofinance,mackfinance];
  [...logos].forEach((logo,index) => {
    logo.style.backgroundImage = 'url(' + fragment.querySelectorAll('picture')[index].querySelector('img').src + ')';
    footer_logos.append(logo);
  });

  // footer_logos.append(volvofinance);
  // footer_logos.append(mackfinance);
  footer_inner.append(footer_logos);
  footer.append(footer_inner);
  block.append(footer);
}
