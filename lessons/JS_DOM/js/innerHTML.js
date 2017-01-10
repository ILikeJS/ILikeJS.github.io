// Вставка строки

(function() {
  var text;

  // test connecting to obj
  //  console.log(page);
  //  console.log("div0 > li4 =  ", page.article.div0.li4);

   // create string html
   text = '<header class="header"><h2>'
   + page.header
   + '</h2></header>'
   + '<article class="article"><div class="wrap-list"><p class="headline-list">'
   + page.article.div0.paragraph
   + '</p><ul class="list"><li>'
   + page.article.div0.li0
   + '</li><li>'
   + page.article.div0.li1
   + '</li><li>'
   + page.article.div0.li2
   + '</li><li>'
   + page.article.div0.li3
   + '</li><li>'
   + page.article.div0.li4
   + '</li></ul></div>'
   + '<div class="wrap-list"><p class="headline-list">'
   + page.article.div1.paragraph
   + '</p><ul class="list"><li>'
   + page.article.div1.li0
   + '</li><li>'
   + page.article.div1.li1
   + '</li><li>'
   + page.article.div1.li2
   + '</li><li>'
   + page.article.div1.li3
   + '</li><li>'
   + page.article.div1.li4
   + '</li></ul></div>'
   + '<div class="wrap-list"><p class="headline-list">'
   + page.article.div2.paragraph
   + '</p><ul class="list"><li>'
   + page.article.div2.li0
   + '</li><li>'
   + page.article.div2.li1
   + '</li><li>'
   + page.article.div2.li2
   + '</li><li>'
   + page.article.div2.li3
   + '</li><li>'
   + page.article.div2.li4
   + '</li></ul></div></article>'
   + '<footer class="footer"><h2>'
   + page.footer
   + '</h2></footer>'
   ;
   console.log("headeer", text );


   //  add innerHTML and appendChild
  var elem = document.createElement('div');
  elem.className = 'wrapper';
  elem.innerHTML = text;
  document.body.appendChild(elem);

})();
