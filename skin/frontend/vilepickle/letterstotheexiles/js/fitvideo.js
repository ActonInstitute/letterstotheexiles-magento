// By Chris Coyier & tweaked by Mathias Bynens

jQuery10(function() {

	// Find all YouTube videos
	var $allVideos = jQuery10(".product-shop iframe"),
	    // The element that is fluid width
	    $fluidEl = jQuery10(".product-shop iframe").parent(),
	    //Default width
		width = 682,
		height = 383;

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {
		if(this.width.substring(this.width.length-1,this.width.length) !== '%'){
			//console.log('inside this width');
			width = this.width;
		}
		height = width * 0.5625;
		jQuery10(this)

			.data('aspectRatio', height / width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	jQuery10(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = jQuery10(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});