function buildElementWithClassName(eleName, className) {
  const element = document.createElement(eleName);
  if (className) element.className = className;
  return element;
}

export function MyappTemplate(shortname,link) {
  const myApps_paddingitem = buildElementWithClassName('div', 'myApps_paddingitem');
  const myApps_favourite = buildElementWithClassName('div', 'myApps_favourite');
  const myApps_link = buildElementWithClassName('a', 'myApps_link');

  const myApps_shortdiv = buildElementWithClassName('div', 'myApps_shortdiv');
  const myApps_shortname = buildElementWithClassName('span', 'myApps_shortname');
  myApps_shortdiv.append(myApps_shortname);
  const myApps_itemname = buildElementWithClassName('span', 'myApps_itemname');
  myApps_itemname.textContent = shortname;
  if (shortname ==='WFS') myApps_shortname.textContent = shortname;
  myApps_link.append(myApps_shortdiv);
  myApps_link.append(myApps_itemname);
  myApps_link.href=link
  myApps_favourite.append(myApps_link);
  myApps_paddingitem.append(myApps_favourite);

  return myApps_paddingitem;
}
