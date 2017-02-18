
var spy = navigator.cookieEnabled === true;
var txt = document.cookie;

console.log("Cookie следят за этим браузером? cookieEnabled говорит: ", spy);
console.log("Содержимое cookie текщего сайта ", txt);

_id("spy").innerHTML = spy;
_id("txt").innerHTML = txt;

document.cookie = "user_name=Bart; path=/; domain=cookie.com";
console.log("Содержимое cookie текщего сайта ", document.cookie);
// var test = ("cookie" in document && (document.cookie.length > 0 ||  (document.cookie = "test").indexOf.call(document.cookie, "test") > -1));
// console.log("Cookie следят за этим браузером ?", test);
