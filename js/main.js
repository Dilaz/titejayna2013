jQuery(document).ready(function($) {
    $('#continue').click(function() {
        $('#help').fadeOut('slow', function() {
            $('#questions').fadeIn('slow');
        });
    });
});

