(function($) {
    $.fn.move_to = function(targetElm, options){
        return this.each(function(){
            move_to(this, targetElm, options);
        });
    };
    $.extend({
        move_to: move_to
    });
    function move_to(sourceElm, targetElm, options) {
        var source = $(sourceElm).eq(0),
            target = $(targetElm).eq(0);
        var defaults = {
            pixels_per_second: 1000,
            initial_css: {
                "position": "absolute",
                "top": source.offset().top,
                "left": source.offset().left,
                "z-index": 100000
            }
          //  callback: function(){ return; }
        };
        if (options && options.initial_css) {
            options.initial_css = $.extend({}, defaults.initial_css, options.initial_css);
        }
        options = $.extend({}, defaults, options);
        var dy = source.offset().top + source.width()/2 - target.offset().top,
            dx = source.offset().left + source.height()/2 - target.offset().left,
            pixel_distance = Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))),
            duration = (pixel_distance/options.pixels_per_second)*1000,
            object = source
                .css(options.initial_css)
                .appendTo('body')
                .animate({
                    top: target.offset().top,
                    left: target.offset().left
                }, {
                    duration: duration
                })
                .animate({
                    opacity: 1
                }, {
                    duration: 100,
                    complete: function(){
                       // object.remove();
                        $(sourceElm).appendTo(targetElm);
                      //  return options.callback();
                    }
                });
    }
})(jQuery);
