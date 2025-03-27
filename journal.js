<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"></script>
<script type="text/javascript">

  window.onload = function() {

    var grid = document.querySelector('.journal-list');
    var msnry = new Masonry(grid, {
      columnWidth: '.journal-list-item__sizer',
      itemSelector: '.journal-list-item',
      percentPosition: true,
      transitionDuration: 0
    });

    imagesLoaded('#journal-list', function() {
      var msnry = new Masonry(grid, {
        columnWidth: '.journal-list-item__sizer',
        itemSelector: '.journal-list-item',
        percentPosition: true,
        transitionDuration: 0
      });
    });

  }
  
</script>
