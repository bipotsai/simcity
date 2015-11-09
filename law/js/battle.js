/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */;
(function($) {
    $.fn.battle = function(options) {
        return this.each(function() {
           var total_widh = $('.title-5').width();
           var left_percentage = $(this).find('.left').data().percentage
           var left_width = (total_widh - 140) * (left_percentage * 0.01)

           var right_width = total_widh - (left_width + 140) - 1
           $(this).find('.left .user .name').width(left_width)
           $(this).find('.right .user .name').width(right_width)


        });
    };

})(jQuery);
