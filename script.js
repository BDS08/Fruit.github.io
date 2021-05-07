

$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
      
    $('.parallax').parallax();
    $('.myreview').carousel({
        numVisible:7,
        shift:55,
        padding:55,

    })  ; 
    
});

function togglemodel(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open()
}

