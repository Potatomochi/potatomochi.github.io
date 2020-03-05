$(document).ready(function(){
    

    $('#portfolio').mouseenter(function(){
        $('.text').addClass("animated slideInLeft");
    });
    $('#portfolio').mouseleave(function(){
        $('.text').removeClass("moggle");
        $('.text').addClass("moggle-exit");
    })


});




