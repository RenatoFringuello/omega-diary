$(function(){

    
    //login
    $("#goHome").on("click", ()=>{
        goto("pages/home.html");   
    });
    
    //menu
    $(".hamburger.closed").on("click", ()=>{
        toggleHam();
    });

    // home
    var isMono = true;
    setFrequency(isMono);
    $("#frequency input").on("click", ()=>{
        isMono = !isMono;
        setFrequency(isMono);
    });
    
    //workout

            // rest
    var open = false;
    $("#rest").on("click", ()=>{
        open = !open;
        if(open){
            setTimer();
            showTimer();
            count();
        }
        else{
            stopTimer();
        }
    });

    // slick carousel _ horiz
    var slideContainer = $('.slide-container');
        slideContainer.slick({
        arrows: false,
        initialSlide:0,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        swipeToSlide:true
    });

    // end

    //con un sito che ha più pagine html non
    // si può passare argomenti via url come con php
    // e non so come settare un tema per tutte le pagine
    // scrivere "var id;" non aiuta, perchè il contenuto
    // viene inizializzato al caricamento del file
    // js da ogni pagina html


    // setTheme(id);
    // $("#theme input[type='radio']").on("click", (e)=>{
    //     var id = e.target.getAttribute("id");
    //     setTheme(id);
    // });
});