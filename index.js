function append(){
    $('#email-input').each(function(){
        $('#tasks').append('<br>' + $('#email-input').val());
    });

    $('#password-input').each(function(){
        $('#tasks').append('<br>' + $('#password-input').val());
    });
};