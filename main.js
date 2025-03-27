var Webflow = Webflow || [];
Webflow.push(function () {

  // Wrapper
  const wrapper = document.getElementsByClassName('wrapper')[0];
    
  $('.fade-out-link').each(function() {
    $(this).click(function() {
      var url = $(this).attr('href');
      $(this).attr('href', '#');
      wrapper.classList.add('wrapper--fade-out');
      setTimeout(function() {
        window.location.href = url;
      }, 250);
    });
  });

  // Fade In Elements
  const elements = document.getElementsByClassName('fade-in-element');
  const delay = 100;
  const initialDelay = 200;

  setTimeout(function() {
    var i = 0;

    $(elements).each(function() {
      $(this).addClass('fade-in-element--visible');
      $(this).css('transition-delay', (i * delay) + 'ms');
      i ++;
    });
  }, initialDelay);

});
