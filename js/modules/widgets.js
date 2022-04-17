export function widget(widgets) {
 let incboo = widgets[0].incboo;
 let hbs = widgets[1];

 let aside = document.getElementById('aside');
 aside.setAttribute('class', 'bg bs pad');

 let hblks = document.createElement('div');

 hbs.forEach((hb) => {
  hblks.innerHTML += '<h3 class="card bs bg">'+hb[0]+'</h3><div class="card bs">'+hb[1]+'</div>';
 })

 let copyrt = widgets[2].copyright;
 let copyrc = document.createElement('div');
 copyrc.setAttribute('id', 'copyright');
 copyrc.innerHTML = '<p class="card">&copy;'+ copyrt.yearSince+'~'+new Date().getFullYear() + ' | ' + copyrt.name + ' | ' + copyrt.additional + '</p>';

 aside.appendChild(hblks);
 aside.appendChild(copyrc);

}