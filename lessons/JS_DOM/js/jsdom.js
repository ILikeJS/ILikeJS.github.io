(function() {

  var doc = document.body;

  var wrp = document.createElement("div");

  var hdr = document.createElement("header");
  var h1h = document.createElement("h1");

  var ftr = document.createElement("footer");
  var h1f = document.createElement("h1");

  var art = document.createElement("article");
  var aDiv0 = document.createElement("div");
  var aDiv1 = document.createElement("div");
  var aDiv2 = document.createElement("div");
  var p0 = document.createElement("p");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var list0 = document.createElement("ul");
  var list1 = document.createElement("ul");
  var list2 = document.createElement("ul");
  var item0x0 = document.createElement("li");
  var item0x1 = document.createElement("li");
  var item0x2 = document.createElement("li");
  var item0x3 = document.createElement("li");
  var item0x4 = document.createElement("li");
  var item1x0 = document.createElement("li");
  var item1x1 = document.createElement("li");
  var item1x2 = document.createElement("li");
  var item1x3 = document.createElement("li");
  var item1x4 = document.createElement("li");
  var item2x0 = document.createElement("li");
  var item2x1 = document.createElement("li");
  var item2x2 = document.createElement("li");
  var item2x3 = document.createElement("li");
  var item2x4 = document.createElement("li");

  var h1hText = document.createTextNode(page.header);
  var h1fText = document.createTextNode(page.footer);
  var p0text = document.createTextNode(page.article.div0.paragraph);
  var p1text = document.createTextNode(page.article.div1.paragraph);
  var p2text = document.createTextNode(page.article.div2.paragraph);

  var item0x0Text = document.createTextNode(page.article.div0.li0);
  var item0x1Text = document.createTextNode(page.article.div0.li1);
  var item0x2Text = document.createTextNode(page.article.div0.li2);
  var item0x3Text = document.createTextNode(page.article.div0.li3);
  var item0x4Text = document.createTextNode(page.article.div0.li4);

  var item1x0Text = document.createTextNode(page.article.div1.li0);
  var item1x1Text = document.createTextNode(page.article.div1.li1);
  var item1x2Text = document.createTextNode(page.article.div1.li2);
  var item1x3Text = document.createTextNode(page.article.div1.li3);
  var item1x4Text = document.createTextNode(page.article.div1.li4);

  var item2x0Text = document.createTextNode(page.article.div2.li0);
  var item2x1Text = document.createTextNode(page.article.div2.li1);
  var item2x2Text = document.createTextNode(page.article.div2.li2);
  var item2x3Text = document.createTextNode(page.article.div2.li3);
  var item2x4Text = document.createTextNode(page.article.div2.li4);

  wrp.setAttribute("class", "wrapper");
  hdr.setAttribute("class", "header");
  ftr.setAttribute("class", "footer");
  art.setAttribute("class", "article");
  aDiv0.setAttribute("class", "wrap-list");
  aDiv1.setAttribute("class", "wrap-list");
  aDiv2.setAttribute("class", "wrap-list");
  p0.setAttribute("class", "headline-list");
  p1.setAttribute("class", "headline-list");
  p2.setAttribute("class", "headline-list");
  list0.setAttribute("class", "list");
  list1.setAttribute("class", "list");
  list2.setAttribute("class", "list");



  p0.appendChild(p0text);
  p1.appendChild(p1text);
  p2.appendChild(p2text);

  item0x0.appendChild(item0x0Text);
  item0x1.appendChild(item0x1Text);
  item0x2.appendChild(item0x2Text);
  item0x3.appendChild(item0x3Text);
  item0x4.appendChild(item0x4Text);
  list0.appendChild(item0x0);
  list0.appendChild(item0x1);
  list0.appendChild(item0x2);
  list0.appendChild(item0x3);
  list0.appendChild(item0x4);

  item1x0.appendChild(item1x0Text);
  item1x1.appendChild(item1x1Text);
  item1x2.appendChild(item1x2Text);
  item1x3.appendChild(item1x3Text);
  item1x4.appendChild(item1x4Text);
  list1.appendChild(item1x0);
  list1.appendChild(item1x1);
  list1.appendChild(item1x2);
  list1.appendChild(item1x3);
  list1.appendChild(item1x4);

  item2x0.appendChild(item2x0Text);
  item2x1.appendChild(item2x1Text);
  item2x2.appendChild(item2x2Text);
  item2x3.appendChild(item2x3Text);
  item2x4.appendChild(item2x4Text);
  list2.appendChild(item2x0);
  list2.appendChild(item2x1);
  list2.appendChild(item2x2);
  list2.appendChild(item2x3);
  list2.appendChild(item2x4);

  aDiv0.appendChild(p0);
  aDiv0.appendChild(list0);
  aDiv1.appendChild(p1);
  aDiv1.appendChild(list1);
  aDiv2.appendChild(p2);
  aDiv2.appendChild(list2);
  art.appendChild(aDiv0);
  art.appendChild(aDiv1);
  art.appendChild(aDiv2);
  h1h.appendChild(h1hText);
  h1f.appendChild(h1fText);
  hdr.appendChild(h1h);
  ftr.appendChild(h1f);
  wrp.appendChild(hdr);
  wrp.appendChild(art);
  wrp.appendChild(ftr);

  // add to DOM
  doc.appendChild(wrp);

})();
