$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.contenedor-menu').addClass("sticky");
        }else{
            $('.contenedor-menu').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


//slide-up

$('.scroll-up-btn').click(function(){
    $('.html').animate({scrollTop:0});
});

//Typing

var typed = new Typed(".typing", {
    strings: ["Analista de negocio", "Analista de requerimientos", "Analista de Sistemas", "Analista de negocios", "PM Jr", "Scrum Master Jr",],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
});


//toggle menu/navbar 

    // $('.menu-btn').click(function(){
    //     $('.navbar .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    // });

    //owl carousel
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplaHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 1,
                nav: false
            }
        }


    });

});

