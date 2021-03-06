/*
 * jQuery Plugin Background Fit
 * Version 0.0.5
 * Update: 2014-07-29 12:51:16
 * Copyright 2014 thingsym
 * URI: http://blog.thingslabo.com/archives/000396.html
 * Repository: https://github.com/thingsym/jquery.background-fit
 * Dual licensed under the MIT and GPLv2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 * Required: jQuery 1.11+ Or jQuery 2.x+ (http://jquery.com/download/)
*/

(function( $ ) {
  $.fn.bg_fit = function() {
    var bg_fit = this;
    $(window).on("load resize", bg_fit, function() {
      var url = bg_fit.css('background-image').replace('url(', '').replace(')', '').replace(/'|"/g, '');
      if ( url == 'none' ) return;

      var img = $('<img>');
      img.hide().attr('src', url);
      bg_fit.append(img);

      img.on('load', function() {
        var width = $(this).width();
        var height = $(this).height();
        if ( !width ) return;
        if ( !height ) return;
        bg_fit.height( parseInt( height * ( bg_fit.width() / width ) ) );
        $(this).remove();
      });
    });
    return this;
  };
})( jQuery );
