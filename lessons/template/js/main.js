

  var obj = {
   headline: "Выбирите один правильный ответ на каждый вопрос",
   ask_00: "Два в степени ноль равно:",
   variant_00: {
     answer_00: "0",
     answer_01: "1",
     answer_02: "2",
   },
   ask_01: "Два в степени один равно:",
   variant_01: {
     answer_00: "0",
     answer_01: "1",
     answer_02: "2",
   },
   ask_02: "Два в степени два равно:",
   variant_02: {
     answer_00: "2",
     answer_01: "4",
     answer_02: "8",
   },
   right: 162
  };

var tmp = document.getElementById('template').innerHTML;

var myContent = tmpl(tmp, obj);


document.getElementsByClassName("wrapper")[0].innerHTML = myContent;
