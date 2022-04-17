const cPath = window.location.pathname;
const cPage = cPath.split("/").pop();
// console.log(cPage);
import {
 data
} from './config.js';

// Nav and menu
import {
 topnav,
 mainMenu,
 menuItems
} from './modules/menu.js';

import {
 widget
}from './modules/widgets.js';

import {
 home
}from'./modules/home.js';

import {
 discover
}from'./modules/discover.js';

const site = data.site;
const menu = data.menu;
const widgets = data.widgets;

// nav and menu
topnav(site); mainMenu(menu); menuItems(menu);

// widgets
widget(widgets);

let {
 default: articles
 } = await import('./modules/articles.js');
 let wpUrl = site.wp;

 let {
 default: article
 } = await import('./modules/article.js');
 // let qString = window.location.search;
 // articles(wpUrl);

 switch (cPage) {

 case 'blog.html': articles(wpUrl);
  break;

 case 'article.html': article(wpUrl);
  break;

 case 'discover.html': discover();
  break;

 case 'index.html': home();
  break;

 default:
  document.querySelector('#article').innerHTML = '<h3>Under Development</h3><p>Sorry! This feature is not ready for the current version yet, it\'s under development. The next update will bring more useful features. Thanks.';
 }
 // articles(wpUrl);