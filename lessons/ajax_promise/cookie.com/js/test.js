
// console.log("Cookie следят за этим браузером? cookieEnabled говорит: ", navigator.cookieEnabled === true);
// console.log("Содержимое cookie текщего сайта ", txt);
//
_id("spy").innerHTML = navigator.cookieEnabled === true;
_id("txt").innerHTML = document.cookie;

// document.cookie = "user_name=Bart;";
// console.log("Содержимое cookie текщего сайта ", document.cookie);
// var test = ("cookie" in document && (document.cookie.length > 0 ||  (document.cookie = "test").indexOf.call(document.cookie, "test") > -1));
// console.log("Cookie следят за этим браузером ?", test);


// "Cookie следят за этим браузером? cookieEnabled говорит: ", navigator.cookieEnabled === true;
// "Содержимое cookie текщего сайта ", document.cookie;
// document.cookie = "user_name=Bart";
// document.cookie = "user_age=10";
// document.cookie = "user_father=Homer;";
// // document.cookie = "user_mother=Marge;";
// document.cookie;
// "Модифициуем\\Update данные:";
// document.cookie = "user_name=Bart Simpson";
// document.cookie = "user_age=11";
// document.cookie = "user_father=Homer Simpson;";
// // document.cookie = "user_mother=Marge Simpson;";
// document.cookie;
// "Удалим \\Delete данные:";
// document.cookie = "user_name=Bart Simpson; max-age=-1;";
// document.cookie = "user_age=11; max-age=-1;";
// document.cookie;
// "Удалим остальное";
// document.cookie = "user_father=Homer Simpson; max-age=-1;";
// document.cookie = "user_mother=Marge Simpson; max-age=-1;"
