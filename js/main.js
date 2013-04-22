jQuery(document).ready(function($) {
    // Load questions
    $.getJSON('questions.json', function(data) {
        // Loop all questions
        for (var i = 0; i < data.length; i++) {
            // Get data to variables
            var img = data[i].img;
            var question = data[i].question;
            var answers = data[i].answers;


            // Create element for the question
            var element = $('<article></article>')
                .addClass('question')
                .attr('data-number', i + 1)
                .append($('<figure></figure>')
                .append($('<img />').attr('src', img)))
                .append($('<p></p>').text(question))
                .append($('<div></div>').addClass('buttonbox'));

            // Create elements for the answers
            for (var j = 0; j < answers.length; j++) {
                element.find('.buttonbox').append($('<div></div>').addClass('button').text(answers[j]));
            }

            // Add question to DOM
            element.appendTo('#questions');
        }
    }).fail(function() {
        //alert('error');
    });

    // Click event to start the "slideshow"
    $('#continue').click(function() {
        $('#help').fadeOut('slow', function() {
            $('#questions').fadeIn('slow');
        });
    });
});

