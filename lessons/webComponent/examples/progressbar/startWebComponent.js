(function(){
  var progress = document.querySelector('progress-bar');
  var complete = 0;
  var progressInterval = setInterval(() => {
    complete += 1;
    if (complete <= 100) {
      progress.setAttribute('complete', complete);
    } else {
      clearInterval(progressInterval);
    }
  }, 300);
})();
