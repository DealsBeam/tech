(function($) {
    "use strict";

    // Dark Mode
    var darkMode = {
        init: function() {
            var toggle = $('.jeg_dark_mode_toggle');
            if (localStorage.getItem('darkmode') === 'true') {
                $('body').addClass('jnews-dark-mode');
                toggle.prop('checked', true);
            }
            toggle.on('click', function() {
                if ($(this).is(':checked')) {
                    $('body').addClass('jnews-dark-mode');
                    localStorage.setItem('darkmode', 'true');
                } else {
                    $('body').removeClass('jnews-dark-mode');
                    localStorage.setItem('darkmode', 'false');
                }
            });
        }
    };

    // Mobile Menu
    var mobileMenu = {
        init: function() {
            var toggle = $('.jeg_mobile_toggle');
            var close = $('.jeg_menu_close');
            toggle.on('click', function(e) {
                e.preventDefault();
                $('body').toggleClass('jeg_show_menu');
            });
            close.on('click', function(e) {
                e.preventDefault();
                $('body').removeClass('jeg_show_menu');
            });
        }
    };

    $(document).ready(function() {
        darkMode.init();
        mobileMenu.init();
    });

})(jQuery);
