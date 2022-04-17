export function topnav(site) {

 let nav = document.getElementById('topnav');

 let brand = document.createElement('div');
 brand.setAttribute('class', 'brand');
 brand.innerHTML = '<img class="logo" src="'+site.logo+'"/>';

 let siteTitle = document.createElement('div');
 siteTitle.setAttribute('class', 'site-title');
 siteTitle.textContent = site.name;

 let navIcons = document.createElement('div');
 navIcons.setAttribute('class', 'navbar-icons');
 navIcons.innerHTML = '<div id="menubtn"><svg xmlns="http://www.w3.org/2000/svg" id="menuo" class="hidelg" width="2.4rem" height="2.4rem" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <line x1="4" y1="6" x2="20" y2="6" /> <line x1="4" y1="12" x2="20" y2="12" /> <line x1="4" y1="18" x2="20" y2="18" /></svg> <!--close button--><svg xmlns="http://www.w3.org/2000/svg" id="menux" class="hidelg hidesm" width="2.4rem" height="2.4rem" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="18" y1="6" x2="6" y2="18"/> <line x1="6" y1="6" x2="18" y2="18"/></svg></div>';

 nav.appendChild(brand);
 nav.appendChild(siteTitle);
 nav.appendChild(navIcons);

}

export function mainMenu(menu) {
 let menubtn = document.getElementById('menubtn');
 menubtn.addEventListener('click', tgMenu);
 function tgMenu() {
  document.getElementById('menuo').classList.toggle('hidesm');
  document.getElementById('menux').classList.toggle('hidesm');
  document.getElementById('sidebar').classList.toggle('hidesm');
  document.getElementById('menu').classList.toggle('mobile-menu');
 } //tgNenu()

}

export function menuItems(menu) {
 const menuIt = document.getElementById('menu');
 menuIt.setAttribute('class', 'bg bs')
 const mcont = document.createElement('div');
 mcont.setAttribute('id', 'mcont');

 menu.forEach((mis) => {
  mcont.innerHTML += '<a class="pad menu-link" href="'+mis[1]+'">'+mis[0]+'</a>';
 }); //items loop

 menuIt.appendChild(mcont);
} //menuItems()