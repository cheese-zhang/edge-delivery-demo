function buildElementWithClassName(eleName, className) {
  const element = document.createElement(eleName);
  if (className) element.className = className;
  return element;
}

export default function item(title, src) {
  const element = buildElementWithClassName('li','siteLinkArea_newsitem');
  const  a = buildElementWithClassName('a',null);
  a.href = src;
  const siteLinkArea_descwrapper = buildElementWithClassName('div', 'siteLinkArea_descwrapper');
  const h3 = buildElementWithClassName('h3',null);
  h3.textContent = title;
  siteLinkArea_descwrapper.append(h3);
  siteLinkArea_descwrapper.append(buildElementWithClassName('p',null));
  a.append(siteLinkArea_descwrapper);
  element.append(a);

  return element;

}
