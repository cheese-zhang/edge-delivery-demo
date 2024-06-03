import item from './item.js';

function buildElementWithClassName(eleName, className) {
  const element = document.createElement(eleName);
  if (className) element.className = className;
  return element;
}

export default function decorate(block) {
  block.classList.add('siteLinkArea');
  const siteLinkArea = buildElementWithClassName('div', 'siteLinkArea');
  siteLinkArea.dir = 'ltr';
  const siteLinkArea_inner = buildElementWithClassName('div', 'siteLinkArea_inner ui-pagewidthlimit');
  //news link
  const siteLinkArea_newslinks = buildElementWithClassName('compose', 'siteLinkArea_newslinks');
  const linksText = buildElementWithClassName('h2', null);
  linksText.textContent = 'LINKS';
  siteLinkArea_newslinks.append(linksText);

  const ul = buildElementWithClassName('ul', null);
  [...block.children[0].querySelectorAll('div > ul > li')].forEach(element => {
    if (element.textContent.indexOf('LINKS') > -1) {
        element.querySelectorAll('li').forEach(itemA => {
        ul.append(item(itemA.querySelector('a').textContent,itemA.querySelector('a').src));
      });
    }
    else if (element.textContent.indexOf('BRAND') > -1) {
      console.log("BRAND");
    }
  });
  siteLinkArea_newslinks.append(ul);
  //pressinfo
  const siteLinkArea_pressinfo = buildElementWithClassName('compose', 'siteLinkArea_pressinfo');

  siteLinkArea_inner.append(siteLinkArea_newslinks);
  siteLinkArea_inner.append(siteLinkArea_pressinfo);
  block.textContent = '';
  block.append(siteLinkArea_inner);

}
