$(document).ready(function () {
    $('#action').click(function() {
        $('#main-content').fadeIn(2000);   
        $('#action').hide();
    });
    
    $('#change-color').click(function() {
            $('#main-content').css('color', 'blue');
    });
    
    $('#italicize').click(function() {    
        $('#italicize').ready(function () {    
            $('.italic').css('font-style', 'italic');
        });
    });
    
    $('#create-new').click(function() {     
        $('#create-new').ready(function () {
            var newText = prompt("Please enter the text you want to appear in your element.");
            $('#new-element-holder').append('</br>' + '<strong>' +  newText + '</strong>');
        });
    });
});




