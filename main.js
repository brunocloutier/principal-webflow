<!-- wrapper.js -->
<script type="text/javascript">
$(document).ready(function(){const t=document.getElementsByClassName("wrapper")[0];$(".fade-out-link").each(function(){$(this).click(function(){var e=$(this).attr("href");$(this).attr("href","#"),t.classList.add("wrapper--fade-out"),setTimeout(function(){window.location.href=e},250)})})});
</script>

<!-- fade-in-element.js -->
<script type="text/javascript">
$(document).ready(function() {

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
</script>
