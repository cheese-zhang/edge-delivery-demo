function buildElementWithClassName(eleName, className) {
  const element = document.createElement(eleName);
  if (className) element.className = className;
  return element;
}

function headerContainerFun(title, location) {
  const headerContainer = document.createElement('div');
  headerContainer.className = 'siteHead_headercontainer';

  const h1 = document.createElement('h1');
  const a = document.createElement('a');
  a.className = 'header-headline';
  a.textContent = title;
  h1.append(a);

  const span = document.createElement('span');
  span.className = 'siteHead_location';
  span.textContent = location;

  headerContainer.append(h1);
  headerContainer.append(span);
  return headerContainer;
}

function siteHeadLinklistFun() {
  const siteHeadLinklist = document.createElement('div');
  siteHeadLinklist.className = 'siteHead_linklist';
  const siteHeadUserprofilebuttoncontainer = document.createElement('div');
  siteHeadUserprofilebuttoncontainer.className = 'siteHead_userprofilebuttoncontainer';

  const siteHeadUserprofilelink = buildElementWithClassName('div', 'siteHead_userprofilelink');
  const editProfileIcon = buildElementWithClassName('i', 'editProfile fa fa-user');
  const userName = buildElementWithClassName('p', null);
  userName.textContent = 'username';
  siteHeadUserprofilelink.append(editProfileIcon);
  siteHeadUserprofilelink.append(userName);
  siteHeadUserprofilebuttoncontainer.append(siteHeadUserprofilelink);

  const siteHeadLogoutlink = buildElementWithClassName('a', 'siteHead_logoutlink');
  const logouticon = buildElementWithClassName('i', 'fa fa-sign-out');
  siteHeadLogoutlink.append(logouticon);

  siteHeadUserprofilebuttoncontainer.append(siteHeadLogoutlink);
  siteHeadLinklist.append(siteHeadUserprofilebuttoncontainer);
  return siteHeadLinklist;
}

function siteHeadFixbarFun() {
  const siteHeadFixbar = buildElementWithClassName('div', 'siteHead_fixbar');
  const siteHeadFixbarlist = buildElementWithClassName('div', 'siteHead_fixbarlist');

  const siteHeadSupportlink = buildElementWithClassName('div', 'siteHead_supportlink');
  const siteHeadFixbarlistitem = buildElementWithClassName('div', 'siteHead_fixbarlistitem support');
  siteHeadFixbarlistitem.append(buildElementWithClassName('i', 'fa fa-question-circle supportInfo'));
  siteHeadFixbarlistitem.append(' Support ');
  siteHeadSupportlink.append(siteHeadFixbarlistitem);
  siteHeadFixbarlist.append(siteHeadSupportlink);

  const siteHeadFixbarlistitemSearch = buildElementWithClassName('div', 'siteHead_fixbarlistitem search');
  const siteHeadSearchlink = buildElementWithClassName('a', 'siteHead_searchlink');
  siteHeadSearchlink.append(buildElementWithClassName('i', 'fa fa-search'));
  siteHeadFixbarlistitemSearch.append(siteHeadSearchlink);
  siteHeadFixbarlist.append(siteHeadFixbarlistitemSearch);

  siteHeadFixbar.append(siteHeadFixbarlist);
  return siteHeadFixbar;
}

export default function decorate(block) {
  // const reactRoot = block;
  const siteHeadDiv = document.createElement('div');
  siteHeadDiv.className = 'siteHead';
  const siteInnerDiv = document.createElement('div');
  siteInnerDiv.className = 'siteHead_inner ui-pagewidthlimit';
  let title;
  let location;
  let backGroudPic;
  [...block.children].forEach((row) => {
    const textDiv = document.createElement('div');
    while (row.firstElementChild) {
      textDiv.append(row.firstElementChild);
    }

    title = textDiv.children[0].textContent;
    location = textDiv.children[1].textContent;
    // eslint-disable-next-line prefer-destructuring
    siteHeadDiv.style.backgroundImage = 'url(' + textDiv.children[2].querySelector('picture > img').src + ')';
  });
  block.textContent = '';
  siteInnerDiv.append(siteHeadLinklistFun());
  siteInnerDiv.append(siteHeadFixbarFun());
  siteInnerDiv.append(headerContainerFun(title, location));
  siteHeadDiv.append(siteInnerDiv);
  block.append(siteHeadDiv);
}

export async function loadSiteHeader(block) {
  const siteHeader = block.querySelector('siteheader');
  block.replaceChild(decorate(siteHeader), siteHeader);
}
