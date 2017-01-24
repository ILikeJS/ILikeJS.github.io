
// метод работает только с кодом, заданным статически
$("#id > li > img").on("click", function () {
  $(this).parent().remove();
});

// метод работает с кодом, заданным статически и динамически  Deprecated 3.0
// $("#id").delegate("li > img", "click", function () {
//   $(this).parent().remove();
// });


//метод работает с кодом, заданным статически и динамически
$("#id").on("click", "img", function () {
  $(this).parent().remove();
});

var i = 1;

$("button").on("click", function () {
  console.log(i);

    $("ul").append('<li><img src="img/'+ i
    + '.png" width="100" alt="img'
    + i + '"></li>');
    i++;

});
