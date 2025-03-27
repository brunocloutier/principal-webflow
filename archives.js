
  // Variables
  const archivesLightbox = document.getElementById('archives-lightbox');
	const archivesListItems = document.querySelectorAll('.archives__list-item');
  
  // Bind Click Events
  archivesListItems.forEach(item => {
		item.addEventListener('click', (e) => {
      openLightbox(e.target.getAttribute('data-slug'));
      e.preventDefault();
    });
  });
	
  // Close Lightbox
  function closeLightbox() {
  	jQuery('#lightbox').addClass('is-hidden');
    jQuery('#lightbox-data').addClass('is-hidden');
  }
  
  function openLightbox(slug) {
  	
    jQuery('#lightbox-data').html('');
  	jQuery('#lightbox').removeClass('is-hidden');
  	
    jQuery('#lightbox-data').load('/archives-collection/' + slug + ' #data', function() {
    
    	jQuery('#lightbox-data').removeClass('is-hidden');
    
    	jQuery('#archives-lightbox-close').bind('click', closeLightbox);
    	
      var main = new Splide( '#main-slider', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
      } );

      var thumbnails = new Splide( '#thumbnail-slider', {
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

      main.sync( thumbnails );
      main.mount();
      thumbnails.mount();
    });
    
  }
