$(document).ready(function(){

    $('.menu li:has(ul)').click(function(e){
        e.preventDefault();

        // alert('funciono');

        if($(this).hasClass('activado')){
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();
        }else{
        
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });

    // Mostrar menù

    $('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars');
    $('.contenedor-menu .menu').slideToggle();
    
    $('#button-menu').click(function(){
        //  alert('funciono');

             if($('#button-menu').attr('class') == 'fa fa-bars'){
                 $('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close');
                 $('.contenedor-menu .menu').slideDown()
             }else{
                 $('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars');
                 $('.contenedor-menu .menu').slideToggle();
             }
         });



    // $(window).resize(function(){
    //     if($(document).width() > 650){
    //         $('.contenedor-menu .menu').css({'display':'block' });
    //     }

    //     if($(document).width() < 650){
    //         $('.contenedor-menu .menu').css({'display':'none' });
    //         $('.menu li ul').slideUp();
    //         $('.menu li').removeClass('activado');
    //     }
    // });

    $('.menu li ul li a').click(function(){
        window.location.href = $(this).attr("href");
    });

});