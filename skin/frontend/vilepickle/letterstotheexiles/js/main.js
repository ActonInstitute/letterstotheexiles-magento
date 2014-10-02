(function ($) {
  jQuery10(document).ready(function(){
    jQuery10('.nav-icon-show').click(function(){
        jQuery10('.mobile-menu-wrap').show();
        jQuery10('.mobile-nav-wrap').css("width","100%");
        jQuery10('.mobile-nav-wrap').css("height","100%");
        jQuery10('.nav-icon-show').hide();
    });
    jQuery10('.hide-menu').click(function(){
        jQuery10('.mobile-menu-wrap').hide();
        jQuery10('.mobile-nav-wrap').css("width","auto");
        jQuery10('.mobile-nav-wrap').css("height","auto");
        jQuery10('.nav-icon-show').show();
    });
  });
}(jQuery10));