export default function article (wpUrl) {

 const qString = window.location.search;
 const params = new URLSearchParams (qString);
 const id = params.get('id');
 let article = document.getElementById('article');
 article.setAttribute('class', 'bs bg article');

 if (id) {
  const url = 'https://public-api.wordpress.com/rest/v1.1/sites/'+wpUrl+'/posts/'+id;

  fetch(url)
  .then(r => r.json())
  .then((a) => {

   let title = document.createElement('h3')
   title.innerHTML = a.title;

   let fimg = document.createElement('img');
   fimg.setAttribute('src', a.featured_image);
   
   // Dates
   let pdate = new Date(a.date).toDateString('en-US');
   let ptime = new Date(a.date).toLocaleTimeString('en-US');
   let mdate = new Date(a.modified).toDateString('en-US');
   let mtime = new Date(a.modified).toLocaleTimeString('en-US');
   let dates = document.createElement('div');
   dates.setAttribute('class', 'dates');
   dates.innerHTML = '<small>Published: '+pdate+' ('+ptime+') | Modified: '+mdate+' ('+mtime+')</small>';
   
   let content = document.createElement('div');
   content.innerHTML=a.content;
   
   // HANDLING TAGS
   let rt = a.tags;
   rt = JSON.stringify(rt);
   rt = rt.replaceAll('"slug":"', '<tsan>').replaceAll('","description":', '</tsan>');

   let temprt = document.createElement('aung');
   temprt.innerHTML += rt;

   let tsan = temprt.getElementsByTagName('tsan');
   let tsanTags = [];

   for (let i = 0, max = tsan.length; i < max; i++) {
    let tsanaung = '<a href="discover.html?name='+tsan[i].innerText+'&method=by_tag"> #'+tsan[i].outerText+'</a>';
    if (tsanTags.indexOf(tsanaung) == -1) {
     tsanTags.push(tsanaung);
    }
   }

   let tags = document.createElement('div');
   tags.setAttribute('id', 'tags');
   tags.setAttribute('class', 'tags')
   tags.innerHTML = tsanTags;


   article.appendChild(title);
   article.appendChild(fimg);
   article.appendChild(dates);
   article.appendChild(content);
   article.appendChild(tags);

  })//fetch article

 } else {
  const noArt = document.createElement('div');
  noArt.setAttribute('class', 'card bs4 bg pad tags');
  noArt.innerHTML = '<h1>Your request does not contain sufficient query information</h1><p>Go back <a href="index.html">Home</a> or view our latest <a href="blog.html">Articles (Blog</a> posts) or <a href="discover.html">Discover</a> anything what you want to see. Thanks you for visiting to our website.';
  article.appendChild(noArt);
 } //ID condition

} //default function article