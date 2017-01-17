var quest = {
  headline: "It's questions about JS.",
  question: "What is \"text\"",
  answer0: "String",
  answer1: "Number",
  answer2: "Boolean",
};

function toHTML(a, b, c, d, e, f) {
   var res = '<h1>' + a + '</h1>';
   var res0 = '<h3>' + b + '</h3>';
   var res1 = '<p>' + c + '</p>';
   var res2 = '<p>' + d + '</p>';
   var res3 = '<p>' + e + '</p>';
   var all =  res + '\n' + res0 + '\n' + res1 + '\n' + res2 + '\n' + res3;
   return console.log(all);
}

function easyToHTML(obj) {
  toHTML(obj.headline, obj.question, obj.answer0, obj.answer1, obj.answer2);
}

easyToHTML(quest);
