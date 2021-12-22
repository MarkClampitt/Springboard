"use strict";

var shadowVal;

(function ($) {

  function setScrollShadows(position) {
    // If the scroll area is larger than the display area show shadow to indicate that scrolling can occur.
    if (position.cur >= 0 && position.cur <= position.end) {
      if (position.cur === 0 && position.end === 0) {
        $('.op-shadow-left, .op-shadow-right').hide();
        shadowVal = 'none';
      } else if (position.end === 0 && shadowVal !== 'none') {
        $('.op-shadow-left, .op-shadow-right').hide();
        shadowVal = 'none';
      } else if (position.cur === 0 && shadowVal !== 'right') {
        $('.op-shadow-right').show();
        $('.op-shadow-left').hide();
        shadowVal = 'right';
      } else if (position.cur > 0 && position.cur !== position.end && shadowVal !== 'both') {
        $('.op-shadow-left').show();
        $('.op-shadow-right').show();
        shadowVal = 'both';
      } else if (position.cur > 0 && position.cur === position.end && shadowVal !== 'left') {
        $('.op-shadow-left').show();
        $('.op-shadow-right').hide();
        shadowVal = 'left';
      } else {
        // shadowVal = 'left';
      }
    }
  }

  $(document).ready(function () {
    var slyOptions = {
      horizontal: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 0,
      elasticBounds: 0,
      moveBy: 560,
      speed: 200,
      // swingSpeed: 0,
      // smart: 1,
      // Buttons
      forward: $('#op-slider-navigation .forward'),
      backward: $('#op-slider-navigation .backward') };

    // frameHeight;

    var frame = new Sly($('#op-frame'), slyOptions);

    frame.on('load move', function () {
      var p = $('.op-book-wrapper'),
      offset = p.position(),
      position;

      position = this.pos;
      setScrollShadows(position);

      $('.op-book-wrapper').css({ top: offset.top, left: -position.cur });

    });

    frame.init();

  });

  $(window).resize(function () {

    $('#op-frame').sly('reload');
  });

})(jQuery);
//# sourceMappingURL=oddsshark_odds_sly.js.map

;/*})'"*/
;/*})'"*/
