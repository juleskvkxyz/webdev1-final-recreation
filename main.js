$('#burger').click(function(){

    $('nav').slideToggle(200);
    
})

$(window).resize(function(){

    if(window.innerWidth > 600) {
        $("nav").show();
    } else {
        $("nav").hide();
    }

})