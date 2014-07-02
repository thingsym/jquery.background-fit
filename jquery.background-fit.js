/*
 * jQuery Plugin Background Fit
 * Version 0.0.3
 * Copyright 2013-2014 thingsym
 * URI: http://www.thingslabo.com
 * Update: 2014-05-14 18:22
 * Dual licensed under the MIT and GPLv2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Required : jQuery 1.11+ Or jQuery 2.x+ (http://jquery.com/download/)
*/

(function( $ ) {
  $.fn.fit = function() {
    var url = $(this).css('background-image').replace('url(', '').replace(')', '').replace(/'|"/g, '');
    if (url == 'none' ) return;

    var target = this;

    var bgImg = $('<img>');
    bgImg.hide();

    bgImg.on('load', target, function() {
      var width = $(this).width();
      var height = $(this).height();

      if ( ! width ) return;
      if ( ! height ) return;
      h = parseInt( height * ( target.width() / width ) );
      target.height(h);
      $(this).remove();
    });

    $(this).append(bgImg);
    bgImg.attr('src', url);
  };

  $.fn.bg_fit = function() {
    var target = this;
    $(window).on("load resize", target, function() {
      $(target).fit();
    });
  };
} )( jQuery );