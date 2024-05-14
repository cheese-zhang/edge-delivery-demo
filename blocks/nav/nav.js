function buildElementWithClassName(eleName, className) {
  const element = document.createElement(eleName);
  if (className) element.className = className;
  return element;
}

export default function decorate(block) {
  // const reactRoot = block;
  const nav = buildElementWithClassName('nav', 'siteNav');
  [...block.children].forEach((row) => {
    const textList = document.createElement('div');
    while (row.firstElementChild) {
      textList.append(row.firstElementChild);
    }
    const ul = buildElementWithClassName('ul', 'ui-pagewidthlimit');
    [...textList.children].forEach((item) => {
      const li = buildElementWithClassName('li', 'siteNav_link');
      const a = buildElementWithClassName('a', 'menuDisplaySwitch');
      a.append(item.textContent);
      a.href=item.href;
      li.append(a);
      ul.append(li);
    });
    nav.append(ul);
  });
  block.textContent = '';
  block.append(nav);
}
