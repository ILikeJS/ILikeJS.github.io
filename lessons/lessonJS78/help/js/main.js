var sp = $("span");
sp.hide();

$("input").focus(function() {
  sp.hide();
  $(this).next("span").show();
});

// КАВЫЧКИ!!!!
$('input[type="button"]').on("click", function() {
   sp.show().delay(1000).fadeOut(400);
});

// $("input").on("mouseover",  function() {
//   sp.hide();
//   $(this).next("span").show().delay(3000).fadeOut(400);
// });

(function $() {
  dsdasd
});
