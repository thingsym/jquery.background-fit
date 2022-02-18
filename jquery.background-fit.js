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
