var i = 0;
$(document).ready(function() {
    $('.page-item').click(function() {
        $("img").remove('active');
        $("img").eq(i).addClass('active');
        $("img").css('right:250px')
        $("img").animate({ left: '250px' });
        i++;
    })
});