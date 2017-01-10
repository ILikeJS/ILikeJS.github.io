function addObj(obj) {
    var headTxt = obj.header,
        footTxt = obj.footer,
        pDiv0 = obj.article.div0.paragraph,
        pDiv1 = obj.article.div1.paragraph;
        pDiv2 = obj.article.div2.paragraph;
        var arr0 = [obj.article.div0.li0, obj.article.div0.li1,
            obj.article.div0.li2, obj.article.div0.li3, obj.article.div0.li4];
        var arr1 = [obj.article.div1.li0, obj.article.div1.li1,
            obj.article.div1.li2, obj.article.div1.li3, obj.article.div1.li4];
        var arr2 = [obj.article.div2.li0, obj.article.div2.li1,
            obj.article.div2.li2, obj.article.div2.li3, obj.article.div2.li4];

    function generateNodes() {

        function addTextNode(el, text) {
            var elem = document.createElement(el);
            var newtext = document.createTextNode(text);
            elem.appendChild(newtext);
            return elem;
        }

        function addClass(el, name) {
          var elem = document.createElement(el);
          elem.setAttribute("class", name);
          return elem;
        }

        function addTextNodeClass(el, name, text) {
            var elem = document.createElement(el);
            elem.setAttribute("class", name);
            var newtext = document.createTextNode(text);
            elem.appendChild(newtext);
            return elem;
        }

        function addLi(arr, el) {
          for (var i = 0; leng = arr.length, i < leng; i++) {
            el.appendChild(addTextNode("li", arr[i]));
          }
          return this;
        }

        var wrp   = addClass("div", "wrapper");
        var hdr   = addClass("header", "header");
        var ftr   = addClass("footer", "footer");
        var art   = addClass("article", "article");
        var aDiv0 = addClass("div", "wrap-list");
        var aDiv1 = addClass("div", "wrap-list");
        var aDiv2 = addClass("div", "wrap-list");
        var list0 = addClass("ul", "list");
        var list1 = addClass("ul", "list");
        var list2 = addClass("ul", "list");

        addLi(arr0, list0);
        addLi(arr1, list1);
        addLi(arr2, list2);

        aDiv0.appendChild(addTextNodeClass("p", "headline-list", pDiv0));
        aDiv0.appendChild(list0);
        aDiv1.appendChild(addTextNodeClass("p", "headline-list", pDiv1));
        aDiv1.appendChild(list1);
        aDiv2.appendChild(addTextNodeClass("p", "headline-list", pDiv2));
        aDiv2.appendChild(list2);
        art.appendChild(aDiv0);
        art.appendChild(aDiv1);
        art.appendChild(aDiv2);
        hdr.appendChild(addTextNode("h1", headTxt));
        ftr.appendChild(addTextNode("h1", footTxt));
        wrp.appendChild(hdr);
        wrp.appendChild(art);
        wrp.appendChild(ftr);

        return wrp;
    }

    return generateNodes();
}

var doc = document.body;

//CREATE ELEMENT
// doc.appendChild(addObj(page));

//CLONE NODE
// var myClone = addObj(page).cloneNode(true);
// doc.appendChild(myClone);

//CLONE NODE FRAGMENT
var frag = document.createDocumentFragment();
frag.appendChild(addObj(page).cloneNode(true));
var myClone = frag.cloneNode(true);
doc.appendChild(myClone);
