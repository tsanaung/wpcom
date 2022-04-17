export default function articles(wpUrl) {

 let url = 'https://public-api.wordpress.com/rest/v1.1/sites/'+wpUrl+'/posts/';

 fetch(url)
 .then(r => r.json())
 .then((res) => {

  let articles = res.posts;

  articles.forEach((article) => {

   // START article
   let art = document.createElement('article');
   art.setAttribute('id', article.ID);
   art.setAttribute('class', 'bs bg article')
   
   let arts = document.getElementById('articles');
   arts.appendChild(art);

   // Titles
   let title = document.createElement('h3');
   title.innerHTML = '<a href="article.html?id='+article.ID+'">'+article.title+'</a>';

   // Dates
   let pdate = new Date(article.date).toDateString('en-US');
   let ptime = new Date(article.date).toLocaleTimeString('en-US');
   let mdate = new Date(article.modified).toDateString('en-US');
   let mtime = new Date(article.modified).toLocaleTimeString('en-US');
   

   let dates = document.createElement('div');
   dates.setAttribute('class', 'dates');
   dates.innerHTML = '<small>Published: '+pdate+' ('+ptime+') | Modified: '+mdate+' ('+mtime+')</small>';

   // Featured Images
   let fimg = document.createElement('a');
   let artsrc = 'article.html?id='+article.ID;
   fimg.setAttribute('href', artsrc)
   fimg.innerHTML = '<img src="'+article.featured_image+'"/>';

   // Excerpt
   let excerpt = document.createElement('a');
   excerpt.setAttribute('href', artsrc);
   excerpt.innerHTML = article.excerpt;

   // HANDLING TAGS
   let rt = article.tags;
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

   // HANDLING TAGS

   let tags = document.createElement('div');
   tags.setAttribute('id', 'tags');
   tags.setAttribute('class', 'tags')
   tags.innerHTML = tsanTags;


   // Append Elements
   art.appendChild(title);
   art.appendChild(dates);
   art.appendChild(excerpt);
   art.appendChild(tags);
   art.appendChild(fimg);

  }) //article.forEach

 }) //fetch>then>res

} //default export function