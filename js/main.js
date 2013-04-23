jQuery(document).ready(function($) {
    function nextQuestion() {
    }
    var questionNumber = 0;
    var data;

    // Load questions
    $.getJSON('questions.json', function(d) {
        data = d;
        // Loop all questions
        for (var i = 0; i < data.length; i++) {
            // Get data to variables
            var img = data[i].img;
            var question = data[i].question;
            var answers = data[i].answers;


            // Create element for the question
            var element = $('<article></article>')
                .addClass('question')
                .attr('id', 'question-' + i.toString())
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
        $('.question .buttonbox .button').click(function() {
            // Disable click event while fade is going
            if ($(this).parent().parent().is(':animated')) {
                return;
            }

            // Save the answer
            data.answer = $(this).index();
            $('#question-' + questionNumber).fadeOut('slow', function() {
                // Next question
                questionNumber += 1;
                var next = $('#question-' + questionNumber);
                if (next.length != 0) {
                    next.fadeIn('slow');
                }
                else {
                    // Show end screen
                    $('#end').fadeIn('slow');
                }
            });
        });
    }).fail(function() {
       
    });

    // Click event to start the "slideshow"
    $('#continue').click(function() {
        $('#help').fadeOut('slow', function() {
            $('#questions').fadeIn('slow');
        });
    });

});

