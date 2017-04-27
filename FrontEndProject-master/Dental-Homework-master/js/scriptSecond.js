//second Page top menu
$(document).ready(function(e) {
    var head = $('.headS').css('height');
    var menu = $('.menuLineS').css('bottom');
    var int = (parseInt(head) + (-1 * parseInt(menu)));
    $(document).scroll(function() {
        if (window.pageYOffset > int) {
            $('.menuLineS').css({
                'position': 'fixed',
                'min-width': '100%',
                'top': '0'
            });
        } else {
            $('.menuLineS').css({
                'position': 'relative',
                'min-width': '1170px',
                'top': '32px'
            });
        }
    });
});
//Input SEARCH
$(document).ready(function() {
    var action = 1;
    $('#searchX a').click(function() {
        if (action == 1) {
            $('.customLabel').css({ 'display': 'block', 'cursor': 'text' })
            $('#search').css('display', 'block');
            $('#menuName').css('display', 'none');
            $('#searchX i').removeClass('fa-search').addClass('fa-times');
            $('.form-label,#search').click(function() {
                $('.form-label').css({
                    'top': '0',
                    'font-size': '16px',
                });
            });
            action = 2;
        } else {
            $('.customLabel').css({ 'display': 'none' })
            $('#search').css('display', 'none');
            $('#menuName').css({ 'display': 'flex' });
            $('#searchX i').removeClass('fa-times').addClass('fa-search');
            action = 1;
        }
    });
});