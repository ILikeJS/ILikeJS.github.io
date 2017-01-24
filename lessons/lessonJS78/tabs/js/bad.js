///////// TABS /////////////
  var $one = $('#tab0');
  var $two = $('#tab1');
  var $three = $('#tab2');
  var $link0 = $('#link0');
  var $link1 = $('#link1');
  var $link2 = $('#link2');

  $one.css({ display: 'block' });
  $two.css({ display: 'none' });
  $three.css({ display: 'none' });

  $link0.on('click', 'a', function() {
    $one.css({
      display: 'block'
    });
    $two.css({
      display: 'none'
    });
    $three.css({
      display: 'none'
    });
  });

  
  $link1.on('click','a', function() {
    $one.css({
      display: 'none'
    });
    $two.css({
      display: 'block'
    });
    $three.css({
      display: 'none'
    });
  });


  $link2.on('click', 'a', function() {
    $one.css({
      display: 'none'
    });
    $two.css({
      display: 'none'
    });
    $three.css({
      display: 'block'
    });
  });
