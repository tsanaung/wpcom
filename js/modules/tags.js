export default function articles(wpUrl) {
 let url = 'https://public-api.wordpress.com/rest/v1.1/sites/'+wpUrl+'/posts/';

 fetch(url)
 .then(r => r.json())
 .then((res) => {

  let articles = res.posts;
  articles.forEach((article) => {

   let tagsD = article.tags;
   tagsD = JSON.stringify(tagsD);
   tagsD = tagsD.replaceAll('"name":"', '<a id="tag" href="tag.html?name=').replaceAll(',"slug":"', '>').replaceAll('","description":', '</a>');

   let tempE = document.createElement('div');
   tempE.innerHTML += tagsD;
   let tagsE = tempE.getElementsByTagName('a');

   let tags = [];

   for (var i = 0, max = tagsE.length; i < max; i++) {
    let tagname = tagsE[i].text;
    //let tagname = tagsE[i].href;
    if (tags.indexOf(tagname) == -1) {
     tags.push(tagname);
    }

   }
   console.log(tags);
   //console.log (tagsE)


   /*
   tagsD = tagsD.replaceAll('"', '').replaceAll('{', '').replaceAll('}', '').replaceAll('<a href=', '').replaceAll('</a>', '').replaceAll(':ID:', '<a href="tag.html?id=').replaceAll(',name:','">').replaceAll(',slug:','</a>');
   */

   console.log(tagsD+'\n\n')
   // console.log(article.title);
   //let tagsR = JSON.stringify(article.tags);

   /*
   let tagsR = [article.tags];
   let tagsJ = tagsR[0];
   let tagsS = [];
   for (let i in tagsJ)
    tagsS.push([i, tagsS [i]]);
   let tagsP = tagsS.toString();
   tagsP = tagsP.replaceAll(',,', ',').replaceAll(',', ' ');
   tagsP = tagsP.split(' ');
   console.log (tagsJ);
   */

  }) //articles.forEach((article)=>{})

 }) //.then((res)=>{})

} //default articles()
