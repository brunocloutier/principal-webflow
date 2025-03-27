var Webflow = Webflow || [];
Webflow.push(function () {

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
  
});
