var Webflow = Webflow || [];
Webflow.push(function () {
	
	const lightbox = document.getElementById('lightbox');
	const lightboxData = document.getElementById('lightbox-data');
	const listItems = document.querySelectorAll('.archives__list-item');
	const closeButton = document.getElementById('archives-lightbox-close');
  
  listItems.forEach(item => {
		item.addEventListener('click', (e) => {
      openLightbox(e.target.getAttribute('data-slug'));
      e.preventDefault();
    });
  });
	
  function closeLightbox() {
  	lightbox.addClass('is-hidden');
    lightboxData.addClass('is-hidden');
  }

  function openLightbox(slug) {
    lightbox.removeClass('is-hidden');
		lightboxData.html('');
  	lightboxData.load('/archives-collection/' + slug + ' #data', function() {
    	lightboxData.removeClass('is-hidden');
    
    	$('#archives-lightbox-close').bind('click', closeLightbox);
    	
      var mainSlider = new Splide('#main-slider', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
      } );

      var thumbnailsSlider = new Splide('#thumbnail-slider', {
        fixedWidth  : 75,
        fixedHeight : 50,
        gap         : 5,
        rewind      : true,
        pagination  : false,
        arrows			: true,
        cover       : true,
        isNavigation: true,
        breakpoints : {
          600: {
            fixedWidth : 60,
            fixedHeight: 44,
          },
        },
      } );

      mainSlider.sync(thumbnailsSlider);
      mainSlider.mount();
      thumbnailsSlider.mount();
    });
  }
});
