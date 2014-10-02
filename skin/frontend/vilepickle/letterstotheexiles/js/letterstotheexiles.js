jQuery10(document).ready(function(){

	//Image hack
	if( "MozAppearance" in document.documentElement.style ) {
	    jQuery10('.img-responsive').addClass('image-scale-hack');
	}

	//Breadcrumb
	if(!jQuery10('ol.breadcrumb li:nth-child(2)').html()){
		jQuery10('ol.breadcrumb').css("display","none");
	}

});

enquire.register("screen and (max-width: 992px)", {

    deferSetup : true,
    setup : function() {
        // load content via AJAX
    },
    match : function() {

    },
    unmatch : function() {

    }  

});